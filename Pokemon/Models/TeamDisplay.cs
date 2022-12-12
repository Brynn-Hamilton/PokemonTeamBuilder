using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;
using System.Runtime.CompilerServices;

namespace Pokemon
{
    public class TeamDisplay
    {
        public int team_id { get; set; }
        public string team_name { get; set; } 
        public int trainer_id { get; set; }
        public string? trainer_name { get; set; }
        public List<TrainersPokemon> pokemon { get; set; }
        public TeamDisplay() { }  

        public TeamDisplay(Team team, List<TrainersPokemon> pokemon, Trainer trainer)
        {
            
            team_id = team.id;
            team_name = team.name;
            
            trainer_id = trainer.id;
            trainer_name = trainer.name;
            
            this.pokemon = pokemon;
        }

        public static void AddTeam(TeamDisplay teamDisplay)
        {
            MySqlConnection DB = new MySqlConnection(DAL.CS);
            DB.Open();

            Team team = new Team();
            team.trainer_id = teamDisplay.trainer_id;
            team.name = teamDisplay.team_name;

            DB.Insert(team);

            foreach (TrainersPokemon pokemon in teamDisplay.pokemon)
            {
                PokemonTeam pokemonTeam = new PokemonTeam();
                pokemonTeam.team_id = team.id;
                pokemonTeam.pokemon_id = pokemon.pokemon_id;
                pokemonTeam.move_id = pokemon.move_id;

                DB.Insert(pokemonTeam);
            }

            DB.Close();
        }

        public static void DeleteTeam(int id)
        {
            MySqlConnection DB = new MySqlConnection(DAL.CS);
            DB.Open();

            DB.Delete(new PokemonTeam { team_id = id });
            DB.Delete(new Team { id = id });

            DB.Close();
        }

        public static void DeleteTrainerTeams(int trainer_id)
        {
            MySqlConnection DB = new MySqlConnection(DAL.CS);
            DB.Open();

            Trainer trainer = new Trainer() { id = trainer_id};
            List<Team> teams = DB.GetAll<Team>().Where(x => x.trainer_id == trainer_id).ToList();

            foreach (Team trainerTeam in teams)
            {
                TeamDisplay.DeleteTeam(trainerTeam.id);  
            }

            DB.Close();
        }

        public static void UpdateTeam(TeamDisplay team)
        {
            MySqlConnection DB = new MySqlConnection(DAL.CS);
            DB.Open();

            DB.Update(new Team
            {
                id = team.team_id,
                name = team.team_name,
                trainer_id = team.trainer_id,
            });

            DB.Delete(new PokemonTeam { team_id = team.team_id });

            foreach (TrainersPokemon pokemon in team.pokemon)
            {
                PokemonTeam pokemonTeam = new PokemonTeam();
                pokemonTeam.team_id = team.team_id;
                pokemonTeam.pokemon_id = pokemon.pokemon_id;
                pokemonTeam.move_id = pokemon.move_id;
                DB.Insert(pokemonTeam);
            }

            DB.Close();
        }
    }
}
