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
    public class TJornadasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TJornadasController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/TJornadas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TJornada>>> GetTJornada()
        {
            string query = "SELECT * FROM TJornada";
            var tJornada = await _context.TJornada.FromSqlRaw(query).ToListAsync();

            if (tJornada == null)
            {
                return NotFound();
            }

            return tJornada;
        }

        // GET: api/TJornadas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TJornada>> GetTJornada(int id)
        {
            string query = "SELECT * FROM TJornada WHERE Id = @id";
            var tJornada = await _context.TJornada.FromSqlRaw(query, new SqlParameter("@id", id)).FirstOrDefaultAsync();

            if (tJornada == null)
            {
                return NotFound();
            }

            return tJornada;
        }

        // PUT: api/TJornadas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTJornada(int id, TJornada tJornada)
        {
            if (id != tJornada.id)
            {
                return BadRequest();
            }

            string query = "UPDATE TJugador SET Columna1 = @valor1, Columna2 = @valor2 WHERE Id = @id";
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tJornada.id),
                new SqlParameter("@valor2", tJornada.fecha),
                new SqlParameter("@id", id)
            };

            _context.Database.ExecuteSqlRaw(query, parameters);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TJornadaExists(id))
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

        // POST: api/TJornadas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TJornada>> PostTJornada(TJornada tJornada)
        {
            if (_context.TJornada == null)
            {
                return Problem("Entity set 'AppDbContext.TJornada' is null.");
            }

            string insertQuery = "INSERT INTO TJornada (Columna1, Columna2) VALUES (@valor1, @valor2)";
            SqlParameter[] insertParameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tJornada.id),
                new SqlParameter("@valor2", tJornada.fecha)

            };

            _context.Database.ExecuteSqlRaw(insertQuery, insertParameters);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTJugador", new { id =tJornada.id }, tJornada);
        }


        // DELETE: api/TJornadas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTJornada(int id)
        {
            if (_context.TJornada == null)
            {
                return NotFound();
            }

            string deleteQuery = "DELETE FROM TJornada WHERE Id = @id";
            SqlParameter deleteParameter = new SqlParameter("@id", id);

            var tJornada = await _context.TJornada.FromSqlRaw(deleteQuery, deleteParameter).FirstOrDefaultAsync();
            if (tJornada == null)
            {
                return NotFound();
            }

            _context.TJornada.Remove(tJornada);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TJornadaExists(int id)
        {
            return _context.TJornada?.Any(e => e.id == id) ?? false;
        }
    }
}
