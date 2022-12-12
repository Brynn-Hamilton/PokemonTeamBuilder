using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace Pokemon
{
    public class TypeRelation
    {
        public List<Type> no_damage_to { get; set; }
        public List<Type> half_damage_to { get; set; }
        public List<Type> double_damage_to { get; set; }
        public List<Type> no_damage_from { get; set; }
        public List<Type> half_damage_from { get; set; }
        public List<Type> double_damage_from { get; set; }
    }
}
