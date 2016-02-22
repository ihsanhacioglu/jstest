
// ihsan (w) test 2
// ihsan (w) test 1
// canan altun tar. fork yapıldı..

var stringA = "tacoloco"
  , stringB = "co"
  , q1, q2, q2multi, m
  , q2matches = []
 
// stringA starts with stringB
// stringA, stringB ile başlıyor
q1 = stringA.substring(0, stringB.length) == stringB
 
// stringA, stringB i içeriyor
q2  = stringA.indexOf(stringB)
 
// multiple matches
// çoklu karşlaştırma
q2multi = new RegExp(stringB,'g')
 
while(m = q2multi.exec(stringA)){
	q2matches.push(m.index)
}
 
// stringA,  stringB ile bitiyor
q3 = stringA.substr(-stringB.length) == stringB
 
console.log("1: Does '"+stringA+"' start with '"+stringB+"'? " + ( q1 ? "Yes." : "No."))
console.log("2: Is '"+stringB+"' contained in '"+stringA+"'? " + (~q2 ? "Yes, at index "+q2+"." : "No."))
if (~q2 && q2matches.length > 1){
	console.log("   In fact, it happens "+q2matches.length+" times within '"+stringA+"', at index"+(q2matches.length > 1 ? "es" : "")+" "+q2matches.join(', ')+".")
}

console.log("3: Does '"+stringA+"' end with '"+stringB+"'? "   + ( q3 ? "Yes." : "No."))
