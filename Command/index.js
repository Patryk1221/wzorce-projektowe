class SantaClausFactory {
  produceToy(name) {
    console.log(`Zabawka "${name}" wyprodukowana!`);
  }
  produceRod() {
    console.log('Rózga wyprodukowana!');
  }
}

class MakeToyCommand {
  constructor(name) { this.name = name; }
  execute(factory) { factory.produceToy(this.name); }
}
class MakeRodCommand {
  execute(factory) { factory.produceRod(); }
}

class SantaHelper {
  constructor(factory) {
    this.factory = factory;
    this.queue = [];
  }
  send(command) { this.queue.push(command); }
  processAll() {
    for (const cmd of this.queue) cmd.execute(this.factory);
    this.queue = [];
  }
}

const factory = new SantaClausFactory();
const helper = new SantaHelper(factory);

// 3 zabawki i 1 rózga
helper.send(new MakeToyCommand('Auto'));
helper.send(new MakeToyCommand('Lalka'));
helper.send(new MakeToyCommand('Klocki'));
helper.send(new MakeRodCommand());

helper.processAll();