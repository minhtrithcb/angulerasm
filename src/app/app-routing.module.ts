import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './indexlayout/index/index.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailquizComponent } from './quizlayout/detailquiz/detailquiz.component';
import { HomeComponent } from './quizlayout/home/home.component';
import { IndexquizComponent } from './quizlayout/indexquiz/indexquiz.component';

const routes: Routes = [
  {
    path: "home",
    component: IndexComponent,
    children: [
      {
        path: "",
        component: IndexComponent
      }
    ]
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
