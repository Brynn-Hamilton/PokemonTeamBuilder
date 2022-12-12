using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace Pokemon
{
    public class FlavorText
    {
        public string flavor_text { get; set; }
        public Language language { get; set; }
        public GVersion version { get; set; }
    }
}
