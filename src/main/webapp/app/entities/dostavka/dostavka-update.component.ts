import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { IDostavka, Dostavka } from 'app/shared/model/dostavka.model';
import { DostavkaService } from './dostavka.service';

@Component({
  selector: 'jhi-dostavka-update',
  templateUrl: './dostavka-update.component.html'
})
export class DostavkaUpdateComponent implements OnInit {
  isSaving: boolean;
  dateDp: any;

  editForm = this.fb.group({
    id: [],
    date: [],
    name: [],
    count: [],
    price: [],
    buyerPhone: [],
    buyerAddress: [],
    buyerFio: []
  });

  constructor(protected dostavkaService: DostavkaService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ dostavka }) => {
      this.updateForm(dostavka);
    });
  }

  updateForm(dostavka: IDostavka) {
    this.editForm.patchValue({
      id: dostavka.id,
      date: dostavka.date,
      name: dostavka.name,
      count: dostavka.count,
      price: dostavka.price,
      buyerPhone: dostavka.buyerPhone,
      buyerAddress: dostavka.buyerAddress,
      buyerFio: dostavka.buyerFio
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const dostavka = this.createFromForm();
    if (dostavka.id !== undefined) {
      this.subscribeToSaveResponse(this.dostavkaService.update(dostavka));
    } else {
      this.subscribeToSaveResponse(this.dostavkaService.create(dostavka));
    }
  }

  private createFromForm(): IDostavka {
    return {
      ...new Dostavka(),
      id: this.editForm.get(['id']).value,
      date: this.editForm.get(['date']).value,
      name: this.editForm.get(['name']).value,
      count: this.editForm.get(['count']).value,
      price: this.editForm.get(['price']).value,
      buyerPhone: this.editForm.get(['buyerPhone']).value,
      buyerAddress: this.editForm.get(['buyerAddress']).value,
      buyerFio: this.editForm.get(['buyerFio']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IDostavka>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    this.previousState();
  }

  protected onSaveError() {
    this.isSaving = false;
  }
}
