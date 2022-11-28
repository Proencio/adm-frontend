import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICategoria, ICategoriaDTO } from 'src/app/model/Categoria';

@Component({
  selector: 'app-categoria-add',
  templateUrl: './categoria-add.component.html',
  styleUrls: ['./categoria-add.component.css']
})
export class CategoriaAddComponent implements OnInit {
  // @Input() categoria: any;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    // this.getIdEmpresa();
  }

  // getIdEmpresa() {
    
  //   this.route.paramMap.subscribe((params) =>
  //   {
  //     this.categoria =  params;     
  //   });
  // }

}
