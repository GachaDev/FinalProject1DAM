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


        [HttpPost]
        public async Task<ActionResult<TPartido>> Register([FromBody] TPartido TPartido)
        {
            if (TPartido == null)
            {
                return BadRequest("No se ha proporcionado ningún partido.");
            }

            try
            {
                string insertQuery = "INSERT INTO TPartido (Jornada, hora, golesLocal, golesVisitante, equipoLocal, equipoVisitante) VALUES ({0}, {1}, {2}, {3}, {4}, {5})";
                _context.Database.ExecuteSqlRaw(insertQuery, TPartido.Jornada, TPartido.hora, TPartido.golesLocal, TPartido.golesVisitante, TPartido.equipoLocal, TPartido.equipoVisitante);

                await _context.SaveChangesAsync();

                return Ok(new { message = "Partido creado con éxito" });
            }
            catch (DbUpdateException ex)
            {
                return BadRequest(new { message = "Error al crear el partido." });            
            }
        }

        private bool TPartidoExists(int id)
        {
            return _context.TPartido?.Any(e => e.idPartido == id) ?? false;
        }
    }
}
