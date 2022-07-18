function knapsack(weightCap, weights, values) {
  // Write your code here
  var len = weights.length;
  if (len === 0) {
    return 0;
  }

  var total = 0;    // current weight of items carried
  var best = 0;
  for (var k = 0; k < len; k++) {
    // k is the lowest index of the items taken
    if (weights[k] > weightCap) {
      continue;
    }
    var rem = knapsack(weightCap - weights[k],
                        weights.slice(k + 1),
                        values.slice(k + 1));
    total = values[k] + rem;
    if (total > best) {
        best = total;
    }
  }

  return best;
};

// Use this to test your function:
const weightCap = 13;
const weights = [1, 5, 3, 6, 8];
const val = [20, 50, 50, 60, 100];
console.log(knapsack(weightCap, weights, val));

// Leave this so we can test your code:
module.exports = knapsack;
