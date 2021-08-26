import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  class_list: any;
  classes: any = [];
 constructor(
  public _apiservice: ApiService
 ) {
  this.getclasses();
 }

 ionViewWillEnter() {
  this.getclasses();
}



 addclasses(){

  let data = {
  class_list: this.class_list,
    
  }

  this._apiservice.addclasses(data).subscribe((res: any) => {
    console.log("success ===",res);
    
    this.class_list = '';
    this.getclasses();
  },(error: any) => {
    console.log("ERROR ===",error);
  })
}

getclasses()
{

  this._apiservice.getclasses().subscribe((res: any) => {
    console.log("success ===",res);
    this.classes = res;
  },(error: any) => {
    console.log("ERROR ===",error);

  })

}

deleteclass(cid) {
  console.log(cid);
  this._apiservice.deleteclass(cid).subscribe((res: any) => {
    console.log("success ===",res);
    this.getclasses();
  },(error: any) => {
     console.log("ERROR ===",error);
  })
    
}
}

