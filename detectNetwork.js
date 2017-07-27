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
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
	// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
	// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
	// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var prefixInRange = function(min, max) {
  	return (parseInt(cardNumber.substring(0, min.toString().length)) >= min) && (parseInt(cardNumber.substring(0, min.toString().length)) <= max);
  }

  var isDiscover = function() {
  	if (![16, 19].includes(cardNumber.length)) {
  		return false;
  	}
  	if (cardNumber.substring(0, 4) === '6011' || cardNumber.substring(0, 2) === '65' || prefixInRange(644, 649)) {
  		return true;
  	}
  	return false;
	}

	var isSwitch = function() {
		var switchPrefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759']; // conflict with visa

		if(![16, 18, 19].includes(cardNumber.length)) {
			return false;
		}
		return switchPrefixes.some(function(element) {
			return cardNumber.startsWith(element);
		});
		return false;
	}

  if (cardNumber.length === 14 && prefixInRange(38, 39)) {
  	return 'Diner\'s Club';
  } else if (cardNumber.length === 15 && ['34', '37'].includes(cardNumber.substring(0, 2))) {
  	return 'American Express';
  }  else if ( prefixInRange(51, 55) && (cardNumber.length === 16) ) {
  	return 'MasterCard';
  } else if ((cardNumber.length >= 12 && cardNumber.length <= 19) && ['5018', '5020', '5038', '6304'].includes(cardNumber.substring(0, 4))) {
  	return 'Maestro';
  } else if (isDiscover()) {
  	return 'Discover';
  } else if (isSwitch()) {
  	return 'Switch';
  } else if (cardNumber.charAt(0) === '4' && [13, 16, 19].includes(cardNumber.length)) {
  	return 'Visa';
  } else if ( (prefixInRange(622126, 622925) || prefixInRange(624, 626) || prefixInRange(6282, 6288)) && (cardNumber.length >= 16 && cardNumber.length <= 19) ) {
  	return 'China UnionPay';
  }
 };
