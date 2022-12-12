using MySql.Data.MySqlClient;
using Dapper.Contrib.Extensions;

namespace Pokemon
{
    [Table("trainer")]
    public class Trainer
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }

        public static IEnumerable<Trainer> GetAllTrainers()
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            var result = db.GetAll<Trainer>().ToList();
            db.Close();
            return result;
        }

        public static Trainer GetTrainer(int id)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            var result = db.Get<Trainer>(id);
            db.Close();
            return result;
        }

        public static Trainer AddTrainer(Trainer trainer)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            db.Insert(trainer);
            db.Close();
            return trainer;
        }

        public static void UpdateTrainer(Trainer trainer)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            db.Update(trainer);
            db.Close();
        }

        public static void DeleteTrainer(int id)
        {
            MySqlConnection db = new MySqlConnection(DAL.CS);
            db.Open();
            Trainer trainer = new Trainer();
            trainer.id = id;

            TeamDisplay.DeleteTrainerTeams(id);

            db.Delete<Trainer>(trainer);
            db.Close();
        }
    }
}