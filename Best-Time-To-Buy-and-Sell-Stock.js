/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfitSolution1 = (prices) => {
  let buyPrice = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    let currentProfit = 0;

    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
    } else {
      currentProfit = prices[i] - buyPrice;
      profit = Math.max(profit, currentProfit);
    }
  }

  return profit;
};

const maxProfitSolution2 = (prices) => {
  let minPrice = prices[0]
  let maxProfit = 0

  for (const price of prices) {
    minPrice = Math.min(minPrice, price)

    const profit = price - minPrice
    maxProfit = Math.max(maxProfit, profit)
  }

  return maxProfit
}

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfitSolution1(prices));
console.log(maxProfitSolution2(prices));
