using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Pokemon.Controllers
{
    [Route("trainer")]
    [ApiController]
    public class TrainerController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Trainer> GetAllTrainers()
        {
            return Trainer.GetAllTrainers();
        }

        [HttpGet("{id}")]
        public Trainer GetTrainer(int id)
        {
            return Trainer.GetTrainer(id);
        }

        [HttpPost]
        public Trainer AddTrainer(Trainer trainer)
        {
            return Trainer.AddTrainer(trainer);
        }

        [HttpDelete("{id}")]
        public void DeleteTrainer(int id)
        {
            Trainer.DeleteTrainer(id);
        }

        [HttpPut]
        public void Update(Trainer trainer)
        {
            Trainer.UpdateTrainer(trainer);
        }
    }
}
