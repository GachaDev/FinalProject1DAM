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
    public class TTeamsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TTeamsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/TTeams
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TTeam>>> GetTTeam()
        {
            string query = "SELECT * FROM TTeam";
            var tTeams = await _context.TTeam.FromSqlRaw(query).ToListAsync();

            if (tTeams == null)
            {
                return NotFound();
            }

            return tTeams;
        }


        // GET: api/TTeams/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TTeam>> GetTTeam(string id)
        {
            string query = "SELECT * FROM TTeam WHERE Id = @id";
            var tTeam = await _context.TTeam.FromSqlRaw(query, new SqlParameter("@id", id)).FirstOrDefaultAsync();

            if (tTeam == null)
            {
                return NotFound();
            }

            return tTeam;
        }


        // PUT: api/TTeams/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTTeam(string id, TTeam tTeam)
        {
            if (id != tTeam.name)
            {
                return BadRequest();
            }

            string query = "UPDATE TTeam SET Columna1 = @valor1, Columna2 = @valor2,Columna3 = @valor3,Columna4 = @valor4 WHERE Id = @id";
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tTeam.name),
                new SqlParameter("@valor2", tTeam.logo),
                new SqlParameter("@valor3", tTeam.iniciales),
                new SqlParameter("@valor4", tTeam.background),
                new SqlParameter("@id", id)
            };

            try
            {
                await _context.Database.ExecuteSqlRawAsync(query, parameters);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TTeamExists(id))
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


        // POST: api/TTeams
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TTeam>> PostTTeam(TTeam tTeam)
        {
            if (_context.TTeam == null)
            {
                return Problem("Entity set 'AppDbContext.TTeam' is null.");
            }

            string query = "INSERT INTO TTeam (Columna1, Columna2,Columna3,Columna4) VALUES (@valor1, @valor2,@valor3,@valor4)";
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tTeam.name),
                new SqlParameter("@valor2", tTeam.logo),
                new SqlParameter("@valor3", tTeam.iniciales),
                new SqlParameter("@valor4", tTeam.background)
            };

            _context.Database.ExecuteSqlRaw(query, parameters);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTTeam", new { id = tTeam.name }, tTeam);
        }


        // DELETE: api/TTeams/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTTeam(string id)
        {
            if (_context.TTeam == null)
            {
                return NotFound();
            }

            string query = "DELETE FROM TTeam WHERE name = @id";
            SqlParameter parameter = new SqlParameter("@id", id);

            var tTeam = await _context.TTeam.FromSqlRaw(query, parameter).FirstOrDefaultAsync();
            if (tTeam == null)
            {
                return NotFound();
            }

            _context.TTeam.Remove(tTeam);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TTeamExists(string id)
        {
            return _context.TTeam?.Any(e => e.name == id) ?? false;
        }

    }
}
