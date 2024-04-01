import { Component } from '@angular/core';
import { PoeService } from './services/poe.service';
import { take } from 'rxjs';
import { PoeType } from '../types/poe.type';

@Component({
  selector: 'app-poe-list',
  templateUrl: './poe-list.component.html',
  styleUrl: './poe-list.component.scss'
})
export class PoeListComponent {

  /**
   * @var Array<PoeType>
   * Array of PoeList to be displayed
   */
  poes: Array<PoeType> = []
  constructor(
    private _service: PoeService
    ) {}

  ngOnInit(): void {
    this._service.findAll()
    .pipe(
      take(1)
    )
    .subscribe((poes: PoeType[]) => {
      this.poes = poes
      
    })
  }

}
