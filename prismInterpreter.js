console.log("prism interpreter");
console.log("BPOS Order: interpreterCache-parsedToken-RAM-output");
console.log(" ");

// BPOS ( Basic Prelaunch Output Settings )
const cacheLists = 1;
const cacheVar = 1;
const counter = 0;
const displayCurrentToken = 0;
// ..

// Variable Setup
var output = "ERROR CODE: VU5DSEFOR0VELU9VVFBVVA==";
var parsedToken = "";
var register = [];
var interpreterCache = [];
var temporaryInterpreterCache = "";
var i = -1;
var RAM = [];
//...


function syntaxDetector() {
    if (temporaryInterpreterCache == 'add' ) {
        console.log("Syntax has been found: 'add' ");
        interpreterCache = [];
        temporaryInterpreterCache = "";
        parsedToken = "add";
    } else if (temporaryInterpreterCache == 'sub' ) {
        console.log("Syntax has been found: 'sub' ");
        interpreterCache = [];
        temporaryInterpreterCache = "";
        parsedToken = "sub";
    } else {
        console.log('No syntax has been detected.')
    }
}

function EXECUTE(code) {
    console.log(" --- Execution of code has started --- ");
    console.log(" ");
    console.log("Interpreting...");
    while (i != code.length) {
        interpreterCache.push(code[i]);
        temporaryInterpreterCache = interpreterCache.join("");
        i += 1;
        console.log(interpreterCache)
        syntaxDetector();
    }
    console.log("Interpretation of code has successfully finished - Parsing...");
    if (parsedToken == "add") {
        console.log("Token has been found: 'add' ");
        RAM.push(parseInt(interpreterCache[0]));
        RAM.push(parseInt(interpreterCache[1]));
        output = RAM[0] + RAM[1]
        console.log('Parsing of code has successfully finished');
        console.log(' ');
        console.log(' --- Execution of code has successfully finished --- ');
    } else if (parsedToken == "sub") {
        console.log("Token has been found: 'sub' ");
        RAM.push(parseInt(interpreterCache[0]));
        RAM.push(parseInt(interpreterCache[1]));
        output = RAM[0] - RAM[1];
        console.log('Parsing of code has successfully finished');
        console.log(' ');
        console.log(' --- Execution of code has successfully finished --- ');
    }
    
}

EXECUTE("sub64");
if (output == 'ERROR CODE: VU5DSEFOR0VELU9VVFBVVA==') {
    console.log(' --- An error has occured:: at syntaxDetection stage --- ');
}

if (cacheVar === 1) {
    console.log(interpreterCache);
    console.log(temporaryInterpreterCache);
    console.log(parsedToken);
    console.log(RAM);
    console.log(output);
}

