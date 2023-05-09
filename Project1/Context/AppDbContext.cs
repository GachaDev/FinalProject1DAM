using Microsoft.EntityFrameworkCore;
using Project1.Models;

namespace Project1.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        { 
        
        }
        public DbSet<Usuarios> usuarios { get; set; }
    }
}
