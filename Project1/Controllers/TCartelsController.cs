using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Project1.Context;
using Project1.Models;

namespace Project1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TCartelsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TCartelsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/TCartels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TCartel>>> GetTCartel()
        {
            string query = "select TCartel.*, TJugador.imagen,TJugador.nombre, TJugador.equipo, TTeam.background from TCartel INNER JOIN TJugador ON TJugador.id = TCartel.id INNER JOIN TTeam ON TTeam.name = TJugador.equipo";
            var tCartel = await _context.TCartel.FromSqlRaw(query).ToListAsync();

            if (tCartel == null)
            {
                return NotFound();
            }
            foreach (var cartel in tCartel)
            {
                var jugador = await _context.TJugador.FindAsync(cartel.id);
                if(jugador != null)
                {
                    cartel.imagen = jugador.imagen;
                    cartel.equipo=jugador.equipo;
                    cartel.nombre = jugador.nombre;
                }
                var equipo= await _context.TTeam.FindAsync(cartel.equipo);
                if(equipo != null)
                {
                    cartel.background=equipo.background;
                }
                
            }


            return tCartel;
        }

        // GET: api/TCartels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TCartel>> GetTCartel(int id)
        {
            string query = "SELECT * FROM TCartel WHERE Id = @id";
            var tCartel = await _context.TCartel.FromSqlRaw(query, new SqlParameter("@id", id)).FirstOrDefaultAsync();

            if (tCartel == null)
            {
                return NotFound();
            }

            return tCartel;
        }

        // PUT: api/TCartels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTCartel(int id, TCartel tCartel)
        {
            if (id != tCartel.id)
            {
                return BadRequest();
            }

            string query = "UPDATE TCartel SET Columna1 = @valor1, Columna2 = @valor2,Columna3 = @valor3,Columna4 = @valor4 WHERE Id = @id";
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tCartel.id),
                new SqlParameter("@valor2", tCartel.idCartel),
                new SqlParameter("@valor3", tCartel.texto1),
                new SqlParameter("@valor4", tCartel.texto2),
                new SqlParameter("@id", id)
            };

            _context.Database.ExecuteSqlRaw(query, parameters);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TCartelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TCartels

        [HttpPost]
        public async Task<ActionResult<TCartel>> PostTCartel([FromBody] TCartel TCartel)
        {
            if (TCartel == null)
            {
                return Problem("Entity set 'AppDbContext.TCartel' is null.");
            }

            string insertQuery = "INSERT INTO TCartel (id,texto1,texto2) VALUES ({0}, {1}, {2})";

            _context.Database.ExecuteSqlRaw(insertQuery, TCartel.id, TCartel.texto1, TCartel.texto2);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Cartel creado con éxito" });
        }

        // DELETE: api/TCartels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTCartel(int id)
        {
            if (_context.TCartel == null)
            {
                return NotFound();
            }

            string deleteQuery = "DELETE FROM TCartel WHERE Id = @id";
            SqlParameter deleteParameter = new SqlParameter("@id", id);

            var tCartel = await _context.TCartel.FromSqlRaw(deleteQuery, deleteParameter).FirstOrDefaultAsync();
            if (tCartel == null)
            {
                return NotFound();
            }

            _context.TCartel.Remove(tCartel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TCartelExists(int id)
        {
            return _context.TCartel?.Any(e => e.id == id) ?? false;
        }
    }
}
