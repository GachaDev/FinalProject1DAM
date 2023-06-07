using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Project1.Models
{
    [Table("TPartido")]
    public class TPartido
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int idPartido { get; set; }
        public int Jornada { get; set; }
        public string hora { get; set; }
        public string equipoLocal { get; set; }
        public string equipoVisitante { get; set; }
        public int golesLocal { get; set; }
        public int golesVisitante { get; set; }
        [NotMapped]
        public string inicialesLocal { get; set; }
        [NotMapped]
        public string inicialesVisitante { get; set; }
        [NotMapped]
        public string logoLocal { get; set; }
        [NotMapped]
        public string logoVisitante { get; set; }

        [NotMapped]
        public string fecha { get; set; }
    }
}
