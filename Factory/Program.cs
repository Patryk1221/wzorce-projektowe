using WarriorFactory;

var garnizon = new Garnizon();

var orders = new (string type, string name, int age)[]
{
    ("piechur","Franek",18),
    ("piechur","Franek",19),
    ("piechur","Franek",20),
    ("konny","Franek",21),
    ("konny","Franek",22),
    ("konny","Franek",23),
    ("strzelec","Franek",24),
    ("strzelec","Franek",25),
    ("strzelec","Franek",26),
    ("strzelec","Franek",27),
};

List<IWarrior> warriors = new(orders.Length);
for (int i = 0; i < orders.Length; i++)
{
    var o = orders[i];
    warriors.Add(garnizon.createSoldier(o.type, o.name, o.age));
}

for (int i = 0; i < warriors.Count; i++)
{
    var item = warriors[i];
    Console.WriteLine($"Imię: {item.Name}; specjalność: {item.GetType()}");
}