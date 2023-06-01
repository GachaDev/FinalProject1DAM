using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Project1.Models
{
    [Table("TPartidoScore")]
    public class TPartidoScore
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public int partido { get; set; }
        public string equipo { get; set; }
    }
}
