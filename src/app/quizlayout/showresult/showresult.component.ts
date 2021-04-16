import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showresult',
  templateUrl: './showresult.component.html',
  styleUrls: ['./showresult.component.css']
})
export class ShowresultComponent implements OnInit {

  public mySubjects: any = {
    Id: "",
    Name: "",
    Logo: "ADAV.jpg"
  };

  public listQuiz = [];
  public listAnsewrs = [];
  public user: any;

  constructor() { }

  ngOnInit(): void {
    this.getDataResult();


  }

  getDataResult() {
    let user = JSON.parse(localStorage.getItem("user"));
    let quiz = JSON.parse(localStorage.getItem("quiz"));
    this.mySubjects = user.subject;
    this.user = user;
    this.listQuiz = quiz;

    // this.listAnsewrs = obj.ansewrs;
  }


}
