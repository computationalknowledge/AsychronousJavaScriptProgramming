console.log("Before timeout: " + new Date());
function f() {
   console.log("After timeout: " + new Date());
}
setTimeout(f, 60*1000); // one minute
console.log("I happen after setTimeout!");
console.log("Me too!");



// another example

setTimeout(function() {
   console.log("After timeout: " + new Date());
}, 60*1000);


// another example:

const start = new Date();
let i=0;
const intervalId = setInterval(function() {
   let now = new Date();
   if(now.getMinutes() !== start.getMinutes() || ++i>10)
      return clearInterval(intervalId);
   console.log(`${i}: ${now}`);
}, 5*1000);


