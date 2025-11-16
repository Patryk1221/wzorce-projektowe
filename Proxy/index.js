const readline = require('readline');

class PublicResource {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }
  getContent() {
    return this.content;
  }
}

class SecretResource {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }
  getContent() {
    return this.content;
  }
}

class SecretResourceProxy {
  constructor(realResource, requiredPassword) {
    this.real = realResource;
    this.requiredPassword = requiredPassword;
  }
  getContent(password) {
    if (password !== this.requiredPassword) {
      throw new Error('Niepoprawne hasło. Dostęp zabroniony.');
    }
    return this.real.getContent();
  }
}

const publicFile = new PublicResource('public.txt', 'Treść publiczna: hello world.');
const secretFile = new SecretResource('secret.txt', 'Treść zastrzeżona: 6 7.');
const proxy = new SecretResourceProxy(secretFile, 'haslo123');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log('Wybierz obiekt do odczytu:');
console.log('1) Publiczny');
console.log('2) Zastrzeżony (wymaga hasła)');

rl.question('Twój wybór (1/2): ', (choice) => {
  if (choice.trim() === '1') {
    console.log(`[${publicFile.name}] ${publicFile.getContent()}`);
    rl.close();
    return;
  }
  if (choice.trim() === '2') {
    rl.question('Podaj hasło: ', (pwd) => {
      try {
        const content = proxy.getContent(pwd);
        console.log(`[${secretFile.name}] ${content}`);
      } catch (e) {
        console.log(e.message);
      } finally {
        rl.close();
      }
    });
    return;
  }
  console.log('Nieznana opcja.');
  rl.close();
});