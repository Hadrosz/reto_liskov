import { Injectable } from '@angular/core';
import { Empleado, EmpleadoPlanta, Contratista, EmpleadoPlantaSindicalizado } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class NominaService {
  private empleados: Empleado[] = [
    new EmpleadoPlanta(1, 'Carlos Gómez', 5000),
    new EmpleadoPlanta(2, 'Laura Pérez', 4800),
    new Contratista(3, 'Ana Ramírez', 4000),
    new EmpleadoPlantaSindicalizado(3, 'Pedro Fernández', 5200, 5)
  ];

  obtenerEmpleados(): Empleado[] {
    return [...this.empleados];
  }

  procesarPagos(): string[] {
    return this.empleados.map((empleado) => empleado.procesarPago());
  }

  registrarFacturaContratista(id: number): void {
    const empleado = this.empleados.find((e) => e.id === id && e instanceof Contratista);
    if (empleado) {
      (empleado as Contratista).enviarFactura();
    }
  }

  calcularImpuestos(): string[] {
    return this.empleados.map(
      (empleado) =>
        `Impuestos de ${empleado.nombre}: $${empleado.calcularImpuestos()}`
    );
  }
}
