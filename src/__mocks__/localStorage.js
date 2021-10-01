export default class LocalStorage {
    constructor() {
      this.LocalStorage = {};
    }
  
    setItem(key, value) {
      this.LocalStorage[key] = value;
    }
  
    getItem(key) {
      return this.LocalStorage[key];
    }
  }