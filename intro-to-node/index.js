
const fs = require('fs');

// Usiamno un metodo di esempio molto semplice fs.copyFileSync(src,dest[,flags])
// richiameremo il metodo, fscopyFyleSync, passeremo un primo parametro 'src' che è l'origine e poi un secondo 'dest' che è la destinazione

fs.copyFileSync('file1.txt','file2.txt'); // in questo modo sta cercando nella directory corrente corrente, in questo caso in intro-to-node, e lo copierà con la destinazione e nome assegnato