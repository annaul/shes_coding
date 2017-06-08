var s = '';

function isUnique(s){
 for (var i= 0; i<s.length; i++) {
   for (var j=i+1; j<s.length; j++) {
     if (s[i] === s[j]) {
       return false;
     }
   }
 }
 return true;
}
isUnique(s);

//p 90
var strA = '';
var strB = '';

function perm (strA, strB) {
  if (strA.length !== strB.length) {
    return false
  }
  for (var i = 0; i< strA.length; i++) {
    for (var j = 0; j < strB.length; j++) {
      if (strA[i] === strB[j]) {
        strA = strA.slice(0, i-1) + strA.slice(i+1, strA.length);
        strB = strB.slice(0, j-1) + strB.slice(j+1, strB.length);
      }
    }
  }
  if (strA.length === 0 && strB.length === 0) {
    return true;
  } else {
    return false;
  }
}

function isPermutation (strA, strB) {
  var strASorted = strA.split('').sort().join('');
  var strBSorted = strB.split('').sort().join('');
  console.log(strASorted, strBSorted);
  return strASorted === strBSorted;
}

// console.log(isPermutation('cato', 'act'));


function unique (str) {
  var a = '';

  for (var i = 0; i < str.length; i++) {
    a = str.charAt(i);
      str = str.replace(a, '');
    if (str.indexOf(a) !== -1) return false;
  }
  return true;
}

// console.log(unique('abcdb'));
