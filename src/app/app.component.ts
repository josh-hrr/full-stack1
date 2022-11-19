import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-udemy';

  listaDeCursos:String[] = ["Javascrip", "Java", "Python", "API Testing", "Automation"];
  constructor() { 
    testing();
  } 

}

function testing(){
  let test:string[] = ["a", "b", "c"];

  for(let t of test){
    console.log(t);
  }
}

