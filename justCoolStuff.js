// ---------------------------------------------------------------------------
// Codecademy Front-End Engineer Career Path - Challenge: justCoolStuff()
// ---------------------------------------------------------------------------

// Initiates input arrays

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

// Compares two arrays of strings and returns an array with the items that are present in both arrays

function justCoolStuff(coolStuff, myStuff) {
  newArray = filteredKeywords = coolStuff.filter((word) => myStuff.includes(word));
  return newArray;
}

// Logs new array to console

console.log(justCoolStuff(myStuff, coolStuff));

