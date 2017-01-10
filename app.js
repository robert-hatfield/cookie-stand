'use strict';

var store1 = {
  location: '1st & Pike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerSale: 6.3,
  storeOpeningTime: 6,
  storeClosingTime: 20,
  cookiesSoldToday: [],
  // Generate a random number of customers based on minimum & maximum customers per hour
  randomCustomers: function() {
    var result = Math.floor(Math.random() * (this.maxHourlyCustomers + this.minHourlyCustomers) + this.minHourlyCustomers);
    console.log('Customers this hour: ' + result);
    return result;
  },
  checkCookieSales: function() {
    // Check each hour for how many cookies were sold
    for (var hour = this.storeOpeningTime; hour < (this.storeClosingTime + 1); hour++) {
      console.log('Hours elapsed: ' + this.cookiesSoldToday.length);
      this.cookiesSoldToday[hour - this.storeOpeningTime] = Math.ceil(this.randomCustomers() * this.avgCookiesPerSale); // use Math.ceil to round up, since nobody buys a fraction of a cookie
      console.log('At ' + hour + ':00, ' + this.cookiesSoldToday[hour - this.storeOpeningTime] + ' cookies were sold.');
      console.log(this.cookiesSoldToday);
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
  cookiesSoldToday: [],
  // Generate a random number of customers based on minimum & maximum customers per hour
  randomCustomers: function() {
    var result = Math.floor(Math.random() * (this.maxHourlyCustomers + this.minHourlyCustomers) + this.minHourlyCustomers);
    console.log('Customers this hour: ' + result);
    return result;
  },
  checkCookieSales: function() {
    // Check each hour for how many cookies were sold
    for (var hour = this.storeOpeningTime; hour < (this.storeClosingTime + 1); hour++) {
      console.log('Hours elapsed: ' + this.cookiesSoldToday.length);
      this.cookiesSoldToday[hour - this.storeOpeningTime] = Math.ceil(this.randomCustomers() * this.avgCookiesPerSale); // use Math.ceil to round up, since nobody buys a fraction of a cookie
      console.log('At ' + hour + ':00, ' + this.cookiesSoldToday[hour - this.storeOpeningTime] + ' cookies were sold.');
      console.log(this.cookiesSoldToday);
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
  cookiesSoldToday: [],
  // Generate a random number of customers based on minimum & maximum customers per hour
  randomCustomers: function() {
    var result = Math.floor(Math.random() * (this.maxHourlyCustomers + this.minHourlyCustomers) + this.minHourlyCustomers);
    console.log('Customers this hour: ' + result);
    return result;
  },
  checkCookieSales: function() {
    // Check each hour for how many cookies were sold
    for (var hour = this.storeOpeningTime; hour < (this.storeClosingTime + 1); hour++) {
      console.log('Hours elapsed: ' + this.cookiesSoldToday.length);
      this.cookiesSoldToday[hour - this.storeOpeningTime] = Math.ceil(this.randomCustomers() * this.avgCookiesPerSale); // use Math.ceil to round up, since nobody buys a fraction of a cookie
      console.log('At ' + hour + ':00, ' + this.cookiesSoldToday[hour - this.storeOpeningTime] + ' cookies were sold.');
      console.log(this.cookiesSoldToday);
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
  cookiesSoldToday: [],
  // Generate a random number of customers based on minimum & maximum customers per hour
  randomCustomers: function() {
    var result = Math.floor(Math.random() * (this.maxHourlyCustomers + this.minHourlyCustomers) + this.minHourlyCustomers);
    console.log('Customers this hour: ' + result);
    return result;
  },
  checkCookieSales: function() {
    // Check each hour for how many cookies were sold
    for (var hour = this.storeOpeningTime; hour < (this.storeClosingTime + 1); hour++) {
      console.log('Hours elapsed: ' + this.cookiesSoldToday.length);
      this.cookiesSoldToday[hour - this.storeOpeningTime] = Math.ceil(this.randomCustomers() * this.avgCookiesPerSale); // use Math.ceil to round up, since nobody buys a fraction of a cookie
      console.log('At ' + hour + ':00, ' + this.cookiesSoldToday[hour - this.storeOpeningTime] + ' cookies were sold.');
      console.log(this.cookiesSoldToday);
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
  cookiesSoldToday: [],
  // Generate a random number of customers based on minimum & maximum customers per hour
  randomCustomers: function() {
    var result = Math.floor(Math.random() * (this.maxHourlyCustomers + this.minHourlyCustomers) + this.minHourlyCustomers);
    console.log('Customers this hour: ' + result);
    return result;
  },
  checkCookieSales: function() {
    // Check each hour for how many cookies were sold
    for (var hour = this.storeOpeningTime; hour < (this.storeClosingTime + 1); hour++) {
      console.log('Hours elapsed: ' + this.cookiesSoldToday.length);
      this.cookiesSoldToday[hour - this.storeOpeningTime] = Math.ceil(this.randomCustomers() * this.avgCookiesPerSale); // use Math.ceil to round up, since nobody buys a fraction of a cookie
      console.log('At ' + hour + ':00, ' + this.cookiesSoldToday[hour - this.storeOpeningTime] + ' cookies were sold.');
      console.log(this.cookiesSoldToday);
    }
  }
};

var storesList = [store1, store2, store3, store4, store5];
var dailyReport = document.getElementById('daily_sales');
console.log(dailyReport);
for (var i = 0; i < storesList.length; i++) {
  storesList[i].checkCookieSales();
  // create a new <p> element
  var pElement = document.createElement('p');
  // assign class attribute of "store_location" to the element
  pElement.setAttribute('class', 'store_location');
  // set text content of element to the location of the store
  pElement.textContent = storesList[i].location;
  dailyReport.appendChild(pElement);
  // for (var j = 0; i < storesList[i].cookiesSoldToday.length; i++) {
  //   storesList[i].cookiesSoldToday[j]
  // }
}
