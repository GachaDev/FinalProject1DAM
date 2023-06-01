using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Project1.Models
{
    [Table("TPartidoScoreGoals")]
    public class TPartidoScoreGoals
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public int partido { get; set; }
        public int jugador { get; set; }
        public string equipo { get; set; }
    }
}
