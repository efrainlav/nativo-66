import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imagenCamara;
  constructor(
    public navCtrl: NavController,
    private camara: Camera
  ) {

  }

  tomarFoto(){
    let opciones: CameraOptions = {
      quality:100,
      encodingType: this.camara.EncodingType.JPEG,
      destinationType: this.camara.DestinationType.DATA_URL,
      mediaType: this.camara.MediaType.PICTURE,
      sourceType: this.camara.PictureSourceType.CAMERA
    };
    this.camara.getPicture(opciones).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.imagenCamara = base64Image;
     }, (err) => {
      // Handle error
     });
  }

}
