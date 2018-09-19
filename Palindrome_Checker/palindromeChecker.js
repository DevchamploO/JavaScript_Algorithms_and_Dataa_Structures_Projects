function palindrome(str) {
  var reducedstr = str.toLowerCase().replace(/[\W_]/g,'');
  var reverseStr = reducedstr.split('').reverse().join('');
  
  return reducedstr === reverseStr;
}


//Replace 'eye' with another word to check for palindrome
palindrome("eye");