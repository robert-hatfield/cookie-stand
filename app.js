'use strict';

// TO DO:
// Allow for rendering stores with different business hours

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
  var hoursOpen = this.timeClosing - this.timeOpening;
  console.log('Open for ' + hoursOpen + ' hours today.');
  for (var i = 0; i < hoursOpen; i++) {
    console.log('Hours elapsed: ' + i);
    // Multiply cookies per sale by number of customers this hour, and round up
    // Nobody buys a fraction of a cookie
    var result = Math.ceil(this.randomCustomers() * this.avgCookiesPerSale);
    console.log('At ' + (i + this.timeOpening) + ':00, ' + result + ' cookies were sold.');
    // add to store's daily total and push to hourly report
    this.cookiesSoldToday += result;
    this.cookiesSoldHourly.push(result);
    // Add this hour's sales to store & business hourly records
    console.log('Hourly breakdown: ' + this.cookiesSoldHourly);
    console.log('Cookies sold in all stores this hour: ' + this.cookiesSoldHourly);
    totalSalesToday[i] += result;
    console.log(totalSalesToday[i]);
    grandTotalSales += result;
    console.log('Total cookies sold so far today: ' + grandTotalSales);
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
  // create a new table row and & append to the sales report
  var elTableRow = document.createElement('tr');
  elTableRow.setAttribute('id', 'store' + this.storeNumber);
  salesTableNode.appendChild(elTableRow);

  // create the 1st table data with store location
  var elTableData = document.createElement('td');
  elTableData.setAttribute('class', 'store_location');
  elTableData.textContent = this.location;
  elTableRow.appendChild(elTableData);

  // append table data with each hour's sales numbers
  for (var i = 0; i < this.cookiesSoldHourly.length; i++) {
    var elTableData = document.createElement('td');
    var results = this.cookiesSoldHourly[i];
    elTableData.textContent = results;
    elTableRow.appendChild(elTableData);
  }

  // append table data with total sales for the day
  var elTableData = document.createElement('td');
  elTableData.setAttribute('class', 'store_total');
  elTableData.textContent = this.cookiesSoldToday;
  elTableRow.appendChild(elTableData);
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

// INITIALIZE REPORT

/* Declare this as a global variable so DOM hook available to all functions. Defined by salesReportHeader when the table is created */
var salesTableNode;
// sales will be updated by each store's render method
var grandTotalSales = 0;
var salesTableNode;
var totalSalesToday = [];
totalSalesInit();

// Create and anchor a new table element
// identify parent node on the DOM (HTML section "sales_report")
var dailyReport = document.getElementById('sales_report');
console.log(dailyReport);
// create a new table & append it to the HTML section
salesTableNode = document.createElement('table');
// give store render methods something to attach to
salesTableNode.setAttribute('id', 'sales_report_table');
dailyReport.appendChild(salesTableNode);

// Call render function for the table header row
salesReportHeader();

// call render function for all stores to calculate and add their results to the report
for (var i = 0; i < storesList.length; i++) {
  storesList[i].render();
}

// Call render function for the table footer row
salesReportFooter();

function totalSalesInit() {
  // ensure all values for totalSalesToday are defined
  for (var i = 0; i < 14; i++) {
    totalSalesToday[i] = 0;
  }
}

function salesReportHeader() {
  // create the header row and append it to the table just created, along with first blank table heading cell
  var elTableRow = document.createElement('tr');
  salesTableNode.appendChild(elTableRow);
  var elFirstTableHeading = document.createElement('th');
  elFirstTableHeading.setAttribute('class', 'table_header');
  elTableRow.appendChild(elFirstTableHeading);

  // create table headings and add as the contents of the header row
  // starting with 6 AM
  for (var i = 0; i < 14; i++) {
    var elTableHeading = document.createElement('th');
    // set class of the table headings
    elTableHeading.setAttribute('class', 'table_header');
    // create a user-friendly time stamp
    if (i < 6) {
      var hourString = (i + 6) + ':00am';
    } else if (i === 6) {
      var hourString = '12:00pm';
    } else {
      var hourString = (i - 6) + ':00pm';
    }
    // set text content to the hour
    elTableHeading.textContent = hourString;
    elTableRow.appendChild(elTableHeading);
  }
  // Add final heading for total sales for each store
  var elLastTableHeading = document.createElement('th');
  elLastTableHeading.setAttribute('class', 'table_header');
  elLastTableHeading.textContent = 'Daily Location Total';
  elTableRow.appendChild(elLastTableHeading);
}

function salesReportFooter() {
  // create the footer row and append it to the table
  var elTableRow = document.createElement('tr');
  salesTableNode.appendChild(elTableRow);
  var elFirstTableHeading = document.createElement('th');
  elFirstTableHeading.setAttribute('class', 'table_header');
  elFirstTableHeading.textContent = 'Totals';
  elTableRow.appendChild(elFirstTableHeading);

  // add total sales for each hour to the footer row
  for (var i = 0; i < 14; i++) {
    var elTableData = document.createElement('td');
    elTableData.setAttribute('class', 'totals');
    elTableData.textContent = totalSalesToday[i];
    elTableRow.appendChild(elTableData);
  }

  // Add grand total to last entry of footer row
  var elTableData = document.createElement('td');
  elTableData.setAttribute('class', 'totals');
  elTableData.setAttribute('id', 'grand_total');
  elTableData.textContent = grandTotalSales;
  elTableRow.appendChild(elTableData);
}
