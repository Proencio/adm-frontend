import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() openMenu: any;
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  usuarios() {
    this.router.navigate(['usuarios']);
  }

  empresa() {
    this.router.navigate(['empresa/perfil']);
  }

}
