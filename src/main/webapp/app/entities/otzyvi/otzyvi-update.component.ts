import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { IOtzyvi, Otzyvi } from 'app/shared/model/otzyvi.model';
import { OtzyviService } from './otzyvi.service';

@Component({
  selector: 'jhi-otzyvi-update',
  templateUrl: './otzyvi-update.component.html'
})
export class OtzyviUpdateComponent implements OnInit {
  isSaving: boolean;
  dateDp: any;

  editForm = this.fb.group({
    id: [],
    clientFio: [],
    text: [],
    itemName: [],
    date: []
  });

  constructor(protected otzyviService: OtzyviService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ otzyvi }) => {
      this.updateForm(otzyvi);
    });
  }

  updateForm(otzyvi: IOtzyvi) {
    this.editForm.patchValue({
      id: otzyvi.id,
      clientFio: otzyvi.clientFio,
      text: otzyvi.text,
      itemName: otzyvi.itemName,
      date: otzyvi.date
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const otzyvi = this.createFromForm();
    if (otzyvi.id !== undefined) {
      this.subscribeToSaveResponse(this.otzyviService.update(otzyvi));
    } else {
      this.subscribeToSaveResponse(this.otzyviService.create(otzyvi));
    }
  }

  private createFromForm(): IOtzyvi {
    return {
      ...new Otzyvi(),
      id: this.editForm.get(['id']).value,
      clientFio: this.editForm.get(['clientFio']).value,
      text: this.editForm.get(['text']).value,
      itemName: this.editForm.get(['itemName']).value,
      date: this.editForm.get(['date']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IOtzyvi>>) {
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
