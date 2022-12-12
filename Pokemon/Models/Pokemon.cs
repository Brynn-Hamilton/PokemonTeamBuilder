using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace Pokemon
{
    public class Pokemon
    {
        public int id { get; set; }
        public string name { get; set; }
        public int height { get; set; }
        public bool is_default { get; set; } 
        public int order { get; set; } 
        public int weight { get; set; }
        public List<Move> moves { get; set; }
        public PokemonSprites sprites { get; set; }
        public SpeciesName species { get; set; }
        public List<Stats> stats { get; set; }
        public List<Type> types { get; set; }
    }
}
