export default function PriorityQueue() {
  let items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority || 1;
  }

  this.enqueue = (element, priority) => {
    const queueElement = new QueueElement(element, priority);
    let added = false;

    for (let i = 0; i < items.length; i++) {
      if (queueElement.priority < items[i].priority) {
        items.splice(i, 0, queueElement);
        added = true;
        break;
      }
    }

    if (!added) {
      items.push(queueElement);
    }
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
    let printStr = '';
    let pipe = '|';

    for (let i = 0; i < items.length; i++) {
      if (i === items.length - 1) {
        pipe = '';
      }

      printStr += `${items[i].element}-${items[i].priority}${pipe}`;
    }

    return printStr;
  };

  this.clear = () => {
    items = [];
  };
}
