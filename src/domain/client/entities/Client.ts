export class Client {
    private id: number;
    private firstName: string;
    private lastName: string;
    private email: string;
    private dni: string;

    constructor(id: number, firstName: string, lastName: string, email: string, dni: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.dni = dni;
    }

    getId(): number {
        return this.id;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getEmail(): string {
        return this.email;
    }

    getDni(): string {
        return this.dni;
    }
}