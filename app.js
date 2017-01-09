'use strict';

var store1 = {
  location: '1st & Pike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  storeOpeningTime: 6,
  storeClosingTime: 20,
  cookiesSoldHourly: [],
  // Generate a random number of customers based on minimum & maximum customers per hour
  randomCustomers: function() {
    var result = Math.floor(Math.random() * (this.maxHourlyCustomers + this.minHourlyCustomers) + this.minHourlyCustomers);
    console.log('Customers this hour: ' + result);
    return result;
  },
  hourlyCookieSales: function() {
    // Check each hour for how many cookies were sold
    for (var hour = this.storeOpeningTime; hour < (this.storeClosingTime + 1); hour++) {
      console.log('Hours elapsed: ' + this.cookiesSoldHourly.length);
      this.cookiesSoldHourly[hour - this.storeOpeningTime] = Math.ceil(this.randomCustomers() * this.avgCookiesPerCustomer); // use Math.ceil since nobody buys a fraction of a cookie
      console.log('At ' + hour + ':00, ' + this.cookiesSoldHourly[hour - this.storeOpeningTime] + ' cookies were sold.');
      console.log(this.cookiesSoldHourly);
    }
  }
};
store1.hourlyCookieSales();
