const fs = require('fs');

const readdirp = require('readdirp');


// Other options.
readdirp('test', {
  fileFilter: '*.js',
  directoryFilter: ['!.git', '!*modules'],
  type: 'files_directories',
  depth: 1
});

const filtri = {
  fileFilter: ['!.*', '!*.json'],// abbiamo escluso tutti i file con estensione .json ed i file nascosti
  directoryFilter: ['!*modules','!c1'],//abbiamo escluso le directory con modules e c1
  alwaysStat: true
}


readdirp('.', filtri)
  .on('data', (entry) => {
    const {path, stats: {size}} = entry;
    console.log(path, size);
  })
  .on('end', () => console.log('done'));



//   ╰─➤  node app.js
// app.js 493
// f1.txt 0
// done


// Monitorare i cambiamenti di un processo / file system test watch