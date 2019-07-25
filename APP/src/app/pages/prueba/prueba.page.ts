import { TaskService } from '../../services/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  public email_mio="nigarciara@unal.edu.co";
  constructor(
  	private taskService: TaskService
) { }
 
  ngOnInit() {
  }
  getAllTasks() {
  this.taskService.getAllTasks()
  .subscribe(todos => {
    console.log(todos);
  });
  }

  getTask() {
  this.taskService.getTask('1')
  .subscribe(todo => {
    console.log(todo);
  });
}

	getmolina(){
		this.taskService.getUs('1').subscribe(todos =>{
			console.log(todos);
		});
	}

  un_user(){
    this.taskService.getuno('nigarciara@unal.edu.co').subscribe(my_con =>{
      console.log(my_con);
    });
  }
  /*updateTask() {
  const task = {
    id: '1',
    userId: '1',
    title: 'change title',
    completed: true
  };
  this.taskService.updateTask(task)
  .subscribe(todo => {
    console.log(todo);
  });
}*/


 getomar(){
  const omitar = {
    id: '4',
    NFC_id:'aaaaaaaaaa',
    nombre:'omar',
    apellido:'lopez',
    email:'o@unal.edu.co',
    password:'omar123'
  };
this.taskService.updateTask(omitar).subscribe(abc=>{
  console.log(abc);
});
}
}
