import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.page.html',
  styleUrls: ['./studentlist.page.scss'],
})
export class StudentlistPage implements OnInit {
  
  cid: any;
  studentname: any;
  students: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService,
  ) 
  {
    this.route.params.subscribe((param:any) => {
      this.cid = param.cid;
      this.getlist(this.cid);
    })
  }

  ngOnInit() {
  }

  
  getlist(cid) {
   
    this._apiService.getlist(cid).subscribe((res: any) => {
      console.log("success ===",res);
      this.students = res;
      console.log(this.students);
    },(error: any) => {
      console.log("ERROR ===",error);
  
    })
  }

  deletestudent(sid) {
    console.log(sid);
    this._apiService.deletestudent(sid).subscribe((res: any) => {
      console.log("success ===",res);
      this.getlist(this.cid);
    },(error: any) => {
       console.log("ERROR ===",error);
    })
      
  }

}
