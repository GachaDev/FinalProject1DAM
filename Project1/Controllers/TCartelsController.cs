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
            var cartel = await _context.TCartel.FindAsync(id);

            if (cartel == null)
            {
                return NotFound();
            }

            string deleteQuery = "DELETE FROM TCartel WHERE idCartel ={0}";

            _context.Database.ExecuteSqlRaw(deleteQuery, id);

            return Ok(new { message = "Cartel eliminado con éxito" });
        }

        private bool TCartelExists(int id)
        {
            return _context.TCartel?.Any(e => e.id == id) ?? false;
        }
    }
}
