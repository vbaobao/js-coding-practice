/*
 * output: int, return max profit
 * input: array of days of prices
 * constraint: cannot sell before buying
 * edge: if no profit no matter what, return 0;
 */

let maxProfit = function(prices) {
  // find the lowest price
  // values after, find the highest value
  // to save an extra iteration, save minPrice
  // keep comparing price with current position
  // substract current positions price from min.
  // store the higher profit number
  
  let minPrice = null;
  let profit = 0;
  for (const price of prices) {
    if (minPrice === null || minPrice > price) {
      minPrice = price;
    }
    if (price - minPrice > profit) profit = price - minPrice;
  }
  return profit;    
};