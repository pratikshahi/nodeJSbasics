//jshint esversion:6      
//to stop warning from jshint telling it we are using newer version ES6

const fs = require('fs');
fs.copyFileSync("file1.txt","file2.txt");      //create new file and copy content of existing file to it