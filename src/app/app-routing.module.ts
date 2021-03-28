import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './indexlayout/about/about.component';
import { ContactComponent } from './indexlayout/contact/contact.component';
import { FaqComponent } from './indexlayout/faq/faq.component';
import { IndexComponent } from './indexlayout/index/index.component';
import { LoginComponent } from './indexlayout/login/login.component';
import { MainComponent } from './indexlayout/main/main.component';
import { ServicesComponent } from './indexlayout/services/services.component';
import { SignupComponent } from './indexlayout/signup/signup.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailquizComponent } from './quizlayout/detailquiz/detailquiz.component';
import { HomeComponent } from './quizlayout/home/home.component';
import { IndexquizComponent } from './quizlayout/indexquiz/indexquiz.component';

const routes: Routes = [
  {
    path: "quiz",
    component: IndexComponent,
    children: [
      {
        path: "home",
        component: MainComponent
      },
      {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "about",
        component: AboutComponent
      },
      {
        path: "services",
        component: ServicesComponent
      },
      {
        path: "contact",
        component: ContactComponent
      },
      {
        path: "faq",
        component: FaqComponent
      },
      {
        path: "signup",
        component: SignupComponent
      },
      {
        path: "login",
        component: LoginComponent
      }

    ]
  }, {
    path: "",
    redirectTo: "quiz/home",
    pathMatch: "full"
  },
  {
    path: "quizs",
    component: IndexquizComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: ':name',
        component: DetailquizComponent
      }
    ]
  },
  {
    path: '**',
    component: NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
