# Application requirements
* Daily Sales Projections (_Calculate the number of cookies needed at each location per day_)
  * **Name:** `sales.html`
  * **Purpose:** This is in order to manage supplies inventory, and manage baking schedule
  * Number of cookies to make depends upon hours of operation
  * Hours for each location are 6:00 AM to 8:00 PM
  * Location unique properties:
    * Minimum customers per hour
    * Maximum customers per hour
    * Average cookies purchased per customer
* (_Eventually_) We need the ability to add & remove locations from the daily projection report
* (_Eventually_) We need the ability to modify input numbers for each location based on day of week, special events, and other factors

  #### Store object properties:
  * Minimum hourly customers (number)
  * Maximum hourly customers (number)
  * Average cookies per customer
  * Cookies sold per hour (array containing numbers provided by hourly method)

  #### Store object methods:
  * Generate a random number of customers per hour (based upon min & max provided)
  * Calculate & store simulated amounts of cookies per hour at each location using average cookies per customer & random # of customers generated
  * Store results for each location in a separate array
  * Display values of each array as unordered lists (`<ul>`) in the browser
  * Output of each location should look like:  
  1st & Pike
    * 6am: 16 cookies
    * 7am: 20 cookies
    * 8am: 35 cookies
    * _etc._
  * Display this on `sales.html`

  ##### Starting values:
  1st & Pike:
    * 23 min cust. per hour (CPH)
    * 65 max cust. per hour (CPH)
    * 6.3 average cookies per customer (CPC)
  SeaTac Airport:
    * 3 CPH
    * 24 CPH
    * 1.2 CPC
  Seattle Center:
    * 11 CPH
    * 38 CPH
    * 3.7 CPC
  Capital Hill:
    * 20 CPH
    * 38 CPH
    * 2.3 CPC
  Alki:
    * 2 CPH
    * 16 CPH
    * 4.6 CPC

# Aesthetic design requirements
  * Output from the report should be nicely formatted in a web application
  * Use the fish logo image provided by Pat (client)
  * Choose a color scheme
  * Choose fonts to be used
  * Possible additional images for a public-facing webpage

# Public-facing webpage
* **Name:** `index.html`
* Use custom Google font for highlights
* Use specific standard sans-serif font for data
* Use specific standard serif font for text
* Specified different font colors for each font usage
* Background color for default page background (ensure readability with font color choices)
* A different back-ground color for boxes & tables (maintain readability)
* Any additional design choices. Don't sacrifice clarity & consistency.
* Include business locations, hours, contact information, text about the business - What is meaningful to a customer?
