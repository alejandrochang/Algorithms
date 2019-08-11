class Hash {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (!currentBucket.length) return null;

    return currentBucket[0][1];
  }
}

const myHash = new Hash(50);
myHash.set('grapes', 10000);
console.log(myHash.get('grapes')); // 100000

// _hash is common practice for javascript private functions (developer standard)