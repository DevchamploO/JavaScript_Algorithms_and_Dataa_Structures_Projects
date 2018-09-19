function rot13(str) { // LBH QVQ VG!
  var encoded = str.split('');
  var alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var news = [];
  var index;
  var decoded;
  
  for(var n=0; n<encoded.length; n++){
    if((encoded[n] === '!')||(encoded[n] === '.')||(encoded[n] === '?')||(encoded[n] == ' ')){
          
          news.push(encoded[n]);
    } else {
      index = alpha.indexOf(encoded[n]);
      decoded = alpha[index+13];
      news.push(decoded);
    }
  }
  var newstr = news.join('');
  return newstr;
}


rot13("SERR CVMMN!");