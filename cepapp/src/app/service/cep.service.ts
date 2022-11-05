import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import  { Endereco }  from "../model/endereco";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  obterEndereco(cep: string): Observable<Endereco> { //Se bate na API retorna OBSERVABLE
      return this.http.get<Endereco>(`http://viacep.com.br/ws/${cep}/json/`);
  }
}
