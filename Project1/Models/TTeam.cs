using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Project1.Models
{
    [Table("TTeam")]
    public class TTeam
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string name { get; set; }
        public string logo{ get; set; }
        public string iniciales { get; set; }
        public string background { get; set; }
    }
}
