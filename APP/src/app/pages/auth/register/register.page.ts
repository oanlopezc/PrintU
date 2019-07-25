import { Component, OnInit } from '@angular/core';
import { ModalController, NavController , MenuController} from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
//import { AlertService } from 'src/app/services/alert.service';
import { LoadingController } from '@ionic/angular';
//import { ApirestService } from 'src/app/services/apirest.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule }    from '@angular/common/http';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  mensaje:any;
  register:any;

  constructor(private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    //private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  registro(form){
    console.log(form.value);
    this.newRegister(form.value.name,form.value.apellido,form.value.email,form.value.password,form.value.NFC_id);
  }


  private async newRegister(name, apellido, email, password, NFC_id){
    this.mensaje="?NFC_id="+NFC_id+"&name="+name+"&apellido="+apellido+"&email="+email+"&password="+password;
    this.authService.holi(this.mensaje).subscribe( res=>{
      this.register = res;
      console.log(this.register);
    }, err =>{
      this.register=[];
    });
  }
  // Dismiss Register Modal
  /*dismissRegister() {
    this.modalController.dismiss();
  }

  // On Login button tap, dismiss Register modal and open login Modal
  //async loginModal() {
  //  this.dismissRegister();
  //  const loginModal = await this.modalController.create({
  //    component: LoginPage,
  //  });
  //  return await loginModal.present();
  //}

  register(form: NgForm) {
    this.authService.register(form.value.NFC_id, form.value.fName, form.value.lName, form.value.email, form.value.password).subscribe(
      data => {
        this.authService.login(form.value.email, form.value.password).subscribe(
          data => {
          },
          error => {
            console.log(error);
          },
          () => {
            this.dismissRegister();
            this.navCtrl.navigateRoot('/Home');
          }
        );
        this.alertService.presentToast(data['message']);
      },
      error => {
        console.log(error);
      },
      () => {
        
      }
    );
  }*/
}