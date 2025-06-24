export class Email {
  private readonly value: string;

  constructor(value: string) {
    if (!this.validateEmail(value)) {
      throw new Error('Invalid email format');
    }
    this.value = value;
  }

  private validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  getValue(): string {
    return this.value;
  }
}