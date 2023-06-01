using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Project1.Models
{
    [Table("TPartido")]
    public class TPartido
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public int jornada { get; set; }
        public string hora { get; set; }
    }
}
