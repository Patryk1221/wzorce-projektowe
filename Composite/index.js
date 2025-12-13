const readline = require('readline');

class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.isCategory = false;
  }
  print(indent = 0) {
    const pad = '  '.repeat(indent);
    console.log(`${pad}- ${this.name} (${this.price.toFixed(2)} PLN)`);
  }
}

class MenuCategory {
  constructor(name) {
    this.name = name;
    this.children = [];
    this.isCategory = true;
  }
  add(child) {
    this.children.push(child);
  }
  print(indent = 0) {
    const pad = '  '.repeat(indent);
    console.log(`${pad}${this.name}:`);
    this.children.forEach(c => c.print(indent + 1));
  }
}

// Budowa przykładowego drzewa menu
const root = new MenuCategory('Menu Główne');

const przystawki = new MenuCategory('Przystawki');
przystawki.add(new MenuItem('Pomidorowa', 18));
przystawki.add(new MenuItem('Zupa dnia', 15));

const daniaGlowne = new MenuCategory('Dania Główne');
const makarony = new MenuCategory('Makarony');
makarony.add(new MenuItem('Spaghetti Bolognese', 32));
makarony.add(new MenuItem('Spaghetti Carbonara', 28));
const miesa = new MenuCategory('Mięsa');
miesa.add(new MenuItem('Kurczak grillowany', 35));
miesa.add(new MenuItem('Stek wołowy', 59));
daniaGlowne.add(makarony);
daniaGlowne.add(miesa);

const desery = new MenuCategory('Desery');
desery.add(new MenuItem('Tiramisu', 19));
desery.add(new MenuItem('Lody waniliowe', 14));

root.add(przystawki);
root.add(daniaGlowne);
root.add(desery);

function printFullMenu() {
  console.log('=== Pełne menu ===');
  root.print(0);
  console.log('==================');
}

// ui konsolowe. wymaga node.js. zeby uruchomic nalezy wpisac w konsoli: node .\index.js
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function navigate(stack) {
  const current = stack[stack.length - 1];
  const path = stack.map(c => c.name).join(' > ');

  console.log(`\nAktualna kategoria: ${path}`);
  current.children.forEach((c, i) => {
    const tag = c.isCategory ? '[Kategoria]' : '[Danie]';
    const extra = c.isCategory ? '' : ` - ${c.price.toFixed(2)} PLN`;
    console.log(`${i + 1}) ${tag} ${c.name}${extra}`);
  });
  console.log('0) Wstecz   f) Pełne menu   q) Wyjście');

  rl.question('Wybierz: ', (ans) => {
    if (ans === 'q') {
      rl.close();
      return;
    }
    if (ans === 'f') {
      printFullMenu();
      navigate(stack);
      return;
    }
    if (ans === '0') {
      if (stack.length <= 1) {
        console.log('Koniec.');
        rl.close();
        return;
      }
      navigate(stack.slice(0, -1)); // cofnij o jeden poziom
      return;
    }

    const idx = parseInt(ans, 10);
    if (!Number.isInteger(idx) || idx < 1 || idx > current.children.length) {
      console.log('Nieprawidłowy wybór.');
      navigate(stack);
      return;
    }

    const selected = current.children[idx - 1];
    if (selected.isCategory) {
      navigate([...stack, selected]); // wejdź w podkategorię
    } else {
      console.log(`\nWybrano danie: ${selected.name} - ${selected.price.toFixed(2)} PLN`);
      navigate(stack); // zostań w bieżącej kategorii
    }
  });
}

console.log('Symulacja menu restauracji.');
printFullMenu();
navigate([root]);