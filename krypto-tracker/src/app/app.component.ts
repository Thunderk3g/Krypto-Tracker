import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoaderComponent } from './shared/loader/loader.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'krpto-tracker';
  tokenStorageService: any;
  public loader = LoaderComponent;
  constructor(
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const node = document.createElement('script');
        node.src = 'assets/js/main.js';
        node.type = 'text/javascript';
        node.async = false;
        node.id = 'main';
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }
    });
  }

}
