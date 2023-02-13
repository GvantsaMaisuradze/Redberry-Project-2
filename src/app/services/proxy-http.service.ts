import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProxyHttpService {

  constructor(private httpClient:HttpClient) { 
    
  }
  getAllServices():any{
    var fullUrl:string = `${environment.apiBaseUrl}/degrees`
      return this.httpClient.get(fullUrl);
  }
  addCv(UserData:any){
    const fullUrl = `${environment.apiBaseUrl}/cvs`;
    const headers = new HttpHeaders()
    .set('content-type', 'application/json');
    return this.httpClient.post(fullUrl, UserData, { headers: headers })
  }
}
