﻿using System;
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
                string insertQuery = "INSERT INTO TJugador (nombre, posicion, imagen, equipo, tipo) VALUES ({0}, {1}, {2}, {3}, {4})";
                _context.Database.ExecuteSqlRaw(insertQuery, jugador.nombre, jugador.posicion, jugador.imagen, jugador.equipo, jugador.tipo);

                await _context.SaveChangesAsync();

                return Ok(new { message = "Jugador creado con éxito" });
            }
            catch (DbUpdateException ex)
            {
                return BadRequest(new { message = "Error al crear el jugador." });            
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var jugador = await _context.TJugador.FindAsync(id);

            if (jugador == null)
            {
                return NotFound();
            }

            try
            {
                string deleteQuery = "DELETE FROM TJugador WHERE id = {0}";
                _context.Database.ExecuteSqlRaw(deleteQuery, id);

                return Ok(new { message = "Jugador eliminado con éxito" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "Error al eliminar el jugador." });
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<TJugador>> Update(int id, [FromBody] TJugador jugador)
        {
            if (id != jugador.id)
            {
                return BadRequest("El ID del jugador no coincide con el ID proporcionado.");
            }

            try
            {
                string updateQuery = "UPDATE TJugador SET nombre = {0}, posicion = {1}, imagen = {2}, equipo = {3}, tipo = {4} WHERE id = {5}";
                _context.Database.ExecuteSqlRaw(updateQuery, jugador.nombre, jugador.posicion, jugador.imagen, jugador.equipo, jugador.tipo, id);

                return Ok(new { message = "Jugador actualizado con éxito" });
            }
            catch (DbUpdateException ex)
            {
                return BadRequest(new { message = "Error al actualizar el jugador." });
            }
        }


    }
}
