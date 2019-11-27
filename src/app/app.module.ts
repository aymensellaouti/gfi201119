import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from '@angular/forms';
import { CardSimulatorComponent } from './card-simulator/card-simulator.component';
import { FilsComponent } from './fils/fils.component';
import { PereComponent } from './pere/pere.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailComponent } from './cv/detail/detail.component';
import { ListeComponent } from './cv/liste/liste.component';
import { ItemComponent } from './cv/item/item.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { WordComponent } from './directives/word/word.component';
import { NgclassComponent } from './directives/ngclass/ngclass.component';
import { HighlightDirective } from './highlight.directive';
import { RainbowDirective } from './rainbow.directive';
import { DefaultImagePipe } from './default-image.pipe';
import { TodoComponent } from './todo/todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { AdminComponent } from './admin/admin.component';
import { FrontComponent } from './front/front.component';
import { NF404Component } from './nf404/nf404.component';
import { LoginComponent } from './login/login.component';
import { ObservableComponent } from './observable/observable.component';

import {HttpClientModule} from '@angular/common/http';
import { HttpComponent } from './http/http.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    CardSimulatorComponent,
    FilsComponent,
    PereComponent,
    CvComponent,
    DetailComponent,
    ListeComponent,
    ItemComponent,
    NgstyleComponent,
    WordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailPersonneComponent,
    AdminComponent,
    FrontComponent,
    NF404Component,
    LoginComponent,
    ObservableComponent,
    HttpComponent,
    AddPersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
