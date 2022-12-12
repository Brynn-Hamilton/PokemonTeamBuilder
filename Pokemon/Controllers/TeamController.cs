using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;
using Microsoft.Extensions.Caching.Memory;

namespace Pokemon.Controllers
{
    
    [ApiController]
    public class TeamController : ControllerBase
    {
        private PokeApi pokeApi;

        public TeamController(IMemoryCache memoryCache)
        {
            pokeApi = new PokeApi(memoryCache);
        }

        [HttpGet]
        [Route("team")]
        public async Task<IEnumerable<TeamDisplay>> GetAll()
        {
            return await DAL.GetAllTeams(pokeApi);
        }

        [HttpGet]
        [Route("team/{team_id}")]
        public async Task<TeamDisplay> Get(int team_id)
        {
            return await DAL.GetOneTeam(team_id, pokeApi);
        }

        [HttpGet]
        [Route("team/trainer/{trainer_id}")]
        public async Task<IEnumerable<TeamDisplay>> GetAllTrainerTeams(int trainer_id)
        {
            return await DAL.GetAllTeamsbyTrainer(trainer_id, pokeApi);
        }

        [HttpPost]
        [Route("team")]
        public void Add(TeamDisplay team)
        {
            TeamDisplay.AddTeam(team);
        }

        [HttpDelete]
        [HttpDelete("{id}")]
        [Route("team/{id}")]
        public void Delete(int id)
        {
            TeamDisplay.DeleteTeam(id);
        }
       
        [HttpPut]
        [Route("team")]
        public void Update(TeamDisplay team)
        {
            TeamDisplay.UpdateTeam(team);
        }
    }
}
