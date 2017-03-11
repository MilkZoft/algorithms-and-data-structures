export default function Set() {
  let items = {};

  this.getItems = () => {
    return items;
  };

  this.add = value => {
    if (!this.has(value)) {
      items[value] = value;

      return true;
    }

    return false;
  };

  this.delete = value => {
    if (this.has(value)) {
      delete items[value];

      return true;
    }

    return false;
  };

  this.has = value => {
    return items.hasOwnProperty(value);
  };

  this.clear = () => {
    items = {};
  };

  this.size = () => {
    return Object.keys(items).length;
  };

  this.values = () => {
    const values = [];
    const keys = Object.keys(items);

    for (let i = 0; i < keys.length; i++) {
      values.push(items[keys[i]]);
    }

    return values;
  };

  this.union = otherSet => {
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
  };

  this.intersection = otherSet => {
    const intersectionSet = new Set();
    const values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  };

  this.difference = otherSet => {
    const differenceSet = new Set();
    const values = this.values();

    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }

    return differenceSet;
  };

  this.subset = otherSet => {
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
  };
}
