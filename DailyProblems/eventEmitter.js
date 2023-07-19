// Create an event emitter class that has the following functions.

// .on(eventName: string, callback: Function, times?: number)

// .emit(eventName: string, ...args?: any[])

// .removeListener(eventName: string, callback: Function)
// The times parameter for on specifies how many times a function will
// act as a handler for an event before being de-registered. 
// If no argument is passed in for times, the handler will have no maximum number of executions.

// The above snippet is in Typescript, but write your answer in 
// Javascript and just assume your class methods will always get called with the correct JS types.