// add solution here
function theBeatlesPlay(musicians, instruments){
  var result = [];
  for(var counter = 0; counter < musicians.length; counter++){
    result.push(`${musicians[counter]} plays ${instruments[counter]}`);
  }
  return result;
}