namespace Pokemon
{
    public class Move
    {
        public MoveName move { get; set; }
    }

    public class MoveName
    {
        public string name { get; set; }
        public string url { get; set; }
        public int id => GetId();

        public int GetId()
        {
            string moveUrl = url.Replace(@"https://pokeapi.co/api/v2/move/", "").Replace(@"/", "");
            if (int.TryParse(moveUrl, out int id))
            {
                return id;
            }
            else
            {
                return 0;
            }
        }
    }
}
