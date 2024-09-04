import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public mostrar: boolean = false;
  public mostrarAlert: boolean = false;
  public botonesAlert = ["Sí","Cancel"]

  public botones = [
    {
      text:"Delete",
      icon:"trash",
      //?se pueden agregar eventos directamente al objeto
      handler: () =>(
        //?para poder llamar propiedades y metodos dentro de la misma clase de utiliza el this.
        this.setAlert(true)
      )
    },
    {
      text:"Save",
      icon:"save",
    },
    {
      text:"Cancel",
      icon:"close",
    }
  ];

  constructor() {}
  
  //? set action es cambiar acción
  setAction(estado: boolean){
    //alert("Hola, has abrido algo");
    //*ion action sheet es una acción que se va ejecutar con opciones
    this.mostrar = estado;
  }
  setAlert(estado: boolean){
    this.mostrarAlert = estado;
  }

}
