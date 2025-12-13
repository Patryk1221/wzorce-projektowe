class Adult {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  isAdult() {
    return this.age >= 18;
  }
}

class Teen {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class FakeAdult extends Adult {
  constructor(teen) {
    super(teen.name, teen.age);
    this.teen = teen;
  }
  isAdult() {
    return true;
  }
}

class Bouncer {
  allowEntry(person) {
    if (!(person instanceof Adult)) {
      throw new Error('Odmowa: oczekiwano Adult.');
    }
    if (!person.isAdult()) {
      console.log(`Odmowa: ${person.name} (${person.age}) jest niepełnoletni.`);
      return;
    }
    console.log(`Miłej zabawy ${person.name}!`);
  }
}

const krzys = new Teen('Krzyś', 17);
const bramkarz = new Bouncer();

console.log('Próba bez adaptera:');

try {
  bramkarz.allowEntry(krzys);
} catch (e) {
  console.log(e.message);
}

console.log('\nPróba z adapterem FakeAdult:');
const krzysJakoDorosly = new FakeAdult(krzys);
bramkarz.allowEntry(krzysJakoDorosly);