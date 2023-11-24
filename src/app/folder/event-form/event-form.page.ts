import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.page.html',
  styleUrls: ['./event-form.page.scss'],
})
export class EventFormPage  {

  eventForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
   this.eventForm = this.formBuilder.group({
     titulo: '',
     subtitulo: '',
     data: '',
     local: '',
     endereco: '',
     inicio: '',
     valor: '',
     descricao: ''
   });
  }

  onSubmit() {
   console.log(this.eventForm.value);
  }

  goBack() {
    this.router.navigate(['/folder/Eventos']);
  }


}
