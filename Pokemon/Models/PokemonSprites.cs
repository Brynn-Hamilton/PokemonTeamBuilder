using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace Pokemon
{
    public class PokemonSprites
    {
        public string front_default { get; set; }
        public string front_shiny { get; set; }
        public string front_female { get; set; }
        public string front_shiny_female { get; set; }
    }
}
