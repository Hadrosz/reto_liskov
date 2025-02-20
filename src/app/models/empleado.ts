export abstract class Empleado {
  constructor(public id: number, public nombre: string, public salario: number) {}

  calcularImpuestos(): number {
    return this.salario * 0.1; // Default 10% tax
  }

  abstract procesarPago(): string;
}

export class EmpleadoPlanta extends Empleado {
  constructor(id: number, nombre: string, salario: number) {
    super(id, nombre, salario);
  }

  procesarPago(): string {
    const salarioNeto = this.salario - this.calcularImpuestos();
    return `Pago procesado: ${this.nombre} ha recibido $${salarioNeto} después de impuestos.`;
  }

  override calcularImpuestos(): number {
    return this.salario * 0.15;
  }
}

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

export class Contratista extends Empleado {
  facturaEnviada: boolean = false;

  constructor(id: number, nombre: string, salario: number) {
    super(id, nombre, salario);
  }

  enviarFactura(): void {
    this.facturaEnviada = true;
  }

  procesarPago(): string {
    if (this.facturaEnviada) {
      return `Factura de ${this.nombre} registrada. Pago autorizado.`;
    } else {
      return `⚠️ Factura de ${this.nombre} no registrada. Pago rechazado.`;
    }
  }

  override calcularImpuestos(): number {
    return this.salario * 0.05;
  }
}
