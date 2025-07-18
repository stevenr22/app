import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css'
})
export class MyButton {
  @Input() type: string = "";
  @Input() id: string = "";
  @Input() buttonText: string = "";

  @Input() variant: "verde" | "rojo" | "gris" | "azul" = "verde"; //colores predefinidos
  get buttonClass(): string{
    //variable que almacenara la clase dependiendo de la clase que le reciba o mas bien el color
    let variantesClases = "";
    switch(this.variant){
      case "verde":
        variantesClases = "bg-green-500 hover:bg-green-600 text-white";
        break;
      case "azul":
        variantesClases = "bg-blue-500 hover:bg-blue-600 text-white";
        break;
      case "rojo":
        variantesClases = "bg-red-500 hover:bg-red-600 text-white";
        break;
      case "gris":
        variantesClases = "bg-gray-300 hover:bg-gray-400 text-black";
        break;
      default:
        variantesClases = "bg-gray-500 text-white";

    }
      //return un string con las clases fijas y las variantes contruidas dinamicamente
      return `w-full rounded-lg py-3 px-4 font-semibold transition-all ${variantesClases}`;
  }

}
