using WarriorFactory;

namespace WarriorBuilder
{
    internal class StrzelecBuilder : WarriorBuilder
    {
        private string? _issuedWeapon;
        public StrzelecBuilder(string name, int age) : base(name, age) { }

        internal override void enlist()
        {
            Warrior = new Strzelec(_name, _age);
        }

        internal override void issueWeapon()
        {
            _issuedWeapon = Warrior.Weapon;
        }

        internal override IWarrior completeTraining()
        {
            return Warrior;
        }
    }
}