const path = require('node:path') ;

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__dirname))
console.log(path.basename(__filename))

console.log(path.extname(__dirname)) // No extensions
console.log(path.extname(__filename))

console.log(path.parse(__dirname))
console.log(path.parse(__dirname).name)

console.log(path.parse(__filename))
console.log(path.parse(__filename).name)

console.log(path.format(path.parse(__filename))) ;

console.log(path.isAbsolute(__filename)) ;
console.log(path.isAbsolute('../basicPractise/data.json')) ;


//Joining all path
console.log('');
console.log('');
console.log('Joining Paths');
console.log('');
console.log('');


console.log(path.join('folder1','folder2','index.html'));//Not Absolute
console.log(path.join('/folder1','folder2','index.html'));  //Absolute
console.log(path.join('/folder1','//folder2','index.html'));//Absolute
console.log(path.join('/folder1','//folder2','../index.html')); // Absolute
console.log(path.join(__dirname , '../basicPractise/data.json')); // Absolute


console.log('');
console.log('Resolve');
console.log('');
console.log(path.resolve('folder1','folder2','index.html'));  //Absolute
console.log(path.resolve('/folder1','folder2','index.html'));  //Absolute
console.log(path.resolve('/folder1','/folder2','index.html'));  //Absolute
console.log(path.resolve('/folder1','/folder2','../index.html'));  //Absolute
console.log(path.resolve(__dirname ,'../basicPractise', 'data.json'));  //Absolute
console.log(path.resolve(__dirname ,'../basicPractise/data.json'));  //Absolute
console.log(path.resolve('../basicPractise/data.json'));  //Absolute

