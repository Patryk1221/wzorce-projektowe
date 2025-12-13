const readline = require('readline');

class Interface {
  renderMenu(programs) {
    throw new Error('Not implemented');
  }
}

class GraphicInterface extends Interface {
  renderMenu(programs) {
    console.log('=== Pulpit graficzny ===');
    programs.forEach((p, i) => console.log(`${i + 1}. ${p}`));
  }
}

class TerminalInterface extends Interface {
  renderMenu(programs) {
    console.log('=== Terminal ===');
    console.log(programs.join(' | '));
  }
}

class OperatingSystem {
  constructor(ui) {
    this.ui = ui; // Bridge
  }
  setInterface(ui) {
    this.ui = ui;
  }
  displayMenu() {
    const programs = this.getInstalledPrograms();
    this.ui.renderMenu(programs);
  }
  getInstalledPrograms() {
    throw new Error('Not implemented');
  }
}

class WindowsSystem extends OperatingSystem {
  getInstalledPrograms() {
    return ['Notepad', 'Paint', 'Edge', 'Calculator'];
  }
}

class LinuxSystem extends OperatingSystem {
  getInstalledPrograms() {
    return ['Vim', 'GIMP', 'Firefox'];
  }
}

// ui konsolowe. wymaga node.js. zeby uruchomic nalezy wpisac w konsoli: node .\index.js
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log('Wybierz system:');
console.log('1) Windows');
console.log('2) Linux');

rl.question('Twój wybór: ', (osChoice) => {
  console.log('Wybierz interfejs:');
  console.log('1) Graficzny');
  console.log('2) Tekstowy (terminal)');

  rl.question('Twój wybór: ', (uiChoice) => {
    let ui = null;
    if (uiChoice.trim() === '1') ui = new GraphicInterface();
    else if (uiChoice.trim() === '2') ui = new TerminalInterface();
    else {
      console.log('Nieznany interfejs.');
      rl.close();
      return;
    }

    let system = null;
    if (osChoice.trim() === '1') system = new WindowsSystem(ui);
    else if (osChoice.trim() === '2') system = new LinuxSystem(ui);
    else {
      console.log('Nieznany system.');
      rl.close();
      return;
    }

    console.log('\nNaciśnij Enter, aby wyświetlić menu (displayMenu)...');
    rl.question('', () => {
      system.displayMenu();
      rl.close();
    });
  });
});