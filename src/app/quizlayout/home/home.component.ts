import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { Subjects } from '../../db/Subjects.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subjects: any;
  // subjects: any = Subjects;
  constructor(private http: HttpClient) {
    // console.log(this.student);
  }

  ngOnInit(): void {
    this.getSubjects().subscribe(data => {
      this.subjects = data;
    });
  }

  getSubjects() {
    return this.http.get("assets/db/Subject.json");
  }

}
