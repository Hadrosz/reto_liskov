import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NominaService } from '../services/nomina.service';
import { Empleado, Contratista } from '../models/empleado';

@Component({
  selector: 'app-nomina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.css'],
})
export class NominaComponent implements OnInit {
  private nominaService = inject(NominaService);
  empleados: Empleado[] = [];
  pagos: string[] = [];
  impuestos: string[] = [];

  ngOnInit(): void {
    this.empleados = this.nominaService.obtenerEmpleados();
    this.impuestos = this.nominaService.calcularImpuestos();
  }

  procesarNomina(): void {
    this.pagos = this.nominaService.procesarPagos();
  }

  registrarFactura(id: number): void {
    this.nominaService.registrarFacturaContratista(id);
    this.pagos = [];
  }

  esContratista(empleado: Empleado): boolean {
    return empleado instanceof Contratista;
  }
}
