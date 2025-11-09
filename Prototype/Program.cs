using OrkPrototype;

List<Ork> squad = new();

var baseOrk = new Ork
{
    Age = 100,
    Strength = 200,
    Speed = 50
};

squad.Add(baseOrk);

for (int i = 0; i < 4; i++)
{
    squad.Add(baseOrk.CloneWithRandomStrength());
}

foreach (var ork in squad)
{
    Console.WriteLine($"Cześć! {ork}");
}