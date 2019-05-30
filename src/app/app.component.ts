import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private meta: Meta,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    meta.addTags([
      {httpEquiv: 'Content-Type', content: 'text/html'},
      {name: 'keywords', content: 'SELU, Turtle Cove, science, research, lab, Louisiana, LA'},
      {name: 'Description', content: 'PWA for the Turtle Cove research facility.'}
    ]);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
