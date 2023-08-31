import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GenericForm } from './generic-form.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent<T> implements OnInit {

  @Input() formData: GenericForm<T>;

  form: FormGroup;
  formConfig: GenericForm<any> = {
      data: {
        name: '',
        email: '',
        password: '',
        age: 0,
        passwordConfirmation: '',
        telefone: '',
        cpf: '',
        cep: '',
        bairro: '',
        cidade: '',
        estado: '',
        rua: '',
    }
  };

  constructor(private fb: FormBuilder) {}

  getFieldType(value: any): string {
    return typeof value === 'number' ? 'number' : 'text';
  }

  ngOnInit(): void {
    this.form = this.fb.group(this.formConfig.data);
  }

}
