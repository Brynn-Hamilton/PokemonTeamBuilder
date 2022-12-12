using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;
using System.Diagnostics.Metrics;

namespace Pokemon
{
    public class DAL
    {
        public static MySqlConnection DB;
        public static string CS; 

        public static async Task<List<TeamDisplay>> GetAllTeams(PokeApi pokeApi) 
        {
            MySqlConnection DB = new MySqlConnection(DAL.CS);
            DB.Open();

            List<Team> teams = DB.GetAll<Team>().ToList();
            List<PokemonTeam> pokemonTeams = DB.GetAll<PokemonTeam>().ToList();
            List<Trainer> trainers = DB.GetAll<Trainer>().ToList();

            List<TeamDisplay> teamDisplays = new List<TeamDisplay>();

            foreach (Team team in teams)
            {
                Trainer trainer = (trainers.First(x => x.id == team.trainer_id));
                List<TrainersPokemon> trainersPokemons = new List<TrainersPokemon>();
                List<PokemonTeam> pokemonTeam = pokemonTeams.Where(x => x.team_id == team.id).ToList();
                foreach (PokemonTeam pt in pokemonTeam)
                {
                    TrainersPokemon trainersPokemon = new TrainersPokemon();
                    trainersPokemon.pokemon_id = pt.pokemon_id;
                    trainersPokemon.move_id = pt.move_id;
                    Pokemon pokemon = await pokeApi.GetPokemon(pt.pokemon_id);
                    trainersPokemon.pokemon_name = pokemon.name;
                    trainersPokemon.pokemon_pics = pokemon.sprites;
                    trainersPokemon.height = pokemon.height;
                    trainersPokemon.weight = pokemon.weight;

                    foreach (Type type in pokemon.types)
                    {
                        trainersPokemon.type.Add(type.type.name);
                    }

                    trainersPokemon.hp = pokemon.stats.First(x => x.stat.name == "hp").base_stat;
                    trainersPokemon.move_name = pokemon.moves.FirstOrDefault(x => x.move.GetId() == pt.move_id)?.move?.name ?? "";

                    trainersPokemons.Add(trainersPokemon);
                }
                TeamDisplay teamDisplay = new TeamDisplay(team, trainersPokemons, trainer);
                teamDisplays.Add(teamDisplay);
            }
            DB.Close();
            return teamDisplays;
        }

        public static async Task<TeamDisplay> GetOneTeam(int team_id, PokeApi pokeApi)
        {
            MySqlConnection DB = new MySqlConnection(DAL.CS);
            DB.Open();

            Team team = DB.Get<Team>(team_id);
            List<PokemonTeam> pokemonTeams = DB.GetAll<PokemonTeam>().Where(x => x.team_id == team_id).ToList();
            Trainer trainer = DB.Get<Trainer>(team.trainer_id);

            List<TrainersPokemon> trainersPokemons = new List<TrainersPokemon>();

            foreach (PokemonTeam pt in pokemonTeams)
            {
                TrainersPokemon trainersPokemon = new TrainersPokemon();
                trainersPokemon.pokemon_id = pt.pokemon_id;
                trainersPokemon.move_id = pt.move_id;
                Pokemon pokemon = await pokeApi.GetPokemon(pt.pokemon_id);
                trainersPokemon.pokemon_name = pokemon.name;
                trainersPokemon.pokemon_pics = pokemon.sprites;
                trainersPokemon.height = pokemon.height;
                trainersPokemon.weight = pokemon.weight;

                foreach (Type type in pokemon.types)
                {
                    trainersPokemon.type.Add(type.type.name);
                }

                trainersPokemon.hp = pokemon.stats.First(x => x.stat.name == "hp").base_stat;
                trainersPokemon.move_name = pokemon.moves.FirstOrDefault(x => x.move.GetId() == pt.move_id)?.move?.name ?? "";

                trainersPokemons.Add(trainersPokemon);
            }
            TeamDisplay teamDisplay = new TeamDisplay(team, trainersPokemons, trainer);

            DB.Close();
            return teamDisplay;
        }

        public static async Task<List<TeamDisplay>> GetAllTeamsbyTrainer(int trainer_id, PokeApi pokeApi) 
        {
            MySqlConnection DB = new MySqlConnection(DAL.CS);
            DB.Open();

            Trainer trainer = DB.Get<Trainer>(trainer_id);
            List<Team> teams = DB.GetAll<Team>().Where(x => x.trainer_id == trainer_id).ToList();
            List<PokemonTeam> pokemonTeams = DB.GetAll<PokemonTeam>().ToList();

            List<TeamDisplay> teamDisplays = new List<TeamDisplay>();

            foreach (Team team in teams)
            {
                List<TrainersPokemon> trainersPokemons = new List<TrainersPokemon>();

                List<PokemonTeam> pokemonTeam = pokemonTeams.Where(x => x.team_id == team.id).ToList();

                foreach (PokemonTeam pt in pokemonTeam)
                {
                    TrainersPokemon trainersPokemon = new TrainersPokemon();
                    trainersPokemon.pokemon_id = pt.pokemon_id;
                    trainersPokemon.move_id = pt.move_id;
                    Pokemon pokemon = await pokeApi.GetPokemon(pt.pokemon_id);
                    trainersPokemon.pokemon_name = pokemon.name;
                    trainersPokemon.pokemon_pics = pokemon.sprites;
                    trainersPokemon.height = pokemon.height;
                    trainersPokemon.weight = pokemon.weight;

                    foreach (Type type in pokemon.types)
                    {
                        trainersPokemon.type.Add(type.type.name);
                    }

                    trainersPokemon.hp = pokemon.stats.First(x => x.stat.name == "hp").base_stat;
                    trainersPokemon.move_name = pokemon.moves.FirstOrDefault(x => x.move.GetId() == pt.move_id)?.move?.name ?? "";

                    trainersPokemons.Add(trainersPokemon);
                }
                TeamDisplay teamDisplay = new TeamDisplay(team, trainersPokemons, trainer);
                teamDisplays.Add(teamDisplay);
            }

            DB.Close();
            return teamDisplays;
        }
    }
}
