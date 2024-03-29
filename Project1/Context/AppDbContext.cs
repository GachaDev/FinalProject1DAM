﻿using Microsoft.EntityFrameworkCore;
using Project1.Models;

namespace Project1.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        { 
        
        }
        public DbSet<Usuarios> usuarios { get; set; }
        public DbSet<Project1.Models.TJugador>? TJugador { get; set; }
        public DbSet<Project1.Models.TTeam>? TTeam { get; set; }
        public DbSet<Project1.Models.TPartido>? TPartido { get; set; }
        public DbSet<Project1.Models.TJornada>? TJornada { get; set; }
        public DbSet<Project1.Models.Noticias>? Noticias { get; set; }
        public DbSet<Project1.Models.TCartel>? TCartel { get; set; }
    }
}
