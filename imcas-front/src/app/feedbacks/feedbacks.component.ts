import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";
import { Router } from '@angular/router';
/* import { Feedback } from "../model/feedback" */

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {

  /* public feedback: Array<Feedback>; */
  feedbacks: [];
  public current_page_number: number = 1;
  public first_page: number = 1;
  public last_page: number;
  public firstPageUrl: string = "";
  public prevPageUrl: string = "";
  public nextPageUrl: string = "";
  public lastPageUrl: string = "";

  constructor(public apiService: ApiService, private routes: Router) { }

  ngOnInit() {
    this.initData();
  }

  public initData() {
    this.apiService.getAllFeedbacks().subscribe(res => {
      this.feedbacks = res.data;
      this.last_page = res.last_page;
      this.lastPageUrl = res.last_page_url;
      this.firstPageUrl = res.first_page_url;
      this.prevPageUrl == null;
      this.nextPageUrl = res.next_page_url;
      this.current_page_number = res.current_page;
    });
  }

  public goToNextPage() {
    this.apiService.getNextPage(this.nextPageUrl).subscribe(res => {
      this.feedbacks = res.data;
      this.prevPageUrl = res.prev_page_url;
      this.nextPageUrl = res.next_page_url;
      this.current_page_number = res.current_page;
    });
  }

  public goToPrevPage() {
    this.apiService.getPrevPage(this.prevPageUrl).subscribe(res => {
      this.feedbacks = res.data;
      this.prevPageUrl = res.prev_page_url;
      this.nextPageUrl = res.next_page_url;
      this.current_page_number = res.current_page;
    });
  }

  public goToFirstPage() {
    this.apiService.getFirstPage(this.firstPageUrl).subscribe(res => {
      this.feedbacks = res.data;
      this.prevPageUrl = res.prev_page_url;
      this.nextPageUrl = res.next_page_url;
      this.current_page_number = res.current_page;
    });
  }

  public goToLastPage() {
    this.apiService.getLastPage(this.lastPageUrl).subscribe(res => {
      this.feedbacks = res.data;
      this.prevPageUrl = res.prev_page_url;
      this.nextPageUrl == null;
      this.current_page_number = res.current_page;
    });
  }

  public goToProfile(feedback){
    this.routes.navigate(['/feedbacks/' + feedback.id, {}])
  }
}
