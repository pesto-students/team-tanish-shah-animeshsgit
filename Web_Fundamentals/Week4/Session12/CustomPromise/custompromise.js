// Polyfill of Promise
// IMPLIMENTATION STARTS
class CustomPromise {
  constructor(executor) {

    this.onResolve = undefined;
    this.onReject = undefined;

    // Set the initial state to false
    this.fulfilled = false;
    this.rejected = false;
    this.called = false;
    this.value = undefined;

    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  //Called if Promise is resolved to return the output
  then(callback) {
    this.onResolve = callback;

    if (this.fulfilled && !this.called) {
      console.log("Inside then");
      this.called = true;
      this.onResolve(this.value);
    }
    return this;
  }

  //Called if Promise is rejected to return the error
  catch(onRejected) {
    this.onReject = onRejected;

    if (this.rejected && !this.called) {
      this.called = true;
      this.onReject(this.value);
    }
    return this;
  }

  //Called if Promise is resolved
  resolve(value) {
    this.fulfilled = true;
    this.value = value;

    if (typeof this.onResolve === "function") {
      console.log("Inside resolve");
      this.onResolve(value);
      this.called = true;
    }
  }

  //Called if Promise is rejected
  reject(reason) {
    this.rejected = true;
    this.value = reason;

    if (typeof this.onReject === "function") {
      this.onReject(reason);
      this.called = true;
    }
  }
}
//IMPILMENTATION ENDS

//================== APPLICATION ========================
//   Test implementation by creating a Promise that resolves, and using the then method to handle the result:
const myPromise = new CustomPromise((resolve, reject) => {
  // Resolve the Promise after 1 second
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result); // Output: Success!
  })
  .catch((error) => {
    console.error(error);
  });

//   Test implementation by creating a Promise that rejects, and using the catch method to handle the error:
const myPromise2 = new CustomPromise((resolve, reject) => {
  // Reject the Promise immediately
  reject("Error! Promise not fullfilled");
});

myPromise2.catch((error) => {
  console.log("Inside reject promise") // Output: Inside reject promise
  console.error(`"Cought an error: "${error}`); // Output: Cought an error: Error! Promise not fullfilled
});
