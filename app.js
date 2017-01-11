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

// Define checkSales method and add it to the Store objects' prototype
Store.prototype.checkSales = function () {
  // Check each hour for how many cookies were sold
  for (var hour = this.timeOpening; hour < this.timeClosing; hour++) {
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

// Define randomCustomers helper method and add it to the Store objects' prototype
Store.prototype.randomCustomers = function () {
  // Generate a random number of customers based on min & max for this store
  var result = Math.floor(Math.random() * (this.maxHourlyCustomers + this.minHourlyCustomers) + this.minHourlyCustomers);
  console.log('Customers this hour: ' + result);
  return result;
};

// Define render method and add it to the Store objects' prototype
Store.prototype.render = function() {
  // check sales for this location - encapsulating method
  this.checkSales();
  // locate the table created by global function salesReportInit
  var elTable = document.getElementById('sales_report_table');
  // create a new table row and & append to the sales report
  var elTableRow = document.createElement('tr');
  elTableRow.setAttribute('id', 'store' + this.storeNumber);
  elTable.appendChild(elTableRow);

  // create the 1st table data with store location
  var elTableData = document.createElement('td');
  elTableData.setAttribute('class', 'store_location');
  elTableData.textContent = this.location;
  elTableRow.appendChild(elTableData);

  // append table data with each hour's sales numbers
  for (var i = 0; i < this.cookiesSoldHourly.length; i++) {
    var elTableData = document.createElement('td');
    var results = this.cookiesSoldHourly[i];
    totalSalesToday[i] += results;
    elTableData.textContent = results;
    elTableRow.appendChild(elTableData);
  }
};

// Construct initial 5 stores, and add them to storesList
// location, timeOpening, timeClosing, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerSale
var store1 = new Store('1st & Pike', 6, 20, 23, 65, 6.3);
var store2 = new Store('SeaTac Airport', 6, 20, 3, 24, 1.2);
var store3 = new Store('Seattle Center', 6, 20, 11, 38, 3.7);
var store4 = new Store('Capitol Hill', 6, 20, 20, 38, 2.3);
var store5 = new Store('Alki', 6, 20, 2, 16, 4.6);
for (var i = 1; i < 6; i++) {
  eval('addStore (store' + i + ');');
}

// BEGIN GENERATING SALES REPORT
// sales will be updated by each store's render method
var totalSalesToday = [];
salesReportInit();

for (var i = 0; i < storesList.length; i++) {
  storesList[i].render();
}

// BEGIN GENERATING SALES REPORT
function salesReportInit() {
  // identify parent node on the DOM (HTML section "sales_report")
  var dailyReport = document.getElementById('sales_report');
  console.log(dailyReport);

  // create a new table & append it
  var elTable = document.createElement('table');
  // give store render methods something to attach to
  elTable.setAttribute('id', 'sales_report_table');
  dailyReport.appendChild(elTable);

  // create the header row and append it to the table just created, along with first blank table heading cell
  var elTableRow = document.createElement('tr');
  elTable.appendChild(elTableRow);
  var elFirstTableHeading = document.createElement('th');
  elFirstTableHeading.setAttribute('class', 'table_header');
  elTableRow.appendChild(elFirstTableHeading);

  // create table headings and add as the contents of the header row
  // starting with 6 AM
  for (var i = 6; i < 20; i++) {
    var elTableHeading = document.createElement('th');
    // set class of the table headings
    elTableHeading.setAttribute('class', 'table_header');
    // create a user-friendly time stamp
    if (i < 12) {
      var hourString = i + ':00 AM';
    } else if (i === 12) {
      var hourString = '12:00 PM';
    } else {
      var hourString = (i - 12) + ':00 PM';
    }
    // set text content to the hour
    elTableHeading.textContent = hourString;
    elTableRow.appendChild(elTableHeading);
  }
}

// for (var i = 0; i < storesList.length; i++) {
//   // check sales for each store
//   storesList[i].checkSales();
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
//
//     // REDEFINE THIS
//     // listItemElement.setAttribute('class', 'hourly_report');
//     // set text content of the list item to content of cookiesSoldHourly for this location
//     listItemElement.textContent = (storesList[i].timeOpening + j) + ':00 - ' + storesList[i].cookiesSoldHourly[j] + ' cookies sold';
//     // add the new list item as a child of the given store
//     listForStore.appendChild(listItemElement);
//   };
//   var totalSoldElement = document.createElement('li');
//   totalSoldElement.setAttribute('class', 'total_report');
//   totalSoldElement.textContent = ('Total: ' + storesList[i].cookiesSoldToday);
//   listForStore.appendChild(totalSoldElement);
// }
