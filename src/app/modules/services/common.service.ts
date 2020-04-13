import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) { }


//get Sample Data Json
  getSampleJson() {
    return this.http.get<any>('../assets/json/sample_data.json')
    .pipe(
      map((response : any)=>{
        if(response.data){
          return response
        }
      })
    );
  }
}
