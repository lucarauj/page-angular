import { Component } from '@angular/core';
import { CepService } from './services/cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cep-app';

  endereco: any = null;

  constructor(
    private cepService: CepService,
  ) {}
  
  async buscador(consultaCep: string) {

    try {
      this.endereco = await this.cepService.buscar(consultaCep);
    } catch (error) { 
      alert("CEP não encontrado");
    }
  }
}
