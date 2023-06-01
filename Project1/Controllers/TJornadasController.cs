using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
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
          if (_context.TJornada == null)
          {
              return NotFound();
          }
            return await _context.TJornada.ToListAsync();
        }

        // GET: api/TJornadas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TJornada>> GetTJornada(int id)
        {
          if (_context.TJornada == null)
          {
              return NotFound();
          }
            var tJornada = await _context.TJornada.FindAsync(id);

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

            _context.Entry(tJornada).State = EntityState.Modified;

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
              return Problem("Entity set 'AppDbContext.TJornada'  is null.");
          }
            _context.TJornada.Add(tJornada);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTJornada", new { id = tJornada.id }, tJornada);
        }

        // DELETE: api/TJornadas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTJornada(int id)
        {
            if (_context.TJornada == null)
            {
                return NotFound();
            }
            var tJornada = await _context.TJornada.FindAsync(id);
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
            return (_context.TJornada?.Any(e => e.id == id)).GetValueOrDefault();
        }
    }
}
