import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

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

  constructor() { }

  ngOnInit(): void {
  }

}
