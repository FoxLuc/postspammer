import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postspammer';

  articles = new Array<string>(); //array di stringhe

  onClick(testo : HTMLInputElement, numero : HTMLInputElement) : boolean
  {
    let frase: string = testo.value; //prendo il valore dalla prima textbox
    let num: number = Number(numero.value); //prendo il valore dalla seconda textbox

    console.log(`dati ricevuti ${frase} - ${num}`);
    console.log("dati ricevuti" + frase + "-" + num);

    for (let index = 0; index < num; index++) {
      this.articles.push(frase);

    }

    return false;
  }
}
