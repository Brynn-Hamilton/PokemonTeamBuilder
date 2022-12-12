using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace Pokemon
{
    public class Variety
    {
        public bool is_default { get; set; }
        public PokemonVarietyName pokemon { get; set; }
    }
}
