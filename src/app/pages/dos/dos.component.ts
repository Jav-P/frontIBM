import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prospecto } from 'src/app/models/model/model';
import { BackinfoService } from 'src/app/services/backinfo.service';
import { InfoInterService } from 'src/app/services/info-inter.service';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent implements OnInit {

  constructor(private info:InfoInterService, private back:BackinfoService, private router:Router) { }
  prospect = new Prospecto()
  fuente:string
  nombre:string
  telefono:number
  ngOnInit(): void {
    this.fuente=this.info.fuente
    this.nombre=this.info.nombre
    this.telefono=this.info.telefono
  }

  guardar(forms:any){
    this.prospect.fuentesProspecto=this.info.fuente
    this.prospect.nombre=this.nombre
    this.prospect.telefono=this.telefono

    this.prospect.tipoEntrevista=forms.tipoEntrevista
    this.prospect.fechaRevision=forms.fecha
    this.prospect.edad=forms.edad
    this.prospect.estadoCivil=forms.estadoCivil
    this.prospect.hijos=forms.hijos
    this.prospect.edades=forms.edades
    this.prospect.ingresos=forms.ingresos
    this.prospect.actividadEconomica=forms.actividadEconomica
    this.prospect.correo=forms.email

    console.log(this.prospect);

    this.back.postProspecto(this.prospect).subscribe(res => {
      console.log(res);      
    })
    // this.back.getProspecto().subscribe(res => {
    //   console.log(res.Prospecto);      
    // })
    this.router.navigate(['']);
    
  }

}
