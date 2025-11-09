using WarriorBuilder;
using WarriorFactory;

var trainings = new List<WarriorTrain>
{
    new WarriorTrain(new PiechurBuilder("Jan", 18)),
    new WarriorTrain(new PiechurBuilder("Paweł", 19)),
    new WarriorTrain(new KonnyBuilder("Tomasz", 20)),
    new WarriorTrain(new KonnyBuilder("Adam", 21)),
    new WarriorTrain(new StrzelecBuilder("Mateusz", 24)),
    new WarriorTrain(new StrzelecBuilder("Michał", 25)),
};

List<IWarrior> armia = new();
foreach (var t in trainings)
{
    armia.Add(t.warrior);
}

foreach (var w in armia)
{
    Console.WriteLine($"Imię: {w.Name};  Specjalność: {w.GetType().Name} ({w.Weapon})");
}