using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Project1.Models
{
    [Table("TTeam")]
    public class TTeam
    {
        [Key]
        public string name { get; set; }
        public string logo{ get; set; }
        public string iniciales { get; set; }
        public string background { get; set; }
    }
}
