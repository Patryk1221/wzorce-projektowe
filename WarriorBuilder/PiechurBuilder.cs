using WarriorFactory;

namespace WarriorBuilder
{
    internal class PiechurBuilder : WarriorBuilder
    {
        private string? _issuedWeapon;
        public PiechurBuilder(string name, int age) : base(name, age) { }

        internal override void enlist()
        {
            Warrior = new Piechur(_name, _age);
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