using WarriorFactory;

namespace WarriorBuilder
{
    internal abstract class WarriorBuilder
    {
        public IWarrior Warrior { get; set; }

        protected readonly string _name;
        protected readonly int _age;

        protected string Name => _name;
        protected int Age => _age;

        public WarriorBuilder(string name, int age) => (_name, _age) = (name, age);

        internal abstract void enlist();
        internal abstract void issueWeapon();
        internal abstract IWarrior completeTraining();
    }
}