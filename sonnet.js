
// 2
var sonnet= document.getElementById("sonnet");
var sonnetInner = sonnet.innerHTML;
console.log("2:", sonnetInner);

// 3
		console.log("3:", sonnetInner.indexOf("orphans") );



// 4
		console.log("4:", sonnetInner.length );

// 5
var winter= sonnetInner.replace("winter", "yuletide");
console.log("5:", winter);
sonnetInner=winter;

// 6

var large= sonnetInner.replace(/the |The /g, "a large ");
console.log("6:", large);

// 7
sonnet.innerHTML= "7: " +large;