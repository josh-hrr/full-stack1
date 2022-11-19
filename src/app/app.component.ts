import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-udemy';

  listaDeCursos:String[] = ["Javascrip", "Java", "Python", "API Testing", "Automation"];
  enable:boolean = true;

  constructor() { 
    testing();
  } 

}

function testing(){
  let test:string[] = ["a", "b", "c"];

  for(let t of test){
    console.log(t);
  }

  let test2 = true;


  test2 = (test2 == true) ? true : false;
  console.log(test2);
}

