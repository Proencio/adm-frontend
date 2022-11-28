import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categoria-update',
  templateUrl: './categoria-update.component.html',
  styleUrls: ['./categoria-update.component.css']
})
export class CategoriaUpdateComponent implements OnInit {
  @Input() categoria: any;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.getCatalogo();
  }

  getCatalogo() {
    
    this.route.paramMap.subscribe((params) =>
    {
      this.categoria =  params;
      console.log(this.categoria);    
    });
  }

}
