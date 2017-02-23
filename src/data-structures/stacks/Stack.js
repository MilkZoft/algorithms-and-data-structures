export default function Stack() {
  let items = [];

  this.push = element => {
    items.push(element);
  };

  this.pop = () => {
    return this.hasElements() ? items.pop() : false;
  };

  this.last = () => {
    return items[items.length - 1];
  };

  this.hasElements = () => {
    return items.length > 0;
  };

  this.size = () => {
    return items.length;
  };

  this.print = () => {
    return items.toString();
  };

  this.clear = () => {
    items = [];
  };
}
