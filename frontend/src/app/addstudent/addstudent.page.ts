import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.page.html',
  styleUrls: ['./addstudent.page.scss'],
})
export class AddstudentPage implements OnInit {

  cid: any;
  studentname: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _apiService: ApiService,
  ) { }

  ngOnInit() {
  }

  addstudent() {
    let data = {
      studentname: this.studentname,
      cid: this.cid, 
      }
    
      this._apiService.addstudent(data).subscribe((res: any) => {
        console.log("success ===",res);
        this.studentname = '';
        this.cid = '';
        this.router.navigateByUrl('/home');
      },(error: any) => {
        console.log("ERROR ===",error);

      })
  }
}
