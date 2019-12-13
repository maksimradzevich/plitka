import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { ISells, Sells } from 'app/shared/model/sells.model';
import { SellsService } from './sells.service';

@Component({
  selector: 'jhi-sells-update',
  templateUrl: './sells-update.component.html'
})
export class SellsUpdateComponent implements OnInit {
  isSaving: boolean;
  dateDp: any;

  editForm = this.fb.group({
    id: [],
    date: [],
    count: [],
    totalPrice: [],
    clientCounts: []
  });

  constructor(protected sellsService: SellsService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ sells }) => {
      this.updateForm(sells);
    });
  }

  updateForm(sells: ISells) {
    this.editForm.patchValue({
      id: sells.id,
      date: sells.date,
      count: sells.count,
      totalPrice: sells.totalPrice,
      clientCounts: sells.clientCounts
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const sells = this.createFromForm();
    if (sells.id !== undefined) {
      this.subscribeToSaveResponse(this.sellsService.update(sells));
    } else {
      this.subscribeToSaveResponse(this.sellsService.create(sells));
    }
  }

  private createFromForm(): ISells {
    return {
      ...new Sells(),
      id: this.editForm.get(['id']).value,
      date: this.editForm.get(['date']).value,
      count: this.editForm.get(['count']).value,
      totalPrice: this.editForm.get(['totalPrice']).value,
      clientCounts: this.editForm.get(['clientCounts']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISells>>) {
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
