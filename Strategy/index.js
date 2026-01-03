// Strategy interface
class ImageSearchStrategy {
  async search(category, perPage = 5) {
    throw new Error('Not implemented');
  }
}

// Pexels
class PexelsStrategy extends ImageSearchStrategy {
  constructor(apiKey) {
    super();
    this.apiKey = apiKey;
  }
  async search(category, perPage = 5) {
    const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(category)}&per_page=${perPage}`;
    const res = await fetch(url, { headers: { Authorization: this.apiKey } });
    if (!res.ok) throw new Error(`Pexels HTTP ${res.status}`);
    const data = await res.json();
    return (data.photos || []).map(p => ({
      id: p.id,
      preview: p.src?.medium,
      url: p.url,
      source: 'Pexels'
    }));
  }
}

// Pixabay
class PixabayStrategy extends ImageSearchStrategy {
  constructor(apiKey) {
    super();
    this.apiKey = apiKey;
  }
  async search(category, perPage = 5) {
    const url = `https://pixabay.com/api/?key=${this.apiKey}&q=${encodeURIComponent(category)}&image_type=photo&per_page=${perPage}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Pixabay HTTP ${res.status}`);
    const data = await res.json();
    return (data.hits || []).map(h => ({
      id: h.id,
      preview: h.previewURL,
      url: h.pageURL,
      source: 'Pixabay'
    }));
  }
}

// Context
class PhotoSearcher {
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  async search(category, perPage = 5) {
    if (!this.strategy) throw new Error('Brak strategii.');
    return this.strategy.search(category, perPage);
  }
}

// Prosty CLI
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const PEXELS_API_KEY = 'ib0U6xabLeH8Xli8ddEs5bH21kV6ogaaGOVgjfZ9jxesSQRggvPlwz7q'; // '<PEXELS API KEY>'
const PIXABAY_API_KEY = '<PIXABAY API KEY>';

console.log('Wybierz źródło:');
console.log('1) Pexels');
console.log('2) Pixabay');
rl.question('Twój wybór (1/2): ', (choice) => {
  rl.question('Podaj kategorię (np. nature): ', async (category) => {
    try {
      const searcher = new PhotoSearcher();

      if (choice.trim() === '1') {
        if (PEXELS_API_KEY.startsWith('<')) throw new Error('Ustaw PEXELS API KEY.');
        searcher.setStrategy(new PexelsStrategy(PEXELS_API_KEY));
      } else if (choice.trim() === '2') {
        if (PIXABAY_API_KEY.startsWith('<')) throw new Error('Ustaw PIXABAY API KEY.');
        searcher.setStrategy(new PixabayStrategy(PIXABAY_API_KEY));
      } else {
        throw new Error('Nieznane źródło.');
      }

      const results = await searcher.search(category || 'nature', 5);
      if (!results.length) {
        console.log('Brak wyników.');
      } else {
        results.forEach((r, i) => {
          console.log(`${i + 1}. [${r.source}] id=${r.id}`);
          console.log(`   preview: ${r.preview}`);
          console.log(`   page: ${r.url}`);
        });
      }
    } catch (e) {
      console.log('Błąd:', e.message);
    } finally {
      rl.close();
    }
  });
});