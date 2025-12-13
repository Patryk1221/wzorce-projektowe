const readline = require('readline');

class Payment {
  pay(amount) {
    throw new Error('Not implemented');
  }
}

class CardPayment extends Payment {
  pay(amount) {
    console.log(`Płatność kartą: ${amount.toFixed(2)} PLN`);
  }
}
class CashPayment extends Payment {
  pay(amount) {
    console.log(`Płatność gotówką: ${amount.toFixed(2)} PLN`);
  }
}
class BlikPayment extends Payment {
  pay(amount) {
    console.log(`Płatność BLIK: ${amount.toFixed(2)} PLN`);
  }
}

// Dekorator bazowy
class PaymentDecorator extends Payment {
  constructor(wrapped) {
    super();
    this.wrapped = wrapped;
  }
  pay(amount) {
    this.wrapped.pay(amount);
  }
}

// Dekoratory dodatkowych akcji
class SmsDecorator extends PaymentDecorator {
  pay(amount) {
    super.pay(amount);
    console.log('Potwierdzenie płatności wysłane SMS.');
  }
}
class LoyaltyDecorator extends PaymentDecorator {
  pay(amount) {
    super.pay(amount);
    const points = Math.floor(amount / 10);
    console.log(`Dodano ${points} punktów lojalnościowych.`);
  }
}
class RedirectDecorator extends PaymentDecorator {
  pay(amount) {
    super.pay(amount);
    console.log('Przekierowanie na stronę główną sklepu...');
  }
}

class Shop {
  checkout(amount, method) {
    let payment = null;

    if (method === 'card') {
      // 3 dekoratory uruchamiane przy płatności kartą
      payment = new RedirectDecorator(
        new LoyaltyDecorator(
          new SmsDecorator(
            new CardPayment()
          )
        )
      );
    } else if (method === 'cash') {
      payment = new CashPayment();
    } else if (method === 'blik') {
      payment = new BlikPayment();
    } else {
      console.log('Nieznana metoda płatności.');
      return;
    }

    payment.pay(amount);
    console.log('Transakcja zakończona.');
  }
}

// ui konsolowe. wymaga node.js. zeby uruchomic nalezy wpisac w konsoli: node .\index.js
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const shop = new Shop();

rl.question('Podaj kwotę (PLN): ', (amtStr) => {
  const amount = parseFloat(amtStr);
  if (isNaN(amount) || amount <= 0) {
    console.log('Niepoprawna kwota.');
    rl.close();
    return;
  }
  console.log('Wybierz metodę płatności:');
  console.log('1) Karta (uruchomi dekoratory)');
  console.log('2) Gotówka');
  console.log('3) BLIK');
  rl.question('Twój wybór (1/2/3): ', (choice) => {
    const method = choice.trim() === '1' ? 'card' : choice.trim() === '2' ? 'cash' : choice.trim() === '3' ? 'blik' : 'unknown';
    shop.checkout(amount, method);
    rl.close();
  });
});