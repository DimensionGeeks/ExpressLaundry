import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(public alertController: AlertController,public loadingController: LoadingController,private router: Router) { }

  ngOnInit() {
  }
  async onClickRegister(){
    const alert = await this.alertController.create({
      cssClass: 'success-alert',
      message: '<div style="text-align: center;" class="center-icon"> <ion-icon class="success-icon" name="checkmark-circle-outline"></ion-icon> </div>',
      buttons:    [{
        text: 'OK',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (_) => {
          this.router.navigate(['/home'])
        }
      }]
    });

    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000,
      spinner:"lines-small"
    });
    await loading.present()
    await loading.dismiss().then(_=>{
     alert.present();
    })
  }
}
