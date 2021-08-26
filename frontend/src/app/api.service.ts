import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({

  providedIn: 'root'
})
export class ApiService {

  headers: HttpHeaders;

  constructor(
    public http: HttpClient
  ) { 
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
   this.headers.append('Content-type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
  }

  addclasses(data) {
    return this.http.post('http://localhost/ionic-project/backend/createclass.php',data);
  }

  addstudent(data) {
    return this.http.post('http://localhost/ionic-project/backend/createstudent.php',data);
  }

  getclasses() {
    return this.http.get('http://localhost/ionic-project/backend/getclass.php');
  }
   
  getlist(cid) {
    return this.http.get('http://localhost/ionic-project/backend/studentlist.php?cid='+cid);
  }

  deleteclass(cid) {
    return this.http.delete('http://localhost/ionic-project/backend/deleteclass.php?cid='+cid);
  }

  deletestudent(sid) {
    return this.http.delete('http://localhost/ionic-project/backend/deletestudent.php?sid='+sid);
  }


  getclass(cid) {
    return this.http.get('http://localhost/ionic-project/backend/getsingleclass.php?cid='+cid);
  }

  getstudent(sid) {
    return this.http.get('http://localhost/ionic-project/backend/getsinglestudent.php?sid='+sid);
  }

  updateclass(cid,data) {
    return this.http.put('http://localhost/ionic-project/backend/updateclass.php?cid='+cid,data);
  }

  updatestudent(sid,data) {
    return this.http.put('http://localhost/ionic-project/backend/updatestudent.php?sid='+sid,data);
  }
}
