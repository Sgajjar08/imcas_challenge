import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  feedback: string;
  user: [];
  constructor(public apiService: ApiService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params && params['params'] && params['params']['id']) {
        this.apiService.getFeedbackById(params['params']['id']).subscribe(response => {
          this.feedback = response.translations[0].content;
          this.user = response.user;
        })
      }
    });
  }

}
