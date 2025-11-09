namespace WarriorFactory
{
    public class Konny : IWarrior
    {
        public Konny(string name, int age)
        {
            Name = name;
            Age = age;
        }

        public string Name { get; set; }
        public int Age { get; set; }
        public string Weapon => "lance";
    }
}