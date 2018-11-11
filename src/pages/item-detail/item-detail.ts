import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  title;
  description;

  constructor(public navParams: NavParams, private callto: CallNumber, private sms: SMS) {

  }
  call() {
    var a = prompt();
    this.callto.callNumber(a, true)
      .then(res => alert(res))
      .catch(err => alert(err));
  }
  messege() {
    var a = prompt();
    this.sms.send(a, 'Hello world!')
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));

  }
  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }

}