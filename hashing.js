function hash(string, dictionary = 'acdfgilmnoprstuw', salt = 23, min_value = 7){
  var result = min_value;
  for(var i = 0; i < string.length; i++) {
        var index = dictionary.indexOf(string[i]);
        if(index == -1) {
              result = -1;
              break;
        }
        result = (result * salt + index);
  }
  if(result == -1) {
        return "The word should only contain letters in " + dictionary;
  }
  return result;
}


function unHash(hash, dictionary = 'acdfgilmnoprstuw', salt = 23, min_value = 7) {
  var output = [];
  while ( hash > min_value ) {
      for (var i = 0; i < dictionary.length; i++) {
          if ( ( (hash - i) % salt) === 0 ) {
              output.push(dictionary[i]);
              hash = (hash - i) / salt;
              break;
          }
      }
  }
  return output.reverse().join('');
}


var response =  hash('tortilla');
console.log(response);

var response =  unHash(593846452632);
console.log(response);

console.log("tortilla" == unHash(hash("tortilla")));

