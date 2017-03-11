export default class LinkedList {
  constructor() {
    this.items = {};
  }

  getItems() {
    return this.items;
  }

  add(value) {
    if (!this.has(value)) {
      this.items[value] = value;

      return true;
    }

    return false;
  }

  delete(value) {
    if (this.has(value)) {
      delete this.items[value];

      return true;
    }

    return false;
  }

  has(value) {
    return this.items.hasOwnProperty(value);
  }

  clear() {
    this.items = {};
  }

  size() {
    return Object.keys(this.items).length;
  }

  values() {
    const values = [];
    const keys = Object.keys(this.items);

    for (let i = 0; i < keys.length; i++) {
      value.push(this.items[keys[i]]);
    }

    return values;
  }

  union(otherSet) {
    const unionSet = new Set();
    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();

    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set();
    const values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }

    return differenceSet;
  }

  subset(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      const values = this.values();

      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }

      return true;
    }
  }
}
