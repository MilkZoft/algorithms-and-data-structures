class EventEmitter {
  constructor() {
    this.events = {};
  }

  emit(eventName, data) {
    const event = this.events[eventName];

    if (event) {
      event.forEach(fn => {
        fn.call(null, data);
      });
    }
  }

  subscribe(eventName, fn) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(fn);
  }

  unsubscribe(eventName) {
    if (this.events[eventName]) {
      delete this.events[eventName];
    }
  }
}

document.addEventListener('DOMContentLoaded', event => {
  const input = document.querySelector('input[type="text"]');
  const button = document.querySelector('button');
  const h1 = document.querySelector('h1');
  const emitter = new EventEmitter();

  emitter.subscribe('event:name-changed', data => {
    h1.innerHTML = `Your name is: ${data.name}`;
  });

  emitter.subscribe('event:name-changed', data => {
    console.log(`Your name 2 is: ${data.name}`);
  });

  // emitter.unsubscribe('event:name-changed');

  button.addEventListener('click', () => {
    emitter.emit('event:name-changed', {
      name: input.value
    });
  });
});



