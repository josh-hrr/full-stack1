import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators'; 
import { Observable } from 'rxjs'; 

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    { 
      id: 1,
      nombre: 'Andres', 
      apellido: 'Guzman',
      email: 'profesor@test.com',
      createdAt: '2017-12-11'
    },
    { 
      id: 2,
      nombre: 'Test2', 
      apellido: 'ApellidoTest2',
      email: 'test2@test.com',
      createdAt: '2017-12-12'
    }
  ];

  clientesTest: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void { 
    this.searchClientes();
  }

  searchClientes(){ 
    this.searchClientesService().subscribe(
      (response:any) => {
        this.clientesTest = response 
        console.log(this.clientesTest)
      }
    )   
  }

  searchClientesService():Observable<any>{
    return this.http.get<any>("http://localhost:3131/api/v1/clientes").pipe(catchError( e => "error"))
  }

}
