import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesComponent } from './messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
