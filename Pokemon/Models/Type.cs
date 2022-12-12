using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace Pokemon
{
    public class Type
    {
       public int slot { get; set; }
       public TypeName type { get; set; } 
    }
}