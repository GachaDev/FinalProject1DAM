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
    public class NoticiasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public NoticiasController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Noticias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Noticias>>> GetTJornada()
        {
            string query = "SELECT * FROM Noticias";
            var tNoticias = await _context.Noticias.FromSqlRaw(query).ToListAsync();

            if (tNoticias == null)
            {
                return NotFound();
            }

            return tNoticias;
        }

        // GET: api/Noticias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Noticias>> GetNoticias(int id)
        {
            string query = "SELECT * FROM Noticias WHERE Id = @id";
            var tNoticias = await _context.Noticias.FromSqlRaw(query, new SqlParameter("@id", id)).FirstOrDefaultAsync();

            if (tNoticias == null)
            {
                return NotFound();
            }

            return tNoticias;
        }

        // PUT: api/Noticias/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNoticias(int id, Noticias Noticias)
        {
            if (id != Noticias.id)
            {
                return BadRequest();
            }

            string query = "UPDATE Noticias SET Columna1 = @valor1, Columna2 = @valor2,Columna3 = @valor3,Columna4 = @valor4 WHERE Id = @id";
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", Noticias.id),
                new SqlParameter("@valor2", Noticias.fecha),
                new SqlParameter("@valor3", Noticias.imagen),
                new SqlParameter("@valor4", Noticias.frase),
                new SqlParameter("@id", id)
            };

            _context.Database.ExecuteSqlRaw(query, parameters);

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NoticiasExists(id))
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

        // POST: api/Noticias
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Noticias>> PostNoticias(Noticias Noticias)
        {
            if (_context.Noticias == null)
            {
                return Problem("Entity set 'AppDbContext.Noticias' is null.");
            }

            string insertQuery = "INSERT INTO Noticias (Columna1, Columna2,Columna3,Columna4) VALUES (@valor1, @valor2,@valor3,@valor4)";
            SqlParameter[] insertParameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", Noticias.id),
                new SqlParameter("@valor2", Noticias.fecha),
                new SqlParameter("@valor3", Noticias.imagen),
                new SqlParameter("@valor4", Noticias.frase)

            };

            _context.Database.ExecuteSqlRaw(insertQuery, insertParameters);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNoticias", new { id = Noticias.id }, Noticias);
        }

        // DELETE: api/Noticias/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNoticias(int id)
        {
            if (_context.Noticias == null)
            {
                return NotFound();
            }

            string deleteQuery = "DELETE FROM Noticias WHERE Id = @id";
            SqlParameter deleteParameter = new SqlParameter("@id", id);

            var Noticias = await _context.Noticias.FromSqlRaw(deleteQuery, deleteParameter).FirstOrDefaultAsync();
            if (Noticias == null)
            {
                return NotFound();
            }

            _context.Noticias.Remove(Noticias);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NoticiasExists(int id)
        {
            return _context.Noticias?.Any(e => e.id == id) ?? false;
        }
    }
}
