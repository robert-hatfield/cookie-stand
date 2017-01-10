'use strict';

var store1 = {
  location: '1st & Pike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerSale: 6.3,
  storeOpeningTime: 6,
  storeClosingTime: 20,
  cookiesSoldHourly: [],
  cookiesSoldTotal: 0,
  // Generate a random number of customers based on minimum & maximum customers per hour
  randomCustomers: function() {
    var result = Math.floor(Math.random() * (this.maxHourlyCustomers + this.minHourlyCustomers) + this.minHourlyCustomers);
    console.log('Customers this hour: ' + result);
    return result;
  },
  checkCookieSales: function() {
    // Check each hour for how many cookies were sold
    for (var hour = this.storeOpeningTime; hour < (this.storeClosingTime + 1); hour++) {
      console.log('Hours elapsed: ' + this.cookiesSoldHourly.length);
      var result = Math.ceil(this.randomCustomers() * this.avgCookiesPerSale); // use Math.ceil to round up, since nobody buys a fraction of a cookie
      this.cookiesSoldHourly[hour - this.storeOpeningTime] = result;
      console.log('At ' + hour + ':00, ' + result + ' cookies were sold.');
      this.cookiesSoldTotal += result;
      console.log('Hourly breakdown: ' + this.cookiesSoldHourly);
      console.log(this.cookiesSoldTotal);
    }
  }
};
var store2 = {
  location: 'SeaTac Airport',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerSale: 1.2,
  storeOpeningTime: 6,
  storeClosingTime: 20,
  cookiesSoldHourly: [],
  cookiesSoldTotal: 0,
  // Generate a random number of customers based on minimum & maximum customers per hour
  randomCustomers: function() {
    var result = Math.floor(Math.random() * (this.maxHourlyCustomers + this.minHourlyCustomers) + this.minHourlyCustomers);
    console.log('Customers this hour: ' + result);
    return result;
  },
  checkCookieSales: function() {
    // Check each hour for how many cookies were sold
    for (var hour = this.storeOpeningTime; hour < (this.storeClosingTime + 1); hour++) {
      console.log('Hours elapsed: ' + this.cookiesSoldHourly.length);
      var result = Math.ceil(this.randomCustomers() * this.avgCookiesPerSale); // use Math.ceil to round up, since nobody buys a fraction of a cookie
      this.cookiesSoldHourly[hour - this.storeOpeningTime] = result;
      console.log('At ' + hour + ':00, ' + result + ' cookies were sold.');
      this.cookiesSoldTotal += result;
      console.log('Hourly breakdown: ' + this.cookiesSoldHourly);
      console.log(this.cookiesSoldTotal);
    }
  }
};

var store3 = {
  location: 'Seattle Center',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerSale: 3.7,
  storeOpeningTime: 6,
  storeClosingTime: 20,
  cookiesSoldHourly: [],
  cookiesSoldTotal: 0,
  // Generate a random number of customers based on minimum & maximum customers per hour
  randomCustomers: function() {
    var result = Math.floor(Math.random() * (this.maxHourlyCustomers + this.minHourlyCustomers) + this.minHourlyCustomers);
    console.log('Customers this hour: ' + result);
    return result;
  },
  checkCookieSales: function() {
    // Check each hour for how many cookies were sold
    for (var hour = this.storeOpeningTime; hour < (this.storeClosingTime + 1); hour++) {
      console.log('Hours elapsed: ' + this.cookiesSoldHourly.length);
      var result = Math.ceil(this.randomCustomers() * this.avgCookiesPerSale); // use Math.ceil to round up, since nobody buys a fraction of a cookie
      this.cookiesSoldHourly[hour - this.storeOpeningTime] = result;
      console.log('At ' + hour + ':00, ' + result + ' cookies were sold.');
      this.cookiesSoldTotal += result;
      console.log('Hourly breakdown: ' + this.cookiesSoldHourly);
      console.log(this.cookiesSoldTotal);
    }
  }
};
var store4 = {
  location: 'Capitol Hill',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerSale: 2.3,
  storeOpeningTime: 6,
  storeClosingTime: 20,
  cookiesSoldHourly: [],
  cookiesSoldTotal: 0,
  // Generate a random number of customers based on minimum & maximum customers per hour
  randomCustomers: function() {
    var result = Math.floor(Math.random() * (this.maxHourlyCustomers + this.minHourlyCustomers) + this.minHourlyCustomers);
    console.log('Customers this hour: ' + result);
    return result;
  },
  checkCookieSales: function() {
    // Check each hour for how many cookies were sold
    for (var hour = this.storeOpeningTime; hour < (this.storeClosingTime + 1); hour++) {
      console.log('Hours elapsed: ' + this.cookiesSoldHourly.length);
      var result = Math.ceil(this.randomCustomers() * this.avgCookiesPerSale); // use Math.ceil to round up, since nobody buys a fraction of a cookie
      this.cookiesSoldHourly[hour - this.storeOpeningTime] = result;
      console.log('At ' + hour + ':00, ' + result + ' cookies were sold.');
      this.cookiesSoldTotal += result;
      console.log('Hourly breakdown: ' + this.cookiesSoldHourly);
      console.log(this.cookiesSoldTotal);
    }
  }
};

var store5 = {
  location: 'Alki',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerSale: 4.6,
  storeOpeningTime: 6,
  storeClosingTime: 20,
  cookiesSoldHourly: [],
  cookiesSoldTotal: 0,
  // Generate a random number of customers based on minimum & maximum customers per hour
  randomCustomers: function() {
    var result = Math.floor(Math.random() * (this.maxHourlyCustomers + this.minHourlyCustomers) + this.minHourlyCustomers);
    console.log('Customers this hour: ' + result);
    return result;
  },
  checkCookieSales: function() {
    // Check each hour for how many cookies were sold
    for (var hour = this.storeOpeningTime; hour < (this.storeClosingTime + 1); hour++) {
      console.log('Hours elapsed: ' + this.cookiesSoldHourly.length);
      var result = Math.ceil(this.randomCustomers() * this.avgCookiesPerSale); // use Math.ceil to round up, since nobody buys a fraction of a cookie
      this.cookiesSoldHourly[hour - this.storeOpeningTime] = result;
      console.log('At ' + hour + ':00, ' + result + ' cookies were sold.');
      this.cookiesSoldTotal += result;
      console.log('Hourly breakdown: ' + this.cookiesSoldHourly);
      console.log(this.cookiesSoldTotal);
    }
  }
};

// create an array containing all store locations
var storesList = [store1, store2, store3, store4, store5];

// BEGIN GENERATING SALES REPORT
var dailyReport = document.getElementById('daily_sales');
console.log(dailyReport);
for (var i = 0; i < storesList.length; i++) {
  storesList[i].checkCookieSales();
  // create a new <p> element
  var pElement = document.createElement('p');
  var storeID = 'store' + (i + 1);
  // assign class attribute of "store_location" and an ID equal to store number
  pElement.setAttribute('class', 'store_location');
  pElement.setAttribute('id', (storeID));
  // set text content of element to the location of the store
  pElement.textContent = storesList[i].location;
  // add the new element as a child of the "daily_sales" section
  dailyReport.appendChild(pElement);
};
  // BEGIN GENERATING HOURLY REPORT FOR EACH LOCATION
  // get tag by storeID
for (var i = 0; i < storesList.length; i++) {
  var storeID = 'store' + (i + 1);
  var listForStore = document.getElementById(storeID);
  listForStore.setAttribute('id', (storeID + 'list'));
  var listElement = document.createElement('ul');
  for (var j = 0; j < storesList[i].cookiesSoldHourly.length; j++) {
    // create a new list item
    var listItemElement = document.createElement('li');
    // assign class attribute of "hourly_report" to the list item
    listItemElement.setAttribute('class', 'hourly_report');
    // set text content of the list item to content of cookiesSoldHourly for this location
    listItemElement.textContent = (storesList[i].storeOpeningTime + j) + ':00 - ' + storesList[i].cookiesSoldHourly[j] + ' cookies sold';
    // listItemElement.textContent = (storesList[i].storeOpeningTime + j) + ':00: ' + storesList[i].cookiesSoldHourly[j] + 'cookies storesList[i].cookiesSoldHourly[j]';
    // add the new list item as a child of the given store
    listForStore.appendChild(listItemElement);
  };
  var totalSoldElement = document.createElement('li');
  totalSoldElement.setAttribute('class', 'total_report');
  totalSoldElement.textContent = ('Total: ' + storesList[i].cookiesSoldTotal);
  listForStore.appendChild(totalSoldElement);
}
