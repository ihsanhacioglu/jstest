// test base degisiklik
// test 23.02.2016
//using chainedmethods
//zincirleme metod kullanımı
function reverseStr(s) {
  return s.split('').reverse().join('');
}
// test base degisiklik 2
 
//fast method using for loop
// dene 1.0 da değişklik
// dene 1.0 da 2. değişklik
function reverseStr(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
}
 
//fast method using while loop (faster with long strings in some browsers when compared with for loop)
function reverseStr(s) {
  var i = s.length, o = '';
  while (i--) o += s[i];
  return o;
}
