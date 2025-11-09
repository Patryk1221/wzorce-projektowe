using Newtonsoft.Json;

namespace OrkPrototype
{
    internal class Ork
    {
        private static readonly Random Rng = new Random();

        public int Age { get; set; }
        public int Strength { get; set; }
        public int Speed { get; set; }

        public Ork DeepClone()
        {
            string json = JsonConvert.SerializeObject(this);
            Ork clone = JsonConvert.DeserializeObject<Ork>(json);
            return clone;
        }

        public Ork CloneWithRandomStrength(int min = 0, int max = 300)
        {
            Ork clone = DeepClone();
            clone.Strength = Rng.Next(min, max);
            return clone;
        }

        public override string ToString()
        {
            return $"Siła: {Strength}, Wiek: {Age}, Szybkość: {Speed}";
        }
    }
}