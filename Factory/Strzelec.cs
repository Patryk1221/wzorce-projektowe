namespace WarriorFactory
{
    public class Strzelec : IWarrior
    {
        public Strzelec(string name, int age)
        {
            Name = name;
            Age = age;
        }

        public string Name { get; set; }
        public int Age { get; set; }
        public string Weapon => "bow";
    }
}