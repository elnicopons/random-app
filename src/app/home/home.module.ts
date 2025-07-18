import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonModule } from '../components/button/button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RandomCardModule } from './random-card/random-card.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    FontAwesomeModule,
    RandomCardModule,
  ],
})
export class HomeModule {}
