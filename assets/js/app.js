'use strict';

// TO DO:
// Allow for rendering stores with different business hours

// DECLARE & INITIALIZE VARIABLES
var storesList = [];
// sales will be updated by each store's render method
var grandTotalSales = 0;
var totalSalesToday = [];
/* Declare this as a global variable so DOM hook available to all functions. Defined by salesReportHeader and salesReportFooter when the table is created */
var salesTableNode;
var footerElementNode;
// ensure all values for totalSalesToday are defined
for (var i = 0; i < 14; i++) {
  totalSalesToday[i] = 0;
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

// CREATE DAILY SALES REPORT TABLE
// identify parent node on the DOM (HTML section "sales_report")
var dailyReport = document.getElementById('sales_report');
console.log(dailyReport);
// Create a new table element & append it to the HTML section
salesTableNode = document.createElement('table');
// Give store render methods something to attach to
salesTableNode.setAttribute('id', 'sales_report_table');
dailyReport.appendChild(salesTableNode);

// CONSTRUCTOR AND ASSOCIATED METHODS
function Store(location,timeOpening,timeClosing,minHourlyCustomers,maxHourlyCustomers,avgCookiesPerSale) {
  this.location = location;
  this.timeOpening = timeOpening;
  this.timeClosing = timeClosing;
  this.minHourlyCustomers = parseInt(minHourlyCustomers);
  this.maxHourlyCustomers = parseInt(maxHourlyCustomers);
  this.avgCookiesPerSale = parseFloat(avgCookiesPerSale);
  this.cookiesSoldHourly = [];
  this.cookiesSoldToday = 0;
}

// Define checkSales method and add it to the Store objects' prototype
Store.prototype.checkSales = function () {
  // Check each hour for how many cookies were sold
  var hoursOpen = this.timeClosing - this.timeOpening;
  // console.log('Open for ' + hoursOpen + ' hours today.');
  for (var i = 0; i < hoursOpen; i++) {
    // console.log('Hours elapsed: ' + i);
    // Multiply cookies per sale by number of customers this hour, and round up
    // Nobody buys a fraction of a cookie
    var result = Math.ceil(this.randomCustomers() * this.avgCookiesPerSale);
    // console.log('At ' + (i + this.timeOpening) + ':00, ' + result + ' cookies were sold.');
    // add to store's daily total and push to hourly report
    this.cookiesSoldToday += result;
    this.cookiesSoldHourly.push(result);
    // Add this hour's sales to store & business hourly records
    // console.log('Hourly breakdown: ' + this.cookiesSoldHourly);
    // console.log('Cookies sold in all stores this hour: ' + this.cookiesSoldHourly);
    totalSalesToday[i] += result;
    // console.log(totalSalesToday[i]);
    grandTotalSales += result;
    // console.log('Total cookies sold so far today: ' + grandTotalSales);
  }
};

// Define randomCustomers helper method and add it to the Store objects' prototype
Store.prototype.randomCustomers = function () {
  // Generate a random number of customers based on min & max for this store
  var result = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1)) + this.minHourlyCustomers;
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
  // create the 1st table header with store location
  var elTableData = document.createElement('th');
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
  // Add footer table header with total sales for the day
  var elTableData = document.createElement('td');
  elTableData.setAttribute('class', 'store_total');
  elTableData.textContent = this.cookiesSoldToday;
  elTableRow.appendChild(elTableData);
};

// Call render function for the table header row
salesReportHeader();

// Call render method for all stores to calculate and add their results to the report
for (var i = 0; i < storesList.length; i++) {
  storesList[i].render();
}

// Call render function for the table footer row
salesReportFooter();

// FUNCTIONS

// Function to add stores to the store list
function addStore(store) {
  storesList.push(store);
  // set storeNumber to the new length of the list (array)
  store.storeNumber = storesList.length;
}

function salesReportHeader() {
  // Create the header row and append it to the table just created, along with first blank table header cell
  var elTableRow = document.createElement('tr');
  salesTableNode.appendChild(elTableRow);
  var elFirstTableHeader = document.createElement('th');
  elFirstTableHeader.setAttribute('class', 'table_header');
  elTableRow.appendChild(elFirstTableHeader);

  // create table headers and add as the contents of the header row
  // starting with 6 AM
  for (var i = 0; i < 14; i++) {
    var elTableHeader = document.createElement('th');
    // set class of the table headers
    elTableHeader.setAttribute('class', 'table_header');
    // create a user-friendly time stamp
    if (i < 6) {
      var hourString = (i + 6) + ':00am';
    } else if (i === 6) {
      var hourString = '12:00pm';
    } else {
      var hourString = (i - 6) + ':00pm';
    }
    // set text content to the hour
    elTableHeader.textContent = hourString;
    elTableRow.appendChild(elTableHeader);
  }
  // Add final header for total sales for each store
  var elLastTableHeader = document.createElement('th');
  elLastTableHeader.setAttribute('class', 'table_header');
  elLastTableHeader.textContent = 'Daily Location Total';
  elTableRow.appendChild(elLastTableHeader);
}

function salesReportFooter() {
  // create the footer row and append it to the table
  footerElementNode = document.createElement('tr');
  salesTableNode.appendChild(footerElementNode);
  var elFirstTableHeader = document.createElement('th');
  elFirstTableHeader.setAttribute('class', 'table_header');
  elFirstTableHeader.textContent = 'Totals';
  footerElementNode.appendChild(elFirstTableHeader);

  // add total sales for each hour to the footer row
  for (var i = 0; i < 14; i++) {
    var elTableData = document.createElement('td');
    elTableData.setAttribute('class', 'totals');
    elTableData.textContent = totalSalesToday[i];
    footerElementNode.appendChild(elTableData);
  }

  // Add grand total to last entry of footer row
  var elTableData = document.createElement('td');
  elTableData.setAttribute('class', 'totals');
  elTableData.setAttribute('id', 'grand_total');
  elTableData.textContent = grandTotalSales;
  footerElementNode.appendChild(elTableData);
}

// Call this function to append new elements on the DOM
// Pass undefined for optional arguments (classValue, idValue, textContent) if you do not want to set these attributes
function appendToDom(newElementType, classValue, idValue, textContent, parentElement) {
  var newElement = document.createElement(newElementType);
  if (typeof classValue !== 'undefined') {
    newElement.setAttribute('class', classValue);
  }
  if (typeof idValue !== 'undefined') {
    newElement.setAttribute('id', idValue);
  }
  if (typeof textContent !== 'undefined') {
    newElement.textContent = textContent;
  }
  parentElement.appendChild(newElement);
}

// create listener for forms submission
var formEl = document.getElementById('add_store');

formEl.addEventListener('submit', newStoreSubmit, false);

function newStoreSubmit(event) {
  event.preventDefault();
  event.stopPropagation();
  // convert and/or validate user input
  var location = event.target.location.value;
  var timeOpening = parseInt(event.target.time_opening.value);
  var amPmOpen = event.target.ampm_open.value;

  // change times from am/pm to 24hr
  console.log(timeOpening + ' is a ' + typeof timeOpening);
  console.log('Value: ' + amPmOpen + ' has data type of: ' + typeof amPmOpen + '.');
  console.log('Is this PM? ' + (amPmOpen === 'PM'));
  console.log('NOT opening at 12? ' + (timeOpening != 12));
  if (amPmOpen === 'PM' && timeOpening != 12) {
    var responseString = timeOpening + amPmOpen + ' was entered,';
    timeOpening += 12;
    console.log(responseString + ' changing to ' + timeOpening + ' for calculations.');
  }
  var timeClosing = parseInt(event.target.time_closing.value);
  var amPmClose = event.target.ampm_close.value;
  console.log(timeClosing);
  console.log('Value: ' + amPmClose + ' has data type of: ' + typeof amPmClose + '.');
  if (amPmClose === 'PM' && timeClosing != 12) {
    var responseString = timeClosing + amPmClose + ' was entered,';
    timeClosing += 12;
    console.log(responseString + ' changing to ' + timeClosing + ' for calculations.');
  }

  // If min customers exceeds max, abort store construction
  var targetMinHourlyCustomers = event.target.min_hourly_customers.value;
  var minHourlyCustomers = parseInt(targetMinHourlyCustomers);

  var maxHourlyCustomers = parseInt(event.target.max_hourly_customers.value);
  if (minHourlyCustomers > maxHourlyCustomers) {
    alert('The minimum # of customers (' + minHourlyCustomers + ') cannot be higher than the maximum (' + maxHourlyCustomers + ').\n\n"' + location + '" was not added.');
    document.getElementById('min_entry').value = '';
    document.getElementById('max_entry').value = '';
    return;
  }
  var avgCookiesPerSale = event.target.avg_cookies_per_sale.value;
  // create new store object with received arguments
  var newStore = new Store(location,timeOpening,timeClosing,minHourlyCustomers,maxHourlyCustomers,avgCookiesPerSale);
  console.log(newStore + 'test');
  storesList.push(newStore);
  // remove footer node from DOM
  footerElementNode.remove();
  // render new store to table
  storesList[(storesList.length - 1)].render();
  // re-run footer report with new store included and create it again
  salesReportFooter();
  formEl.reset();
}
