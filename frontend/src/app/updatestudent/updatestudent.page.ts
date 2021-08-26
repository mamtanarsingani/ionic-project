import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.page.html',
  styleUrls: ['./updatestudent.page.scss'],
})
export class UpdatestudentPage implements OnInit {
  sid: any;
  studentname: any;
  cid:any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService
  ) {

    this.route.params.subscribe((param:any) => {
      this.sid = param.sid;
      console.log(this.sid);
      this.getstudent(this.sid);

    })
   }
  ngOnInit() {
  }

  getstudent(sid) {
    this._apiService.getstudent(sid).subscribe((res: any) => {
      console.log("success ===",res);
      let student_list = res[0];
      this.studentname = student_list.studentname;
      this.cid = student_list.cid;
    },(error: any) => {
      console.log("ERROR ===",error);
  
    })
  }

  updatestudent(){
    let data = {

      studentname: this.studentname,
      cid: this.cid, 
  }
  
  this._apiService.updatestudent(this.sid,data).subscribe((res: any) => {
    console.log("success ===",res);
    alert("updated succefully");
    this.studentname = '';
        this.cid = '';

  },(error: any) => {
    console.log("ERROR ===",error);

  })

}
}
