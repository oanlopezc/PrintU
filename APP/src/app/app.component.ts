import { Component } from '@angular/core';

import { TaskService } from './services/task.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'contact'
    },
    {
      title: 'Reguistro',
      url: '/register',
      icon: 'contact'
    },
    {
      title: 'Mis Docuemntos',
      url: '/mydoc',
      icon: 'document'
    },
    {
      title: 'Nuevo Documento',
      url: '/newdoc',
      icon: 'add-circle-outline'
    },
    {
      title: 'Medio de Pago',
      url: '/medio',
      icon: 'cash'
    },
    {
      title: 'Ubicación',
      url: '/ubicacion',
      icon: 'map'
    },
    {
      title: '¿Cómo Usar la App?',
      url: '/comousar',
      icon: 'help'
    }
  ];

  title = 'angular-http-client';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private taskService: TaskService
  ) {
    this.initializeApp();
  }

  getAllTasks() {
  this.taskService.getAllTasks()
  .subscribe(todos => {
    console.log(todos);
  });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
