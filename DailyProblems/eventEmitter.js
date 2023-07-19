// Create an event emitter class that has the following functions.

// .on(eventName: string, callback: Function, times?: number)

// .emit(eventName: string, ...args?: any[])

// .removeListener(eventName: string, callback: Function)
// The times parameter for on specifies how many times a function will
// act as a handler for an event before being de-registered. 
// If no argument is passed in for times, the handler will have no maximum number of executions.

// The above snippet is in Typescript, but write your answer in 
// Javascript and just assume your class methods will always get called with the correct JS types.

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, cb, times) {
    // handle case where no event name is present
    if (this.events[eventName]) {
      this.events[eventName] = [...this.events[eventName], { cb, times }]
    } else {
      this.events[eventName] = [{ cb, times }];
    }
  }

  emit(eventName, ...args) {
    const handler = this.events[eventName];
    if (!handler) return;

    handler.forEach((e) => {
      e.cb(...args)
      e.times -= 1;
    })

    this.events[eventName] = handler.filter((e) => e.times);
  }

  removeListener(eventName, cb) {
    const handler = this.events[eventName];
    if (!handler) return;

    const filtered = handler.filter(({ cb: _fn }) => JSON.stringify(_fn) !== JSON.stringify(cb));
    this.events[eventName] = filtered;
  }
}

const e = new EventEmitter();

e.on('event1', () => console.log('hello world'), 2);
e.on('event1', () => console.log('hello other world'), 2);
e.on('event2', () => console.log('plop'), 10);

e.emit('event1'); // hello world/hello other world
e.removeListener('event1', () => console.log('hello world'));
e.emit('event1'); // hello world/hello other world (null if e.remove)
// e.emit('event2'); // plop
e.emit('event1'); // null
e.emit('event1'); // null