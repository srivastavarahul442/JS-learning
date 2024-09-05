var plusOne = function(digits) {

    let flag = digits.length - 1;
    
      for (let i = digits.length - 1; i >= 0; i--) {
    
        if (digits[i] == 9) {
          digits[flag] = 1;
          digits[flag + 1] = 0;
          flag = flag - 1;
        } else {
          if (flag == digits.length - 1) {
            digits[i] = digits[i] + 1;
            return digits;
          } else {
            digits[flag] = digits[flag] + 1;
            digits.splice(flag+1,1)
            return digits;
          }
        }
      }
      return digits;
    }

let arr = [1,2,3, 9, 9, 9];
let result = plusOne(arr);
console.log(result);