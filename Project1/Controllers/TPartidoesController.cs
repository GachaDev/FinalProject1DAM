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
    /// <summary>
    /// llamo
    /// </summary>
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
            string query = "SELECT TPartido.*, equipoLocal.iniciales as inicialesLocal, equipoVisitante.iniciales as inicialesVisitante, TJornada.fecha\r\nFROM TPartido \r\nINNER JOIN TTeam AS equipoLocal ON equipoLocal.name = TPartido.equipoLocal \r\nINNER JOIN TTeam AS equipoVisitante ON equipoVisitante.name = TPartido.equipoVisitante\r\nINNER JOIN TJornada ON TPartido.Jornada = TJornada.id;\r\n";
            var tPartido = await _context.TPartido.FromSqlRaw(query).ToListAsync();

            if (tPartido == null)
            {
                return NotFound();
            }
            foreach (var partido in tPartido)
            {
                var equipoLocal = await _context.TTeam.FindAsync(partido.equipoLocal);
                if (equipoLocal != null)
                {
                    partido.inicialesLocal = equipoLocal.iniciales;
                    partido.logoLocal = equipoLocal.logo;
                }
                var equipoVisitante = await _context.TTeam.FindAsync(partido.equipoVisitante);
                if (equipoVisitante != null)
                {
                    partido.inicialesVisitante = equipoVisitante.iniciales;
                    partido.logoVisitante = equipoVisitante.logo;
                }
                var j = await _context.TJornada.FindAsync(partido.Jornada);
                if (j != null)
                {
                    partido.fecha = j.fecha;
                }
            }
            return tPartido;
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
            if (id != tPartido.idPartido)
            {
                return BadRequest();
            }

            string query = "UPDATE TTeam SET Columna1 = @valor1, Columna2 = @valor2,Columna3 = @valor3 WHERE Id = @id";
            SqlParameter[] parameters = new SqlParameter[]
            {
                new SqlParameter("@valor1", tPartido.idPartido),
                new SqlParameter("@valor2", tPartido.Jornada),
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
        public async Task<ActionResult<TPartido>> PostTCartel([FromBody] TPartido tPartido)
        {
            if (tPartido == null)
            {
                return Problem("Entity set 'AppDbContext.TPartido' is null.");
            }

            string insertQuery = "INSERT INTO TPartido(idPartido,Jornada,hora,equipoLocal,equipoVisitante,golesLocal,golesVisitante) VALUES ({0}, {1}, {2},{3},{4},{5},{6})";

            _context.Database.ExecuteSqlRaw(insertQuery, tPartido.idPartido, tPartido.Jornada, tPartido.hora,tPartido.equipoLocal,tPartido.equipoVisitante,tPartido.golesLocal,tPartido.golesVisitante);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Partido creado con éxito" });
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
            return _context.TPartido?.Any(e => e.idPartido == id) ?? false;
        }
    }
}
