export default function Queue() {
  let items = [];

  this.enqueue = element => {
    items.push(element);
  };

  this.dequeue = () => {
    return items.shift();
  };

  this.front = () => {
    return items[0];
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
