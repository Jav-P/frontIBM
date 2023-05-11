import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Primero } from 'src/app/models/model/model';
import { BackinfoService } from 'src/app/services/backinfo.service';
import { InfoInterService } from 'src/app/services/info-inter.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {

  uno= new Primero();

  constructor(public info:InfoInterService, private router:Router, private back:BackinfoService) { }
  ngOnInit(): void {
  }

  guardar(forms:any){
    this.info.nombre=forms.nombre+" "+forms.apellido
    this.info.telefono=forms.telefono
    this.info.fuente=forms.fuente

    this.uno.nombre=forms.nombre
    this.uno.apellido=forms.apellido
    this.uno.telefono=forms.telefono
    this.uno.fuente=forms.fuente
    this.uno.contactoRealizado=forms.contacto
    this.uno.entrevistaConcretada=forms.entrevista
    console.log(this.uno);
    this.back.postPrimero(this.uno).subscribe(res => {
      console.log(res);      
    })
    if (forms.contacto==="Si" && forms.entrevista==="Si") {
      this.router.navigate(['/dos']);
    }    
  }

}
