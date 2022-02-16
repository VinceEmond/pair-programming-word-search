// wordsearch.js

const wordSearch = (lettersGrid, searchWord) => {
  if (lettersGrid.length === 0) {
    return false;
  }
    
  const wordsFromRowAr = lettersGrid.map(letters => letters.join(''));
 
  // Searching horizontal rows for word
  for (const word of wordsFromRowAr) {
    if (word.includes(searchWord)) {
      return true;
    }
  }
 
  for (let x = 0; x < lettersGrid.length; x++) {
    let verticalWordAr = [];
    let verticalWordStr = "";
    for (let y = 0; y < lettersGrid[0].length; y++) {
      verticalWordAr.push(lettersGrid[y][x]);
      verticalWordStr = verticalWordAr.join("");
    }
 
    if (searchWord === verticalWordStr) {
      return true;
    }
  }
 
  return false;
};
  
module.exports = wordSearch;
 
 