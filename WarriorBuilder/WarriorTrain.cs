using WarriorFactory;

namespace WarriorBuilder
{
    internal class WarriorTrain
    {
        public IWarrior warrior { get; }

        public WarriorTrain(WarriorBuilder builder)
        {
            builder.enlist();
            builder.issueWeapon();
            warrior = builder.completeTraining();
        }
    }
}