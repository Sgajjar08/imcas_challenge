import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://api.imcas.com/v1';

  constructor(private httpClient: HttpClient) { }

  getAllFeedbacks(): any{
    return this.httpClient.get(this.apiURL + '/feedbacks');
  }

  getNextPage(nextPageUrl): any {
    return this.httpClient.get(nextPageUrl);
  }

  getPrevPage(prevPageUrl): any {
    return this.httpClient.get(prevPageUrl);
  }

  getFirstPage(firstPageUrl): any {
    return this.httpClient.get(firstPageUrl);
  }

  getLastPage(lastPageUrl): any {
    return this.httpClient.get(lastPageUrl);
  }

  public getFeedbackById(id: number): any{
    return this.httpClient.get(this.apiURL + "/feedbacks/" + id);
}
}
