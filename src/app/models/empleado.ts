export abstract class Empleado {
  constructor(public id: number, public nombre: string, public salario: number) {}

  calcularImpuestos(): number {
    return this.salario * 0.1; // Default 10% tax
  }

  abstract procesarPago(): string;
}
