import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Task } from './../models/task';
import { Registro } from './../models/registro';
import { User } from './../models/user';
import { map, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private api = 'https://jsonplaceholder.typicode.com'; 

  constructor(
  	private http: HttpClient) { }


  getAllTasks() {
  const path = "http://127.0.0.1:1880/Users";
  return this.http.get<User[]>(path);
}

getuno(email:string){
  const path='http://127.0.0.1:1880/myn?email='+email;
  return this.http.get<User[]>(path);
}

	
getTask(id: string) {
  const path = `https://jsonplaceholder.typicode.com/todos/${id}`;
  return this.http.get<Task>(path);
}

getUs(id: string) {
    return this.http.get(`http://127.0.0.1:1880/Users/${id}`)
      .pipe(map((res: any) => <User[]>res));
  }

updateTask(task: Registro) {
  const path = `${'http://127.0.0.1:1880'}/register?id=${task.id}&NFC_id=${task.NFC_id}&nombre=${task.nombre}&apellido=${task.apellido}&email=${task.email}&password=${task.password}`;
  return this.http.put<Registro>(path, task);
} 

}
