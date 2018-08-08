import { Component } from '@angular/core';
import {WindowService} from "./window-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private  winRef: WindowService){
  }
  start() {
    const tour = new this.winRef.nativeWindow.Shepherd.Tour({
      defaults: {
        classes: 'shepherd-theme-arrows'
      }
    });

    tour.addStep('example-step', {
      text: 'This is where you will learn about us.',
      attachTo: '.first bottom',
      buttons: [
        {
          text: 'Next',
          action: tour.next
        },
        {
          text: 'Close',
          action: tour.cancel
        }
      ]
    });

    tour.addStep('example-step', {
      text: 'This is where you will learn about us.',
      attachTo: '.contact bottom',
      buttons: [
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });

    tour.addStep('example-step2', {
      text: 'This is a side navigation, duh!',
      attachTo: 'h3 left',
      buttons: [
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });

    tour.addStep('example-step3', {
      text: 'This is the end of your tour bro',
      attachTo: 'h1 bottom',
      buttons: [
        {
          text: 'Get this outta here',
          action: tour.next
        }
      ]
    });

    tour.start();
    console.log(tour);
  }
}
