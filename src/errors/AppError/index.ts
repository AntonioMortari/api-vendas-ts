

class AppError extends Error {

    private statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message)
        this.statusCode = statusCode
    }

    public getStatusCode() {
        return this.statusCode;
    }
}

export { AppError };