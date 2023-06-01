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
    public class UsuariosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsuariosController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Usuarios
        [HttpGet]
        public IActionResult ExecuteQuery()
        {
            string query = "SELECT * FROM usuarios";

            var result = _context.usuarios.FromSqlRaw(query).ToList();

            return Ok(result);
        }

        [HttpGet("{mail}/{password}")]
        public ActionResult<List<Usuarios>> GetLogIn(string mail, string password)
        {
            string query = "SELECT * FROM usuarios WHERE mail = {0} AND password = {1}";
            var usuarios = _context.usuarios.FromSqlRaw(query, mail, password).ToList();

            if (usuarios == null || usuarios.Count == 0)
            {
                return NotFound();
            }

            return usuarios;
        }

        [HttpPost("register")]
        public async Task<ActionResult<Usuarios>> Register([FromBody] Usuarios usuario)
        {
            if (usuario == null)
            {
                return BadRequest("No se ha proporcionado ningún usuario.");
            }

            try
            {
                string insertQuery = "INSERT INTO usuarios (mail, password, name) VALUES ({0}, {1}, {2})";
                _context.Database.ExecuteSqlRaw(insertQuery, usuario.mail, usuario.password, usuario.name);

                await _context.SaveChangesAsync();

                return Ok(new { message = "Usuario creado con éxito" });
            }
            catch (DbUpdateException ex)
            {
                // Capturar la excepción de clave duplicada
                return BadRequest(new { message = "Error al crear el usuario. Ya existe un usuario con el mismo correo electrónico." });
            }
        }

    }
}
