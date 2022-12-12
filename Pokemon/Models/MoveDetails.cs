using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace Pokemon
{
    public class MoveDetails
    {
        public int id { get; set; }
        public string name { get; set; }
        public Type type { get; set; }
        public int power { get; set; }
    }
}
