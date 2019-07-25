import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController, NavController , MenuController} from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-sub',
  templateUrl: './sub.page.html',
  styleUrls: ['./sub.page.scss'],
})
export class SubPage implements OnInit {
	mensaje:any;
  register:any;

  constructor(
  	private authService: AuthService,
    private navCtrl: NavController) { }

  ngOnInit() {
  }
  registro(form){
    this.newRegister(form.value.NFC_id,form.value.nombre,form.value.apellido,form.value.email,form.value.password);
    console.log(form.value);
    console.log("omares gay");
  }


  private async newRegister(NFC_id,nombre, apellido, email, password){
    this.mensaje="?NFC_id="+NFC_id+"&nombre="+nombre+"&apellido="+apellido+"&email="+email+"&password="+password;
    console.log(this.mensaje);
    this.authService.holi(this.mensaje).subscribe( res=>{
      this.register = res;
      console.log(this.register);
      console.log("camilo es gay");
    }, err =>{
      this.register=[];
      console.log("nicolas es gay");
    });
  }

}
