import { Component, OnInit } from '@angular/core';
import {UserService} from '@src/app/services/user.service';
import * as imagepicker from 'nativescript-imagepicker';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: UserService) { }

  ngOnInit() {
  }

  pickProfilePic() {
    const context = imagepicker.create({
      mode: 'single' // use 'multiple' for multiple selection
    });

    context
        .authorize()
        .then(function() {
          return context.present();
        })
        .then(function(selection) {
          selection.forEach(function(selected) {
            // process the selected image
          });
           console.log(selection);
        }).catch(function (e) {
      // process error
    });
  }


}