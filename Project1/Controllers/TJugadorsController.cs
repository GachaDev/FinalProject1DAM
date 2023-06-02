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
    public class TJugadorsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TJugadorsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TJugador>>> GetTJugador()
        {
            string query = "SELECT TJugador.*, TTeam.logo AS EquipoLogo FROM TJugador INNER JOIN TTeam ON TJugador.equipo = TTeam.name";
            var tJugador = await _context.TJugador.FromSqlRaw(query).ToListAsync();

            if (tJugador == null)
            {
                return NotFound();
            }

            // Recorrer la lista de jugadores y asignar el valor del EquipoLogo
            foreach (var jugador in tJugador)
            {
                // Obtener el equipo correspondiente al jugador
                var equipo = await _context.TTeam.FindAsync(jugador.equipo);

                // Asignar el valor del EquipoLogo si se encuentra el equipo
                if (equipo != null)
                {
                    jugador.EquipoLogo = equipo.logo;
                }
            }

            return tJugador;
        }

        [HttpPost("register")]
        public async Task<ActionResult<TJugador>> Register([FromBody] TJugador jugador)
        {
            if (jugador == null)
            {
                return BadRequest("No se ha proporcionado ningún jugador.");
            }

            try
            {
                _context.TJugador.Add(jugador);
                await _context.SaveChangesAsync();

                return Ok(new { message = "Jugador creado con éxito" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Error al crear el jugador." });
            }
        }

    }
}
