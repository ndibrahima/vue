var selectElementsStartingWithA = function(array) {
    return array.filter(a => a.charAt(0)=='a');
}

var selectElementsStartingWithVowel = function(array) {
}

var removeNullElements = function(array) {
    
    return array.filter(function(element){
        return element !== null;
      });
    };


var removeNullAndFalseElements = function(array) {
    return array.filter(function(element){
        return (element !== null && element !== false);
      });
    };

var reverseWordsInArray = function(array) {
    return array.map(a => a.split('').reverse().join(''));
}

var everyPossiblePair = function(aray1) {
    var ary2 = [];
  ary1.forEach(function(value, index){
    ary2.push([ary1[index], (index === (ary1.length-1) ? ary1[0] : ary1[index+1]) ].sort());
  });
  return ary2.sort();
};


var allElementsExceptFirstThree = function(array) {
    return "write your methode here!";
}


var addElementToBeginning = function(array, element) {
    array.reverse().push(element);
  return array.reverse();
};

var sortByLastLetter = function(array) {
    array.sort(function(str1, str2){
        return str1[str1.length-1] > str2[str2.length-1];
      });
      return array;
    };

var getFirstHalf = function(string) {
    var halfLength = Math.ceil(string.length / 2);
  return string.slice(0, halfLength);
};

var makeNegative = function(number) {
    return -Math.abs(number);
};

var numberOfPalindromes = function(array) {
    var pals = [];
  array.forEach(function(word){
    if (word === word.split('').reverse().join(''))
    pals.push(word);
  });
  return pals.length;
};

var shortestWord = function(array) {
    var shortest = array.sort(function(str1, str2){
        return str1.length - str2.length;
      })[0];
        return shortest;
      };

var longestWord = function(array) {
    var longest = array.sort(function(str1, str2){
        return str2.length - str1.length;
      })[0];
      return longest;
    };

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    var downCase =  string.toLowerCase().split('');
  var splitStr =  string.split('');
  var result = [];

  for (var i = 0 ; i < splitStr.length ; i++) {
    if (splitStr[i] === downCase[i])
    result.push(splitStr[i]);
  }
  return result.join('');
};

var roundUp = function(number) {
    return Math.ceil(number);
};

var formatDateNicely = function(date) {
    var day = date.getDate();
    if (day < 10) day = "0"+day;
    var month = date.getMonth()+1;
    if (month < 10) month = "0"+month;
    var year = date.getFullYear();
    return day+"/"+(month)+"/"+year;
  };

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
