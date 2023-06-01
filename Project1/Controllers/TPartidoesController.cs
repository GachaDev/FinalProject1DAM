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
    public class TPartidoesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TPartidoesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/TPartidoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TPartido>>> GetTPartido()
        {
            string query = "SELECT * FROM TPartido";
            var tPartidos = await _context.TPartido.FromSqlRaw(query).ToListAsync();

            if (tPartidos == null)
            {
                return NotFound();
            }

            return tPartidos;
        }

        // GET: api/TPartidoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TPartido>> GetTPartido(int id)
        {
            string query = "SELECT * FROM TPartido WHERE Id = @id";
            var tPartido = await _context.TPartido.FromSqlRaw(query, new SqlParameter("@id", id)).FirstOrDefaultAsync();

            if (tPartido == null)
            {
                return NotFound();
            }

            return tPartido;
        }

        // PUT: api/TPartidoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTPartido(int id, TPartido tPartido)
        {
            if (id != tPartido.id)
            {
                return BadRequest();
            }

            string query = "UPDATE TTeam SET Columna1 = @valor1, Columna2 = @valor2,Columna3 = @valor3 WHERE Id = @id";
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tPartido.id),
                new SqlParameter("@valor2", tPartido.jornada),
                new SqlParameter("@valor3", tPartido.hora),
                new SqlParameter("@id", id)
            };

            try
            {
                await _context.Database.ExecuteSqlRawAsync(query, parameters);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TPartidoExists(id))
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


        // POST: api/TPartidoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TPartido>> PostTPartido(TPartido tPartido)
        {
            if (_context.TPartido == null)
            {
                return Problem("Entity set 'AppDbContext.TPartidoScoreGoals' is null.");
            }

            string insertQuery = "INSERT INTO TPartidoScoreGoals (Columna1, Columna2,Columna3) VALUES (@valor1, @valor2,@valor3)";
            SqlParameter[] insertParameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tPartido.id),
                new SqlParameter("@valor2", tPartido.jornada),
                new SqlParameter("@valor3", tPartido.hora),
            };

            _context.Database.ExecuteSqlRaw(insertQuery, insertParameters);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTPartidoScoreGoals", new { id = tPartido.id }, tPartido);
        }

        // DELETE: api/TPartidoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTPartido(int id)
        {
            if (_context.TPartido == null)
            {
                return NotFound();
            }

            string deleteQuery = "DELETE FROM TPartido WHERE Id = @id";
            SqlParameter deleteParameter = new SqlParameter("@id", id);

            var tPartido = await _context.TPartido.FromSqlRaw(deleteQuery, deleteParameter).FirstOrDefaultAsync();
            if (tPartido == null)
            {
                return NotFound();
            }

            _context.TPartido.Remove(tPartido);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TPartidoExists(int id)
        {
            return _context.TPartido?.Any(e => e.id == id) ?? false;
        }
    }
}
