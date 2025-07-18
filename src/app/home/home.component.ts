import { Component, OnDestroy } from '@angular/core';
import { actions, places, speeds, times } from '../data/data';
import { interval, Subscription } from 'rxjs';
import { faPlay, faStop } from '@fortawesome/free-solid-svg-icons';

enum Texts {
  Start = 'Comenzar',
  Stop = 'Detener',
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  places = places;
  times = times;
  actions = actions;
  speeds = speeds;
  randomize = false;
  timerText = Texts.Start;
  timerIcon = faPlay;
  timerSubscription?: Subscription;

  startStopTimer() {
    if (!this.timerSubscription || this.timerSubscription.closed) {
      this.randomizeEverything();
      this.timerSubscription = interval(5 * 60 * 1000).subscribe(() => {
        this.randomizeEverything();
      });
      this.timerText = Texts.Stop;
      this.timerIcon = faStop;
    } else {
      this.timerSubscription.unsubscribe();
      this.timerText = Texts.Start;
      this.timerIcon = faPlay;
    }
  }

  randomizeEverything() {
    this.randomize = !this.randomize;
  }

  ngOnDestroy() {
    this.timerSubscription?.unsubscribe();
  }
}
