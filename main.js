console.log("Your code goes in this document.");

_.times(100, function() {
  console.log("hi");
});

var arrayPrice = items.map(function(item) {
return item.price
});
undefined
arrayPrice
[12, 20, 50, 25, 41.95, 5.75, 32.99, 15, 28.95, 24.95, 18, 2.99, 38, 20, 28, 13.59, 17, 48, 15, 14, 80, 22, 6.99, 6.99, 3.5]

// Question 1
var total = arrayPrice.reduce(function(arr, curr) {
 return arr + curr;
}, 0);
// Total is 590.65
var avg = total / arrayPrice.length
undefined
avg
23.625999999999998

//Question 2
var arrayRangePrice = items.filter(function(el) {
 return el.price >= 14 && el.price <= 18;
});
var arrItemOutput = arrayRangePrice.map(function(el) {
  return el.title
document.querySelector("#answer2").innerHTML = arrItemOutput;

});
//Question 3
var arrayGBP = items.filter(function(el) {
  return el.currency_code === "GBP";
});
var arrGbpPrice = arrayGBP.map(function(el) {
return el.title + " " + el.price;
});
document.querySelector("#answer3").innerHTML = arrGbpPrice;

//Question 4
var arrWood = items.filter(function(el){
  return _.contains(el.materials, "wood");
});
var woodTitle = arrWood.map(function(el) {
  return el.title;
});
document.querySelector("#answer4").innerHTML = woodTitle;

//Question 5
var eightMats = items.filter(function(el) {
  return el.materials.length >= 8;
});
var printEight = eightMats.map(function(el) {
  return el.title + eightMats.length + " " + "$" + el.price;
});
document.querySelector("#answer5").innerHTML = printEight;

//Question 6
var madeByMe = items.filter(function(el) {
  return _.contains(el, "i_did");
});
var whoDid = madeByMe.length;
document.querySelector("#answer6").innerHTML = whoDid;
