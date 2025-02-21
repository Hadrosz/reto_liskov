import { Empleado } from "./empleado";

export class Contratista extends Empleado {
  facturaEnviada: boolean = false;

  constructor(id: number, nombre: string, salario: number) {
    super(id, nombre, salario);
  }

  enviarFactura(): void {
    this.facturaEnviada = true;
  }

  procesarPago(): string {
    throw Error("Al contratista no se le puede procesar el pago")
  }

  override calcularImpuestos(): number {
    return this.salario * 0.05;
  }
}
