function capturingRainwater(heights) {
  // Write your code here
  var len = heights.length;
  var maxHeight;
  var pos = 1;
  var volume = 0;
  var maxIndex = 0; // index of max value
  while (pos < len) {
    if (heights[pos] > heights[pos - 1]) {
      // There is possible rainwater.
      // Look back for the next higher height.
      maxHeight = heights[pos-1];
      var k;
      for (k = pos - 2;
            (k >= maxIndex)
               && (heights[k + 1] < heights[pos]);
            k--) {
              if (heights[k] > maxHeight) {
                maxHeight = heights[k];
                if (maxHeight > heights[pos]) {
                  maxHeight = heights[pos];
                }
                for (var j = pos - 1; j > k; j--) {
                  volume += (maxHeight - heights[j]);
                  heights[j] = maxHeight;
                }
              }
            }
    }
    pos++;
  }
  return volume;
}

const testArray = [1,4,2,8,5,7];
console.log(capturingRainwater(testArray));

// Leave this so that we can test your code:
module.exports = capturingRainwater;
