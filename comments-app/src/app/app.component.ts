import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit{
  title = 'POST YOUR COMMENTS';
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigateByUrl('')
  }
}
