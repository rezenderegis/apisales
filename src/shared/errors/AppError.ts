class AppError {

    public readonly message: string;

    public readonly statusCode: number;

    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;    
    }

}

export default AppError;

/* A classe de erros está criada, agora basta criar
middleware para interceptar todos os erros e direcionar 
ao front end. 
O middleware é o responsável por interceptar. 
Com middleware não é necessário ficar utilizando  try catch.

*/