export default function Dictionary() {
  let items = {};

  this.set = (key, value) => {
    items[key] = value;
  };

  this.delete = key => {
    if (this.has(key)) {
      delete items[key];

      return true;
    }

    return false;
  };

  this.get = key => {
    return this.has(key) ? items[key] : false;
  };

  this.values = () => {
    const values = [];

    for (const key in items) {
      if (this.has(key)) {
        values.push(items[key]);
      }
    }

    return values;
  };

  this.keys = () => {
    return Object.keys(items);
  };

  this.size = () => {
    return Object.keys(items).length;
  };

  this.getItems = () => {
    return items;
  };

  this.has = key => {
    return key in items;
  };

  this.clear = () => {
    items = {};
  };
}
