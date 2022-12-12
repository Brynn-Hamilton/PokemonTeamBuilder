using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace Pokemon
{
    [Table("pokemonteam")]
    public class PokemonTeam
    {
        [ExplicitKey]
        public int team_id { get; set; }
        public int pokemon_id { get; set; }
        public int? move_id { get; set; }
    }
}
