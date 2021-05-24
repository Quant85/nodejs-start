const fs = require('fs');


const readble = fs.createReadStream('f1.txt',
{ encoding : 'utf8', highWaterMark : 16 });

// readble.on('data', dati => {
//   console.log(dati +'...');
// }); 

// fs.stat('f1.txt', (err, stats) => {
//   if(err) throw err;
//   console.log(stats);
// });

// ╰─➤  node app.js                                                                           1 ↵
// Stats {
//   dev: 2082,
//   mode: 33188,
//   nlink: 1,
//   uid: 1000,
//   gid: 1000,
//   rdev: 0,
//   blksize: 4096,
//   ino: 14680089,
//   size: 177,
//   blocks: 8,
//   atimeMs: 1621676281820.574,
//   mtimeMs: 1621676276017.3445,
//   ctimeMs: 1621676276017.3445,
//   birthtimeMs: 1621676172129.3655, //Date - possiamo usare tutti i suoi metodi
//   atime: 2021-05-22T09:38:01.821Z,
//   mtime: 2021-05-22T09:37:56.017Z,
//   ctime: 2021-05-22T09:37:56.017Z,
//   birthtime: 2021-05-22T09:36:12.129Z
// }


// fs.stat('f1.txt', (err, stats) => {
//   if(err) throw err;
//   console.log(stats.birthtime.toLocaleDateString());
//   console.log(stats.birthtime.toLocaleTimeString());
// });

// ╰─➤  node app.js
// 22/5/2021
// 11:36:12

//Metodo con promisis

async function getInfoFile(file) {
  const stats = await fs.promises.stat(file);
  console.log(stats.size); //per conoscerela dimensione del file
}

getInfoFile('f1.txt').catch(err => console.log(err))

//.catch mi permette di gestire una eventuale eccezione


//----Elencare il contenuto di una cartella

// fs.readdir('.',(err, files) => {
//   if(err) throw err;
//   console.log(files);
// });

// Una soluzione più avanzata è utilizzare opendir

async function elencaElementiCartella(cartella) {
  const dir = await fs.promises.opendir(cartella);
  //console.log(dir);
  //possiamo leggere gli elementi ocn il metodo read

  //console.log(await dir.read()); // ritorna una promises quindi va usato await - tuttavia in questo modo è restituito solo il primo elemento della cartella

  // Reiteriamo per avere tutti gli elementi della cartella

  for await( const item of dir ) {
    //console.log(item);
    console.log(item.name, item.isFile(), item.isDirectory());
  }
};

elencaElementiCartella('.').catch(err => console.log(err));


//╰─➤  node app.js
// Dir {
//   [Symbol(kDirHandle)]: DirHandle {},
//   [Symbol(kDirBufferedEntries)]: [],
//   [Symbol(kDirPath)]: '.',
//   [Symbol(kDirClosed)]: false,
//   [Symbol(kDirOperationQueue)]: null,
//   [Symbol(kDirOptions)]: { bufferSize: 32, encoding: 'utf8' },
//   [Symbol(kDirReadPromisified)]: [Function: bound [kDirReadImpl]],
//   [Symbol(kDirClosePromisified)]: [Function: bound close]
// }

//╰─➤  node app.js
//Dirent { name: 'app.js', [Symbol(type)]: 1 }

// Per ottenere tutti gli elementi nella cartella dobbiamo reiterare.

//╰─➤  node app.js
// Dirent { name: 'app.js', [Symbol(type)]: 1 }
// Dirent { name: 'f1.txt', [Symbol(type)]: 1 }


// ╰─➤  node app.js
// c1 false true
// app.js true false
// f1.txt true false