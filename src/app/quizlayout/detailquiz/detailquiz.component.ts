import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detailquiz',
  templateUrl: './detailquiz.component.html',
  styleUrls: ['./detailquiz.component.css']
})
export class DetailquizComponent implements OnInit {

  public id: any;
  public Quizs: any;
  public mySubjects: any = {
    Id: "",
    Name: "",
    Logo: "ADAV.jpg"
  };

  public myAnswers: any = [];
  public config: any;
  public timeData = "900";
  // public isSelected = false;
  public index = 0;

  public cauhoi = {
    "Id": "",
    "Text": "",
    "Marks": "",
    "AnswerId": 104121,
    "Answers": []
  };

  public studentMark = {
    name: "tri",
    mark: 0,
    subject: {},
    ansewrs: []
  };

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    // lấy id của quiz từ url 
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.name;
    });

    // trả về thông tin trang 
    this.getQuizInfo().subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        const id = data[i].Id;
        if (id == this.id) {
          this.mySubjects = data[i];
        }
      }
    }, error => {
      console.log(`object`, error)
    });

    // trả về ds quiz và gán lại
    var x = localStorage.getItem('quiz');
    this.config = { leftTime: this.timeData, demand: true };


    if (x) {
      this.Quizs = JSON.parse(x);
      this.cauhoi = this.Quizs[this.index];
      this.config = { leftTime: this.timeData, demand: false };

    } else {
      Swal.fire({
        title: 'Bạn đã sẵn sàng chưa?',
        text: "Bạn có 15 phút để làm bài thôi đấy!",
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#2ecc71',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Thôi từ từ',
        confirmButtonText: 'OK Bắt đầu thôi'
      }).then((result) => {
        if (result.isConfirmed) {
          this.loadQ();
          this.config = { leftTime: this.timeData, demand: false };
        } else {
          this.router.navigate(["/quizs/home"]);
        }
      })
    }
  }

  loadQ() {
    return this.getQuizs().subscribe((data: any) => {
      this.Quizs = data.sort(() => Math.random() - 0.5).slice(0, 10);
      this.cauhoi = this.Quizs[this.index];
      // console.log(this.Quizs);
      localStorage.setItem('quiz', JSON.stringify(this.Quizs));
    }, error => {
      if (error.status == 404) {
        this.router.navigate(["/quizs/home"]);
      }
    });
  }

  chooseA(e) {
    var lag = false;
    // console.log(e.target.id);
    this.myAnswers.forEach(el => {
      if (el.idCauHoi == this.cauhoi.Id) {
        lag = true;
        el.idDapAn = e.target.id;
      }
    });

    if (!lag) {
      this.myAnswers.push(
        { idDapAn: e.target.id, idCauHoi: this.cauhoi.Id }
      )
    }
    // console.log(this.myAnswers);
  }

  checkda(id) {
    let flag = false;
    this.myAnswers.forEach(e => {
      if (id == e.idDapAn) {
        flag = true;
      }
    });
    if (flag) {
      return true;
    } else {
      return false;
    }
  }

  onTimerFinished(e: Event) {
    if (e["action"] == "done") {
      this.saveStudentMark();
      this.router.navigate(["/quizs/data/showresult"]);
    }
  }

  countTotal() {
    var diem = 0;
    this.Quizs.forEach(el => {
      this.myAnswers.forEach(e => {
        if (e.idDapAn == el.AnswerId) {
          diem++;
        }
      });
    });

    return diem;
  }

  saveStudentMark() {
    let obj = this.studentMark;
    obj.mark = this.countTotal();
    obj.ansewrs = this.myAnswers;
    obj.subject = this.mySubjects;
    localStorage.setItem('user', JSON.stringify(obj));
  }

  finish() {
    Swal.fire({
      title: 'Bạn có chắc chứ chưa?',
      text: "Bấm kết thúc để lưu điểm",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2ecc71',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Để xem lại',
      confirmButtonText: 'Kết thúc'
    }).then((result) => {
      if (result.isConfirmed) {
        this.saveStudentMark();
        this.router.navigate(["/quizs/data/showresult"]);
      }
    });
  }

  prevQ() {
    this.index--;
    this.cauhoi = this.Quizs[this.index];
  }

  nextQ() {
    this.index++;
    this.cauhoi = this.Quizs[this.index];
  }

  // dùng id để lấy bộ câu hỏi
  getQuizs() {
    return this.http.get(`assets/db/Quizs/${this.id}.json`);
  }

  // lấy môn học hiện tại
  getQuizInfo() {
    return this.http.get(`assets/db/Subject.json`);
  }

}
