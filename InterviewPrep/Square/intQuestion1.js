// While working on our application servers, we realized that sometimes we have a long list of asynchronous network requests that need to be resolved in a specific, sequential order.
// As a result, we want to create a job queue that can accumulate asynchronous jobs, then process them one at a time.

// Requirements
// Your job is to write a JavaScript module that exports a function createJobQueue, which creates an asynchronous job queue.

// This job queue should have 3 methods:
// addJob(job: () => Promise<mixed>): Promise<mixed>
// cancelJob(job: () => Promise<mixed>): void
// processAllJobs(): Promise<number>

// addJob adds a job to the end of the queue. It should return a promise that resolves with the value returned by job,
// whenever job ends up getting executed. (But, note that addJob itself should not trigger execution of any jobs.)
// If job throws an error, then the promise returned by addJob should be rejected.
// cancelJob removes a job from the queue. This should reject the promise returned by addJob. If no matching job is found, it does nothing.

// When processAllJobs is called, the queue should process jobs (by invoking them) one-at-a-time in FIFO order until there
// are none left, then resolve with the number of jobs successfully processed (i.e., that did not reject or throw an error).
// If any job cannot be processed -- because job rejects or throws an error when invoked -- the promise returned by addJob should be rejected.
// However, this should not stop processAllJobs from processing the rest of the queue.

// For simplicity:

// Assume that addJob and cancelJob will not be called while processAllJobs is in progress.
// Assume that the same job will not be added to the queue more than once.

function jobQueue(){
  this.queue = [];

  // add function
  this.add = (job) => {
    this.queue.unshift(job);
  }

  // cancel job
  this.cancelJob = (job) => {
    for (let i = 0; i < this.queue.length; i++){
      if (this.queue[i] === job) {
        this.queue.splice(i, 1);
      }
    }
  }

  this.processAllJobs = async () => {
    while (this.queue.length) {
      // console.log('processing jobs')
      let last = await this.queue.pop();
    }
  }
}

let queue = new jobQueue();

// adding a promise
let promise = new Promise((resolve, reject) => console.log(resolve));
let promise2 = new Promise((resolve, reject) => console.log(resolve));

queue.add(promise);
queue.add(promise2);
queue.cancelJob(promise);
queue.processAllJobs(promise);

console.log({ queue });


// let promise = new Promise((resolve, reject) => console.log(resolve));
// console.log({ promise });