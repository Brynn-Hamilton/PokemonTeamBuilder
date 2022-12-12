using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace Pokemon
{
    public class Generation
    {
        public int id { get; set; }
        public int name { get; set; }
        public List<PokemonSpecies> pokemon_species { get; set; }
    }
}
