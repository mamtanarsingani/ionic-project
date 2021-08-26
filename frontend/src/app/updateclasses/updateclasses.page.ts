import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updateclasses',
  templateUrl: './updateclasses.page.html',
  styleUrls: ['./updateclasses.page.scss'],
})
export class UpdateclassesPage implements OnInit {
  cid: any;
  class_list: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService
  ) {

    this.route.params.subscribe((param:any) => {
      this.cid = param.cid;
      console.log(this.cid);
      this.getclass(this.cid);
     
    })
   }

   ngOnInit() {
  }

  getclass(cid) {
    this._apiService.getclass(cid).subscribe((res: any) => {
      console.log("success ===",res);
      let classes = res[0];
      this.class_list = classes.class_list;
    },(error: any) => {
      console.log("ERROR ===",error);
  
    })
  }

  updateclass(){
    let data = {
      class_list: this.class_list,
    
  }
  
  this._apiService.updateclass(this.cid,data).subscribe((res: any) => {
    console.log("success ===",res);
    this.router.navigateByUrl('/home');
    
  },(error: any) => {
    console.log("ERROR ===",error);

  })

}
}