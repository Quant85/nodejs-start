
//Controllo autenticazione
function userAuth(req,res,next) { 
  const isLogged = true; // false - non loggato, true loggato
  if(!isLogged) return res.status(401).send('Non sei autenticato\n'); 
  //termina il ciclo
  //modificare l'oggeto req o res ci permette di passare delle informazioni da una funzione middleware ad un'altra
  req.user = { nome: 'Sara', tipo: 'Premium' }; // informazione passata all'altra funzione middleware - Premium
  next();
}

//Controllo autorizzazione
function userPerms(req,res,next) { 
  const isAutorizzato = req.user.tipo === 'Premium'? true : false;
  if(!isAutorizzato) return res.status(403).send('Non sei autorizzato\n');
  next();
}

module.exports = {
  userAuth,
  userPerms
}