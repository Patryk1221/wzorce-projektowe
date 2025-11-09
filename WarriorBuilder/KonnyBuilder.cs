using WarriorFactory;

namespace WarriorBuilder
{
    internal class KonnyBuilder : WarriorBuilder
    {
        private string? _issuedWeapon;
        public KonnyBuilder(string name, int age) : base(name, age) { }

        internal override void enlist()
        {
            Warrior = new Konny(_name, _age);
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