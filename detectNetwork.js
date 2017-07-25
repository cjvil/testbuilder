// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  if (cardNumber.length === 14 && (cardNumber.substring(0, 2) === '38' || cardNumber.substring(0, 2) === '39')) {
  	return 'Diner\'s Club';
  } else if (cardNumber.length === 15 && (cardNumber.substring(0, 2) === '34' || cardNumber.substring(0, 2) === '37')) {
  	return 'American Express';
  } else if (cardNumber.charAt(0) === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
  	return 'Visa';
  } else if ( (parseInt(cardNumber.substring(0, 2)) <= 55 && parseInt(cardNumber.substring(0, 2)) >= 51) && (cardNumber.length === 16) ) {
  	return 'MasterCard';
  }


};
