import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  UsesState:any ={
    isAuthenticated:false,
    UserId: null,
    UserEmail: null,
    CartList:[],
  }


  public setUsesState(state:any){
    this.UsesState={ ... state};
  }

}
