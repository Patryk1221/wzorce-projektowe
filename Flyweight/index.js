class Texture {
  constructor(path, data) {
    this.path = path;
    this.data = data;
  }
}

class TextureFactory {
  constructor() {
    this.cache = new Map();
    this.loadCount = 0;
  }
  getTexture(path) {
    if (!this.cache.has(path)) {
      const data = this.loadFromDisk(path);
      this.cache.set(path, new Texture(path, data));
      this.loadCount++;
      console.log(`Wczytano z dysku: ${path}`);
    }
    return this.cache.get(path);
  }
  loadFromDisk(path) {
    return `DATA(${path})`;
  }
}

class GameObject {
  constructor(name, texturePath, x, y, factory) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.texture = factory.getTexture(texturePath);
  }
  draw() {
    console.log(`${this.name} @(${this.x},${this.y}) -> tex: ${this.texture.path}`);
  }
}

const factory = new TextureFactory();

const objects = [
  new GameObject('Drzewo1', 'textures/tree.png', 10, 5, factory),
  new GameObject('Drzewo2', 'textures/tree.png', 15, 8, factory),
  new GameObject('Skała', 'textures/rock.png', -2, 3, factory),
  new GameObject('Drzewo3', 'textures/tree.png', 22, 5, factory),
];

objects.forEach(o => o.draw());
console.log(`Unikalne tekstury w pamięci: ${factory.cache.size} (wczytania z dysku: ${factory.loadCount})`);