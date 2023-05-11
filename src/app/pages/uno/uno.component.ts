import { Component, OnInit } from '@angular/core';
import { InfoInterService } from 'src/app/services/info-inter.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {

  constructor(public info:InfoInterService) { }

  ngOnInit(): void {
  }

  guardar(forms:any){
    this.info.nombre=forms.nombre+" "+forms.apellido
    this.info.telefono=forms.telefono
    this.info.fuente=forms.fuente
      
  }

}
