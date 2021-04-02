import { Injectable } from '@angular/core';
import { Enigme } from '../model/enigme.model';

@Injectable({
  providedIn: 'root'
})
export class EnigmeService {

  enigmeList: Enigme [] = []; 
 
  constructor() { 
    const enigme1 = new Enigme();
    enigme1.title= 'Lugdunum';
    enigme1.context= "Lugdunum (ou Lugudunum), aujourd'hui Lyon, est le nom du site gaulois où une colonie de droit romain fut fondée en -43 par Lucius Munatius Plancus, alors gouverneur de la Gaule, sous la titulature initiale de Colonia Copia Felix Munatia Lugudunum. Cette colonie, fondée à l'occasion des troubles qui suivent l'assassinat de Jules César en -44, devint la capitale des Gaules à partir -27.";
    enigme1.image ='';
    enigme1.question='Mais que signifie Lugdunum?' ;
    enigme1.answer='La ville de Lyon';
    enigme1.choiceList = [];
    this.enigmeList.push(enigme1); 
    
    const enigme2 = new Enigme();
    enigme2.title= 'Lugdunum';
    enigme2.context= "Lugdunum (ou Lugudunum), aujourd'hui Lyon, est le nom du site gaulois où une colonie de droit romain fut fondée en -43 par Lucius Munatius Plancus, alors gouverneur de la Gaule, sous la titulature initiale de Colonia Copia Felix Munatia Lugudunum. Cette colonie, fondée à l'occasion des troubles qui suivent l'assassinat de Jules César en -44, devint la capitale des Gaules à partir -27.";
    enigme2.image ='';
    enigme2.question='Mais que signifie Lugdunum?' ;
    enigme2.answer='La ville de Lyon';
    enigme2.choiceList = [
      enigme2.prop1 = 'La colline du corbeau',
      enigme2.prop2 = 'La ville de Lyon',
      enigme2.prop3 = 'La colline du Dieu Lug',
      enigme2.prop4 = 'La loi du Nombre',
    ];
    this.enigmeList.push(enigme2);
  }
}
