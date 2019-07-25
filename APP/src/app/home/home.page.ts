import { Component } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { RegisterPage } from '../pages/auth/register/register.page';
import { LoginPage } from '../pages/auth/login/login.page';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    
  }
  async register() {
    const registerModal = await this.modalController.create({
      component: RegisterPage
    });
    console.log("presiono register");
    return await registerModal.present();
  }
  async login() {
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }
}
