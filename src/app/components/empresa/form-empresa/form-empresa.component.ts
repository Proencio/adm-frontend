import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmpresa, IEmpresaDTO } from 'src/app/model/Empresa';
import { EmpresaService } from 'src/app/service/empresa/empresa.service';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.css']
})
export class FormEmpresaComponent implements OnInit {
  [x: string]: any;
  empresa: any;
  form!: FormGroup;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private empresaService: EmpresaService,
    private formBuilder: FormBuilder,) { }
    
  ngOnInit(): void {
    this.initForm();

    this.route.paramMap.subscribe((params) =>
    {
      if (params.get('id') !== null) {
        const id = params.get('id');
        if (id != null && id != undefined) {
          var empresaId = id;
          this.empresa = this.empresaService.getOne(empresaId).subscribe(
            (res) => {
              this.empresa = res;
              this.patchForm();
            },
            (err) => {
              console.log(err);
            }
          );
          console.log(this.empresa);
        }
      } else {
        this.router.navigate(['empresa']);
        console.log("Não recebido ...");
      }
    });

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
    });
  }


  onSubmit(): void {
    console.log("chamnado ...");
    // this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const dto = new IEmpresaDTO(this.form.value as IEmpresaDTO);
  }

  update(empresa: IEmpresaDTO) {
    this.empresaService.edit(empresa).subscribe(
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
