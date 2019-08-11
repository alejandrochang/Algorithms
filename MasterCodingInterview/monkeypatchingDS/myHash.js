class Hash {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < ket.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    this.data.push([key, value]);
  }

  get(key) {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i][0] === key) return this.data[i][1];
    }

    return null;
  }
}

const myHash = new Hash(50);
myHash.set('grapes', 10000);
console.log({ myHash });
// myHash.get('grapes'); // 100000