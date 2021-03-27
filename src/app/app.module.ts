import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SidebarComponent } from './quizlayout/sidebar/sidebar.component';
import { NavbarComponent } from './quizlayout/navbar/navbar.component';
import { HomeComponent } from './quizlayout/home/home.component';
import { DetailquizComponent } from './quizlayout/detailquiz/detailquiz.component';
import { IndexComponent } from './indexlayout/index/index.component';
import { IndexquizComponent } from './quizlayout/indexquiz/indexquiz.component';
import { NavComponent } from './indexlayout/nav/nav.component';
import { HeroComponent } from './indexlayout/hero/hero.component';
import { MainComponent } from './indexlayout/main/main.component';
import { FooterComponent } from './indexlayout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    DetailquizComponent,
    IndexComponent,
    IndexquizComponent,
    NavComponent,
    HeroComponent,
    MainComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
