class LocalStorage {

  static clearStorage() {
    window.localStorage.clear();
  }

  static remove(item) {
    window.localStorage.removeItem(item)
  }

  static set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key) {
		let res = window.localStorage.getItem(key)
    return JSON.parse(res);
  }
}

export default LocalStorage
