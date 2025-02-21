import { EmpleadoPlanta } from "./empleadoPlanta";

export class EmpleadoPlantaSindicalizado extends EmpleadoPlanta {
  constructor(id: number, nombre: string, salario: number, private porcentajeSindicato: number) {
    super(id, nombre, salario);
  }

  calcularAporteSindical(): number {
    const aporte = (this.salario * this.porcentajeSindicato) / 100;
    console.log(`${this.nombre} aporta $${aporte} al sindicato.`);
    return aporte;
  }

  override procesarPago(): string {
    const aporteSindicato = this.calcularAporteSindical();
    const salarioNeto = this.salario - this.calcularImpuestos() - aporteSindicato;
    console.log(`Pago sindicalizado procesado: ${this.nombre} ha recibido $${salarioNeto} después de impuestos y aportes sindicales.`);
    return `Pago sindicalizado procesado: ${this.nombre} ha recibido $${salarioNeto}`;
  }
}
