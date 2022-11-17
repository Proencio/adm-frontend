import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  openMenu = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  reciverFeedback(respostaMenu: any) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaMenu);
    this.openMenu = respostaMenu;
  }
}
