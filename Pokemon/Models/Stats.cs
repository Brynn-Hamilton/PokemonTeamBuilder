using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace Pokemon
{
    public class Stats
    {
        public StatName stat { get; set; }
        public int base_stat { get; set; }
    }
}
