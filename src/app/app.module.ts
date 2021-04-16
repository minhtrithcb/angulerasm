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
import { AboutComponent } from './indexlayout/about/about.component';
import { ServicesComponent } from './indexlayout/services/services.component';
import { ContactComponent } from './indexlayout/contact/contact.component';
import { FaqComponent } from './indexlayout/faq/faq.component';
import { SignupComponent } from './indexlayout/signup/signup.component';
import { LoginComponent } from './indexlayout/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CountdownModule } from 'ngx-countdown';
import { ShowresultComponent } from './quizlayout/showresult/showresult.component';



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
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FaqComponent,
    SignupComponent,
    LoginComponent,
    ShowresultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
