import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reactive-contact',
  templateUrl: './reactive-contact.component.html',
  styleUrls: ['./reactive-contact.component.css']
})
export class ReactiveContactComponent implements OnInit {

  contactForm!: FormGroup;
  name!: string;
  departments: string[] = [];

  constructor( 
          private readonly fb: FormBuilder,
          private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.departments = this.route.snapshot.data['department'];

    this.route.queryParams.subscribe((params: Params) => {
        this.name = params['name'];
      });
      
    this.contactForm = this.initForm();
    this.onPathValue();
    this.onSetValue();
  }

  onPathValue(): void {
    this.contactForm.patchValue({ name: 'Digite su nombre...' });
  }

  // El Metodo setValue de los Formularios reactivos, obliga a manipular todos los campos del formulario.
  onSetValue(): void {
    //this.contactForm.setValue({ comment: 'Ingrese la informacion que guste!!!' })
  }

  onSubmit(): void {
    console.log('Data Form ->', this.contactForm.value)
  }

  // Metodo para declarar el formulario reactivo
  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      checkAdult: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]]
    })
  }

}
