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

Brown, Ethan. Learning JavaScript . O'Reilly Media. Kindle Edition. 
