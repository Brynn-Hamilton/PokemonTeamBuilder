using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace Pokemon
{
    [Table("team")]
    public class Team
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public int trainer_id { get; set; } 
    }
}
