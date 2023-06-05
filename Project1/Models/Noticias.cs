using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Project1.Models
{
    [Table("Noticias")]
    public class Noticias
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public string imagen { get; set; }
        public string fecha { get; set; }
        public string frase { get; set; }
    }
}
