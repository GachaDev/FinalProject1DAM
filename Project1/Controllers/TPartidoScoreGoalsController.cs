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
    public class TPartidoScoreGoalsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TPartidoScoreGoalsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/TPartidoScoreGoals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TPartidoScoreGoals>>> GetTPartidoScoreGoals()
        {
            if (_context.TPartidoScoreGoals == null)
            {
                return NotFound();
            }

            string query = "SELECT * FROM TPartidoScoreGoals";
            var tPartidoScoreGoals = await _context.TPartidoScoreGoals.FromSqlRaw(query).ToListAsync();

            return tPartidoScoreGoals;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TPartidoScoreGoals>> GetTPartidoScoreGoals(int id)
        {
            if (_context.TPartidoScoreGoals == null)
            {
                return NotFound();
            }

            string query = "SELECT * FROM TPartidoScoreGoals WHERE id = @id";
            SqlParameter parameter = new SqlParameter("@id", id);

            var tPartidoScoreGoals = await _context.TPartidoScoreGoals.FromSqlRaw(query, parameter).FirstOrDefaultAsync();

            if (tPartidoScoreGoals == null)
            {
                return NotFound();
            }

            return tPartidoScoreGoals;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutTPartidoScoreGoals(int id, TPartidoScoreGoals tPartidoScoreGoals)
        {
            if (id != tPartidoScoreGoals.id)
            {
                return BadRequest();
            }

            string query = "UPDATE TPartidoScore SET Columna1 = @valor1, Columna2 = @valor2, Columna3 = @valor3, Columna4 = @valor4 WHERE Id = @id";
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tPartidoScoreGoals.id),
                new SqlParameter("@valor2", tPartidoScoreGoals.jugador),
                new SqlParameter("@valor3", tPartidoScoreGoals.equipo),
                new SqlParameter("@valor4", tPartidoScoreGoals.partido),
                new SqlParameter("@id", id)
            };

            _context.Database.ExecuteSqlRaw(query, parameters);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TPartidoScoreGoalsExists(id))
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


        [HttpPost]
        public async Task<ActionResult<TPartidoScoreGoals>> PostTPartidoScoreGoals(TPartidoScoreGoals tPartidoScoreGoals)
        {
            if (_context.TPartidoScoreGoals == null)
            {
                return Problem("Entity set 'AppDbContext.TPartidoScoreGoals' is null.");
            }

            string insertQuery = "INSERT INTO TPartidoScoreGoals (Columna1, Columna2,Columna3,Columna4) VALUES (@valor1, @valor2,@valor3,@valor4)";
            SqlParameter[] insertParameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tPartidoScoreGoals.id),
                new SqlParameter("@valor2", tPartidoScoreGoals.partido),
                new SqlParameter("@valor3", tPartidoScoreGoals.jugador),
                new SqlParameter("@valor4", tPartidoScoreGoals.equipo)
            };

            _context.Database.ExecuteSqlRaw(insertQuery, insertParameters);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTPartidoScoreGoals", new { id = tPartidoScoreGoals.id }, tPartidoScoreGoals);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTPartidoScoreGoals(int id)
        {
            if (_context.TPartidoScoreGoals == null)
            {
                return NotFound();
            }

            string deleteQuery = "DELETE FROM TPartidoScoreGoals WHERE id = @id";
            SqlParameter deleteParameter = new SqlParameter("@id", id);

            var tPartidoScoreGoals = await _context.TPartidoScoreGoals.FromSqlRaw(deleteQuery, deleteParameter).FirstOrDefaultAsync();
            if (tPartidoScoreGoals == null)
            {
                return NotFound();
            }

            _context.TPartidoScoreGoals.Remove(tPartidoScoreGoals);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TPartidoScoreGoalsExists(int id)
        {
            return _context.TPartidoScoreGoals?.Any(e => e.id == id) ?? false;
        }

    }
}
