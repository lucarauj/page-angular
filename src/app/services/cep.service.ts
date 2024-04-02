import { Injectable } from '@angular/core';
import cep from 'cep-promise';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor() { }

  buscar(consultaCep: string) : Promise<any> {
    return cep(consultaCep);
  }
}
