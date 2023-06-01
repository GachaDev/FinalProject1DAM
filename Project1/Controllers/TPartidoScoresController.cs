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
    public class TPartidoScoresController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TPartidoScoresController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/TPartidoScores
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TPartidoScore>>> GetTPartidoScore()
        {
            string query = "SELECT * FROM TPartidoScore";
            var tPartidoScores = await _context.TPartidoScore.FromSqlRaw(query).ToListAsync();

            if (tPartidoScores == null)
            {
                return NotFound();
            }

            return tPartidoScores;
        }


        // GET: api/TPartidoScores/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TPartidoScore>> GetTPartidoScore(int id)
        {
            string query = "SELECT * FROM TPartidoScore WHERE Id = @id";
            var tPartidoScore = await _context.TPartidoScore.FromSqlRaw(query, new SqlParameter("@id", id)).FirstOrDefaultAsync();

            if (tPartidoScore == null)
            {
                return NotFound();
            }

            return tPartidoScore;
        }


        // PUT: api/TPartidoScores/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTPartidoScore(int id, TPartidoScore tPartidoScore)
        {
            if (id != tPartidoScore.id)
            {
                return BadRequest();
            }

            string query = "UPDATE TPartidoScore SET Columna1 = @valor1, Columna2 = @valor2,Columna3 = @valor3 WHERE Id = @id";
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tPartidoScore.id),
                new SqlParameter("@valor2", tPartidoScore.equipo),
                new SqlParameter("@valor3", tPartidoScore.partido),
                new SqlParameter("@id", id)
            };

            _context.Database.ExecuteSqlRaw(query, parameters);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TPartidoScoreExists(id))
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

        // POST: api/TPartidoScores
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TPartidoScore>> PostTPartidoScore(TPartidoScore tPartidoScore)
        {
            if (_context.TPartidoScore == null)
            {
                return Problem("Entity set 'AppDbContext.TPartidoScore' is null.");
            }

            string insertQuery = "INSERT INTO TPartidoScore (Columna1, Columna2,Columna3) VALUES (@valor1, @valor2,@valor3)";
            SqlParameter[] insertParameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tPartidoScore.id),
                new SqlParameter("@valor2", tPartidoScore.partido),
                new SqlParameter("@valor3", tPartidoScore.equipo)
            };

            _context.Database.ExecuteSqlRaw(insertQuery, insertParameters);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTPartidoScore", new { id = tPartidoScore.id }, tPartidoScore);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTPartidoScore(int id)
        {
            if (_context.TPartidoScore == null)
            {
                return NotFound();
            }

            string deleteQuery = "DELETE FROM TPartidoScore WHERE Id = @id";
            SqlParameter deleteParameter = new SqlParameter("@id", id);

            var tPartidoScore = await _context.TPartidoScore.FromSqlRaw(deleteQuery, deleteParameter).FirstOrDefaultAsync();
            if (tPartidoScore == null)
            {
                return NotFound();
            }

            _context.TPartidoScore.Remove(tPartidoScore);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TPartidoScoreExists(int id)
        {
            return _context.TPartidoScore?.Any(e => e.id == id) ?? false;
        }
    }
}