const add = function(n1,n2){
	let sum=0
  sum=n1+n2
  return sum
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(arr) {
	return arr.reduce((init,nxt)=>init+nxt,0)
};

const multiply = function(arr) {
  return arr.reduce((init,nxt)=>init*nxt)
};

const power = function(a,b) {
  return Math.pow(a,b)
	
};

const factorial = function(n) {
	let res=1;
  for(let i=n;i>0;i--)
  {
    res*=i;
  }
  return res
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
