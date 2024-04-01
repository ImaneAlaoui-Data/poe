import { Injectable } from '@angular/core';
import { PoeType } from '../types/poe.type';
import { IService } from '../../core/interfaces/i-service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PoeService implements IService<PoeType>
{
  private _poes: Array<PoeType> = [
    {
      title: 'Développeur Cybersécurité',
      duration: 399
    }
  ]


  constructor(
    private _httpClient: HttpClient
  ) { }

  add(item: PoeType): Observable<PoeType> {
    return this._httpClient.post<PoeType>(
      'http://localhost:3000/poes',
      item
    )
  }

  findAll(): Observable<PoeType[]> {
    return this._httpClient.get<PoeType[]>(
      'http://localhost:3000/poes'
    )
    .pipe(
      map((poe: PoeType[]) => {
        return poe.sort((i1: PoeType, i2: PoeType) => {
          return i1.title.localeCompare(i2.title)
      })
    })
    )
  }
  get poes(): Array<PoeType> {
    return this._poes
  }
}
