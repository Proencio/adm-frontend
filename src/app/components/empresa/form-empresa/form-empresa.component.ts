import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, switchMap, timer } from 'rxjs';
import { IEmpresa, IEmpresaDTO } from 'src/app/model/Empresa';
import { EmpresaService } from 'src/app/service/empresa/empresa.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {
  [x: string]: any;
  empresa: any;
  form!: FormGroup;
  subscription: Subscription | undefined;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private empresaService: EmpresaService,
    private formBuilder: FormBuilder,
    private alertServices: AlertModalService) { }
    
  ngOnInit(): void {
    this.initForm();
    this.getEmpresa();    
  }

  getEmpresa() {
    const emp = localStorage.getItem("DadosEmpresa");
    if (emp != null && emp != undefined) {
      this.empresa = JSON.parse(emp);

      console.log(this.empresa);
      this.patchForm();
    }
  }

  // getIdEmpresa() {
  //   this.route.paramMap.subscribe((params) =>
  //   {
  //     if (params.get('id') !== null) {
  //       const id = params.get('id');
  //       if (id != null && id != undefined) {
  //         var empresaId = id;
  //         this.empresa = this.empresaService.getOne(empresaId).subscribe(
  //           (res) => {
  //             this.empresa = res;
  //             this.patchForm();
  //           },
  //           (err) => {
  //             console.log(err);
  //           }
  //         );
  //         console.log(this.empresa);
  //       }
  //     } else {
  //       this.router.navigate(['empresa']);
  //     }
  //   });
  // }

  subscribWithFilter() {
    this.subscription = timer(0, 1000)
      .pipe(switchMap(async () => this.validate()))
      .subscribe((result) => result);
  }

  // subscribNoFilter() {
  //   timer(0, 1000)
  //     .pipe(switchMap(async () => this.validate))
  //     .subscribe((result) => result);
  // }
  

  validate() {
    console.log("validate ...");
    if (this.empresa == undefined) {
      this.router.navigate(['empresa']);
    }
  }

  initForm()
  {
    this.form = this.formBuilder.group({
      fantasia: [null, [Validators.required, Validators.minLength(2)]],
      social: [null],
      email: [null, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      // logo: [this.empresa.logo != null? this.empresa.logo : null],
      telefone: [null],
      whatsapp: [null,[Validators.required]],
      cnpj: [null],
      cpf: [null],
      cep: [null, [Validators.required, Validators.minLength(8)]],
      rua: [null],
      numero: [null],
      estado: [null],
      cidade: [null],
      complemento: [null],
      observacao: [null]
    });
  }

  patchForm()
  {
    this.form.patchValue({
      fantasia: this.empresa.fantasia,
      social: this.empresa.social,
      email: this.empresa.email,
      // logo: [this.empresa.logo != null? this.empresa.logo : null],
      telefone: this.empresa.telefone,
      whatsapp: this.empresa.whatsapp,
      cnpj: this.empresa.cnpj,
      cpf: this.empresa.cpf,
      cep: this.empresa.logradouro.cep,
      rua: this.empresa.logradouro.rua,
      numero: this.empresa.numero,
      estado: this.empresa.logradouro.estado,
      cidade: this.empresa.logradouro.cidade,
      complemento: this.empresa.complemento,
      observacao: this.empresa.observacao,
    });
  }


  onSubmit(): void {
    console.log("chamnado ...");
    // this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const dto = new IEmpresaDTO(this.form.value as IEmpresaDTO);
    dto.data = this.empresa.data;
    dto.id = this.empresa.id;
    dto.logo = this.empresa.logo;
    dto.complemento = this.empresa.complemento;
    dto.observacao = this.empresa.observacao;
    dto.logradouro = this.empresa.logradouro;

    this.update(dto);
  }

  update(empresa: IEmpresaDTO) {
    this.empresaService.update(empresa).subscribe(
      (data: any) => {
        // this.submitted = false;
        this.handSuccess("Dados da empresa alterado com sucesso.");
        this.form.reset();
        this.router.navigate(['empresa']);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  cancelar() {
    this.router.navigate(['empresa']);
  }

  get f()
  {
    return this.form.controls;
  }

  handSuccess(message: string) {
    this.alertServices.showAlertSuccess(message);
  }

  handDanger(message: string) {
    this.alertServices.showAlertDanger(message);
  }

  handWarning(message: string) {
    this.alertServices.showAlertWarning(message);
  }
}
