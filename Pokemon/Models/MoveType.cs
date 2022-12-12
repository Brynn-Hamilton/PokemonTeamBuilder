namespace Pokemon
{
    public class MoveType
    {
        public int id { get; set; }
        public string name { get; set; }
        public List<TypeRelation> damage_relations { get; set; }
    }
}
