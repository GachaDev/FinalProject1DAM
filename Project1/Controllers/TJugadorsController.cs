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
    public class TJugadorsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TJugadorsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TJugador>>> GetTJugador()
        {
            string query = "SELECT TJugador.*, TTeam.logo AS EquipoLogo FROM TJugador INNER JOIN TTeam ON TJugador.equipo = TTeam.name";
            var tJugador = await _context.TJugador.FromSqlRaw(query).ToListAsync();

            if (tJugador == null)
            {
                return NotFound();
            }

            // Recorrer la lista de jugadores y asignar el valor del EquipoLogo
            foreach (var jugador in tJugador)
            {
                // Obtener el equipo correspondiente al jugador
                var equipo = await _context.TTeam.FindAsync(jugador.equipo);

                // Asignar el valor del EquipoLogo si se encuentra el equipo
                if (equipo != null)
                {
                    jugador.EquipoLogo = equipo.logo;
                }
            }

            return tJugador;
        }



        // GET: api/TJugadors/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TJugador>> GetTJugador(int id)
        {
            string query = "SELECT * FROM TPartido WHERE Id = @id";
            var tJugador = await _context.TJugador.FromSqlRaw(query, new SqlParameter("@id", id)).FirstOrDefaultAsync();

            if (tJugador == null)
            {
                return NotFound();
            }

            return tJugador;
        }

        // PUT: api/TJugadors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTJugador(int id, TJugador tJugador)
        {
            if (id != tJugador.id)
            {
                return BadRequest();
            }

            string query = "UPDATE TJugador SET Columna1 = @valor1, Columna2 = @valor2,Columna3 = @valor3,Columna4 = @valor4,Columna5 = @valor5,Columna6 = @valor6,Columna7 = @valor7 WHERE Id = @id";
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tJugador.id),
                new SqlParameter("@valor2", tJugador.equipo),
                new SqlParameter("@valor3", tJugador.nombre),
                new SqlParameter("@valor4", tJugador.equipo),
                new SqlParameter("@valor5", tJugador.posicion),
                new SqlParameter("@valor6", tJugador.imagen),
                new SqlParameter("@valor7", tJugador.tipo),
                new SqlParameter("@id", id)
            };

            _context.Database.ExecuteSqlRaw(query, parameters);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TJugadorExists(id))
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

        // POST: api/TJugadors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TJugador>> PostTJugador(TJugador tJugador)
        {
            if (_context.TJugador == null)
            {
                return Problem("Entity set 'AppDbContext.TPartidoScore' is null.");
            }

            string insertQuery = "INSERT INTO TPartidoScore (Columna1, Columna2,Columna3,Columna4,Columna5,Columna6,Columna7) VALUES (@valor1, @valor2,@valor3,@valor4,@valor5,@valor6,@valor7)";
            SqlParameter[] insertParameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tJugador.id),
                new SqlParameter("@valor2", tJugador.equipo),
                new SqlParameter("@valor3", tJugador.nombre),
                new SqlParameter("@valor4", tJugador.equipo),
                new SqlParameter("@valor5", tJugador.posicion),
                new SqlParameter("@valor6", tJugador.imagen),
                new SqlParameter("@valor7", tJugador.tipo)
            };

            _context.Database.ExecuteSqlRaw(insertQuery, insertParameters);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTJugador", new { id = tJugador.id }, tJugador);
        }

        // DELETE: api/TJugadors/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTJugador(int id)
        {
            if (_context.TJugador == null)
            {
                return NotFound();
            }

            string deleteQuery = "DELETE FROM TJugador WHERE Id = @id";
            SqlParameter deleteParameter = new SqlParameter("@id", id);

            var tJugador = await _context.TJugador.FromSqlRaw(deleteQuery, deleteParameter).FirstOrDefaultAsync();
            if (tJugador == null)
            {
                return NotFound();
            }

            _context.TJugador.Remove(tJugador);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TJugadorExists(int id)
        {
            return _context.TJugador?.Any(e => e.id == id) ?? false;
        }
    }
}
