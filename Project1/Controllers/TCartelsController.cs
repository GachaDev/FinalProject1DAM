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
            string query = "SELECT * FROM TCartel";
            var tCartel = await _context.TCartel.FromSqlRaw(query).ToListAsync();

            if (tCartel == null)
            {
                return NotFound();
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
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TCartel>> PostTCartel(TCartel tCartel)
        {
            if (_context.TCartel == null)
            {
                return Problem("Entity set 'AppDbContext.TCartel' is null.");
            }

            string insertQuery = "INSERT INTO Noticias (Columna1, Columna2,Columna3,Columna4) VALUES (@valor1, @valor2,@valor3,@valor4)";
            SqlParameter[] insertParameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tCartel.id),
                new SqlParameter("@valor2", tCartel.idCartel),
                new SqlParameter("@valor3", tCartel.texto1),
                new SqlParameter("@valor4", tCartel.texto2)
            };

            _context.Database.ExecuteSqlRaw(insertQuery, insertParameters);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTCartel", new { id = tCartel.id }, tCartel);
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
