import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-single-item',
  templateUrl: 'single-item.html',
})
export class SingleItemPage {

  item_image: string = this.navParams.get('image');
  name: string = this.navParams.get('name');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleItemPage');
  }



}
