using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Project1.Models
{
    [Table("TCartel")]
    public class TCartel
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        public int idCartel { get; set; }
        public string texto1 { get; set; }
        public string texto2 { get; set; }
        [NotMapped]
        public string imagen { get; set;}
        [NotMapped]
        public string equipo { get; set;}
        [NotMapped] 
        public string background { get; set;}
        [NotMapped] 
        public string nombre { get; set;}    
    }
}
