
//in base al codice di errore che riceviamo andremo ad invocare un metodo specifico

class ErrorHandler extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
    this.handle();
  }

  handle() {
    switch (this.code) {
      case 400: this.badRequest(); break;
      case 404: this.notFound(); break;
      case 500: this.serverError(); break;
      default: this.message = `${this.message || 'Errore interno. Riprova'}`;
    }
  }

  badRequest() {
    `${this.message || 'Richiesta non corretta'}`
  };

  notFound() {
    `${this.message || 'Risorsa non trovata.'}`
  };

  serverError() {
    //inserisco all'interno del db l'errore avvenuto o invio email
    `${this.message || 'Errore interno al server.'}`
  };
}

module.exports = ErrorHandler;