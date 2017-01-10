'use strict';

// Initial store list
var storesList = [];

// Constructor to create stores
function Store(location,timeOpening,timeClosing,minHourlyCustomers,maxHourlyCustomers,avgCookiesPerSale) {
  this.location = location;
  this.timeOpening = timeOpening;
  this.timeClosing = timeClosing;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.cookiesSoldHourly = [];
  this.cookiesSoldToday = 0;
}

// Function to add stores to the store list
function addStore(store) {
  storesList.push(store);
  // set storeNumber to the new length of the list (array)
  store.storeNumber = storesList.length;
}

// Define store methods and add them to the Store objects' prototype
Store.prototype.checkSales = function () {
  // Check each hour for how many cookies were sold
  for (var hour = this.timeOpening; hour < this.timeClosing + 1; hour++) {
    console.log('Hours elapsed: ' + this.cookiesSoldHourly.length);
    // Multiply cookies per sale by number of customers this hour, and round up
    // Nobody buys a fraction of a cookie
    var result = Math.ceil(this.randomCustomers() * this.avgCookiesPerSale);
    // Add this hour's sales to store's hourly records
    this.cookiesSoldHourly.push(result);
    console.log('At ' + hour + ':00, ' + result + ' cookies were sold.');
    this.cookiesSoldToday += result;
    console.log('Hourly breakdown: ' + this.cookiesSoldHourly);
    console.log('Total cookies sold: ' + this.cookiesSoldToday);
  }
};

Store.prototype.randomCustomers = function () {
  // Generate a random number of customers based on min & max for this store
  var result = Math.floor(Math.random() * (this.maxHourlyCustomers + this.minHourlyCustomers) + this.minHourlyCustomers);
  console.log('Customers this hour: ' + result);
  return result;
};

// Construct initial 5 stores, and add them to storesList
// location, timeOpening, timeClosing, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerSale
var store1 = new Store('1st & Pike', 6, 20, 23, 65, 6.3);
var store2 = new Store('SeaTac Airport', 6, 20, 3, 27, 1.2);
var store3 = new Store('Seattle Center', 6, 20, 11, 38, 3.7);
var store4 = new Store('Capitol Hill', 6, 20, 20, 38, 2.3);
var store5 = new Store('Alki', 2, 6, 20, 16, 4.6);
for (var i = 1; i < 6; i++) {
  eval('addStore (store' + i + ');');
}

// BEGIN GENERATING SALES REPORT
// var dailyReport = document.getElementById('daily_sales');
// console.log(dailyReport);
// for (var i = 0; i < storesList.length; i++) {
//   storesList[i].checkCookieSales();
//   // create a new <p> element
//   var pElement = document.createElement('p');
//   var storeID = 'store' + (i + 1);
//   // assign class attribute of "store_location" and an ID equal to store number
//   pElement.setAttribute('class', 'store_location');
//   pElement.setAttribute('id', (storeID));
//   // set text content of element to the location of the store
//   pElement.textContent = storesList[i].location;
//   // add the new element as a child of the "daily_sales" section
//   dailyReport.appendChild(pElement);
// };
//   // BEGIN GENERATING HOURLY REPORT FOR EACH LOCATION
//   // get tag by storeID
// for (var i = 0; i < storesList.length; i++) {
//   var storeID = 'store' + (i + 1);
//   var listForStore = document.getElementById(storeID);
//   listForStore.setAttribute('id', (storeID + 'list'));
//   var listElement = document.createElement('ul');
//   for (var j = 0; j < storesList[i].cookiesSoldHourly.length; j++) {
//     // create a new list item
//     var listItemElement = document.createElement('li');
//     // assign class attribute of "hourly_report" to the list item
//     listItemElement.setAttribute('class', 'hourly_report');
//     // set text content of the list item to content of cookiesSoldHourly for this location
//     listItemElement.textContent = (storesList[i].storetimeOpening + j) + ':00 - ' + storesList[i].cookiesSoldHourly[j] + ' cookies sold';
//     // listItemElement.textContent = (storesList[i].storetimeOpening + j) + ':00: ' + storesList[i].cookiesSoldHourly[j] + 'cookies storesList[i].cookiesSoldHourly[j]';
//     // add the new list item as a child of the given store
//     listForStore.appendChild(listItemElement);
//   };
//   var totalSoldElement = document.createElement('li');
//   totalSoldElement.setAttribute('class', 'total_report');
//   totalSoldElement.textContent = ('Total: ' + storesList[i].cookiesSoldToday);
//   listForStore.appendChild(totalSoldElement);
// }
