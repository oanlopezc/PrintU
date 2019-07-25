import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})

export class UbicacionPage implements OnInit {
   mapRef = null;

  constructor(private geolocation: Geolocation, private loadingCtrl: LoadingController) { 

  }  

  ngOnInit() {
    this.loadMap();
  }	

  async loadMap() {
    const UNlatlng ={
      lat: 4.6377025328025265,
      lng: -74.08395409584047
    };
    const Alatlng ={
      lat: 4.63651553014389,
      lng: -74.0844637155533
    };
    const Blatlng ={
      lat: 4.638504560496676,
      lng: -74.08384144306184
    };
    const Clatlng ={
      lat: 4.639253118856058,
      lng: -74.08262908458711
    };
    const Dlatlng ={
      lat: 4.63728547804165,
      lng: -74.0828436613083
    };
    const loading = await this.loadingCtrl.create();
    loading.present();
    const myLatLng = await this.getLocation();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: UNlatlng,
      zoom: 16,
      minZoom: 12,
      maxZoom: 20
    });
    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () => {
      loading.dismiss();


    const marker = new google.maps.Marker({
      position: myLatLng,
      map: this.mapRef,
      title: "Mi Ubicación",
      draggable: true,
      icon: {url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
    });
    const infowindow = new google.maps.InfoWindow({
      content: "MI UBICACIÓN"
    });
    marker.addListener('click', function(){
      infowindow.open(Map,marker)
    });

    const markerA = new google.maps.Marker({
      position: Alatlng,
      map: this.mapRef,
      title: "Edificio Medicina PISO 1,2",
      draggable: false,
      icon: {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}  
    });
    const infowindowA = new google.maps.InfoWindow({
      content: "Edificio Medicina PISO 1,2"
    });
    markerA.addListener('click', function(){
      infowindowA.open(Map,markerA)
    });

    const markerB = new google.maps.Marker({
      position: Blatlng,
      map: this.mapRef,
      title: "Edificio Aulas de Ingenieria PISO 1",
      draggable: false,
      icon: {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
    });
    const infowindowB = new google.maps.InfoWindow({
      content: "Edificio Aulas de Ingenieria PISO 1"
    });
    markerB.addListener('click', function(){
      infowindowB.open(Map,markerB)
    });

    const markerC = new google.maps.Marker({
      position: Clatlng,
      map: this.mapRef,
      title: "Edificio Lab. Ingenieria Electrica y Electronica PISO 1",
      draggable: false,
      icon: {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
    });
    const infowindowC = new google.maps.InfoWindow({
      content: "Edificio Lab. Ingenieria Electrica y Electronica PISO 1"
    });
    markerC.addListener('click', function(){
      infowindowC.open(Map,markerC)
    });

    const markerD = new google.maps.Marker({
      position: Dlatlng,
      map: this.mapRef,
      title: "Edificio Facultad Ingenieria PISO 1,2,3",
      draggable: false,
      icon: {url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
    }); 
    const infowindowD = new google.maps.InfoWindow({
      content: "Edificio Facultad Ingenieria PISO 1,2,3"
    });
    markerD.addListener('click', function(){
      infowindowD.open(Map,markerD)
    });

    });
  }

  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }
}
