using Microsoft.Extensions.Caching.Memory;

namespace Pokemon
{
    public class PokeApi
    {
        private IMemoryCache _memoryCache;

        public PokeApi(IMemoryCache memoryCache)
        {
            _memoryCache = memoryCache;
        }

        public async Task<Pokemon> GetPokemon(int id)
        {
            if (_memoryCache.TryGetValue<Pokemon>(id, out Pokemon? pokemon))
            {
                return pokemon!;
            }
            
            HttpClient client = new HttpClient();
            var pokeRequest = await client.GetAsync($"https://pokeapi.co/api/v2/pokemon/{id}");
            Pokemon response = await pokeRequest.Content.ReadAsAsync<Pokemon>();

            _memoryCache.Set(id, response);
            return response;
        }

        public async Task<PokemonSpecies> GetSpecies(int id)
        {
            if (_memoryCache.TryGetValue<PokemonSpecies>(id, out PokemonSpecies? pokemon))
            {
                return pokemon!;
            }

            HttpClient client = new HttpClient();
            var pokeRequest = await client.GetAsync($"https://pokeapi.co/api/v2/pokemon-species/{id}");
            PokemonSpecies response = await pokeRequest.Content.ReadAsAsync<PokemonSpecies>();

            _memoryCache.Set(id, response);
            return response;
        }
    }
}
