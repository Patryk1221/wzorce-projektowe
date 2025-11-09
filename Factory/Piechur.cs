namespace WarriorFactory
{
    public class Piechur : IWarrior
    {
        public Piechur(string name, int age)
        {
            Name = name;
            Age = age;
        }

        public string Name { get; set; }
        public int Age { get; set; }
        public string Weapon => "sword";
    }
}