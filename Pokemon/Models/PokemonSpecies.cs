using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace Pokemon
{
    public class PokemonSpecies
    {
        public int id { get; set; }
        public string name { get; set; }
        public bool is_legendary { get; set; }
        public bool is_mythical { get; set; }
        public List<Variety> variety { get; set; }
        public List<FlavorText> flavor_text_entries { get; set; }
    }
}
