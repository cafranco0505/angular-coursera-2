import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DestinoViaje } from '../models/destino-viajes.models';

@Component({
  selector: 'app-form-destino-viaje',
  templateUrl: './form-destino-viaje.component.html',
  styleUrls: ['./form-destino-viaje.component.css']
})
export class FormDestinoViajeComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  fg: FormGroup;
  minLongitud = 5;
  constructor(fb: FormBuilder) { 
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: ['' , Validators.compose([
        Validators.required,
        this.nombreValidator,
        this.nombrevalidatorParametrizable(this.minLongitud)
      ])],
      url: ['']
    });

    this.fg.valueChanges.subscribe((form: any) => {
      console.log('Hola');
    });
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, url: string): boolean{
    let d = new DestinoViaje(nombre, url);
    this.onItemAdded.emit(d);
    return false;
  }

  nombreValidator(control: FormControl): { [s: string]: boolean }{
    const l = control.value.toString().trim().length;
    if (l > 0 && l < 5){
      return { invalidNombre: true };
    }
    return null;
  }

  nombrevalidatorParametrizable(minLong: number): ValidatorFn{
    return (control: FormControl): { [s: string]: boolean } | null => {
    const l = control.value.toString().trim().length;
    if (l > 0 && l < minLong){
      return { minLongNombre: true };
    }
      return null;
    }
  }

}
