import { Component, OnInit } from '@angular/core';
import { Subjects } from '../../db/Subjects.js';
// import { Students } from '../db/Students.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  subjects: any = Subjects;
  // student: any = Students;
  constructor() {
    // console.log(this.student);

  }

  ngOnInit(): void {
  }

}
