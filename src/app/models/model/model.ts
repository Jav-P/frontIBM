export class Prospecto {
  id:number;
  nombre:string;
  telefono:number;
  tipoEntrevista:string;
  fechaRevision:string;
  edad:number;
  estadoCivil:string;
  hijos:number;
  edades:number;
  ingresos:number;
  actividadEconomica:string;
  fuentesProspecto:string;
  correo:string;
  constructor(){
      this.id=0;
      this.nombre="";
      this.telefono=0;
      this.tipoEntrevista="";
      this.fechaRevision="";
      this.edad=0;
      this.estadoCivil="";
      this.hijos=0;
      this.edades=0;
      this.ingresos=0;
      this.actividadEconomica="";
      this.fuentesProspecto="";
      this.correo="";
  }
}
export class Primero {
  id:number;
  nombre:string;
  apellido:string;
  telefono:number;
  fuente:string;
  contactoRealizado:string;
  entrevistaConcretada:string;
  constructor(){
      this.id=0;
      this.nombre="";
      this.apellido="";
      this.telefono=0;
      this.fuente="";
      this.contactoRealizado="";
      this.entrevistaConcretada="";
      
  }
}

export interface MensajePrimero {
  Primero: Primero[];
}
export interface MensajeProspecto {
  Prospecto: Prospecto[];
}
