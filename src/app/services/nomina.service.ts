import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';
import { EmpleadoPlanta } from '../models/empleadoPlanta';
import { Contratista } from '../models/contratista';

@Injectable({
  providedIn: 'root',
})
export class NominaService {
  private empleados: Empleado[] = [
    new EmpleadoPlanta(1, 'Carlos Gómez', 5000),
    new EmpleadoPlanta(2, 'Laura Pérez', 4800)
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

  calcularImpuestos(): number[] {
    return this.empleados.map(
      (empleado) => empleado.calcularImpuestos()
    );
  }
}
