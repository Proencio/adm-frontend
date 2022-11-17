import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  @Input() openMenu: any;
  @Output() respostaOpenMenu = new EventEmitter();
  
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.openMenu);
    console.log('Objeto familia recebido do component pai via Input: ', this.openMenu);
  }

  produtos(): void {
    this.router.navigate(['produtos']);   
  }

  sacola(): void {
    this.router.navigate(['sacola']);
  }

  home(): void {
    this.router.navigate(['']);
  }

  menu(): void {
    if (this.openMenu) {
      this.respostaOpenMenu.emit(false);
    } else {
      this.respostaOpenMenu.emit(true);
    }     
  }
}