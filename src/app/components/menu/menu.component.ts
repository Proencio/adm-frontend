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

  empresa: any;
  
  constructor(private router: Router) { }

  ngOnInit() {
    this.getEmpresa();
  }

  getEmpresa() {
    const emp = localStorage.getItem("DadosEmpresa");
    if (emp != null && emp != undefined) {
      this.empresa = JSON.parse(emp);
    }
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