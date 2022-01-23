import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeService } from './home.service';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, HttpClientModule],
  exports: [HomeComponent],
  providers: []
})
export class HomeModule {}
