using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Project1.Models
{
    [Table("TJugador")]
    public class TJugador
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string nombre { get; set; }
        public string posicion { get; set; }
        public string imagen { get; set; }
        public string equipo { get; set; }
        public string tipo { get; set; }
        // Nueva propiedad para el logo del equipo
        [NotMapped] // Esta propiedad no se mapeará a la columna de la base de datos
        public string EquipoLogo { get; set; }
    }
}
