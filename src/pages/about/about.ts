import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SingleItemPage} from '../single-item/single-item';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }


  viewItem(data){

    
    this.navCtrl.push(SingleItemPage,data);

  }



}
