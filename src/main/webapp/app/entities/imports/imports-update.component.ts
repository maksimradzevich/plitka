import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { IImports, Imports } from 'app/shared/model/imports.model';
import { ImportsService } from './imports.service';

@Component({
  selector: 'jhi-imports-update',
  templateUrl: './imports-update.component.html'
})
export class ImportsUpdateComponent implements OnInit {
  isSaving: boolean;
  dateDp: any;

  editForm = this.fb.group({
    id: [],
    date: [],
    name: [],
    count: [],
    price: []
  });

  constructor(protected importsService: ImportsService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ imports }) => {
      this.updateForm(imports);
    });
  }

  updateForm(imports: IImports) {
    this.editForm.patchValue({
      id: imports.id,
      date: imports.date,
      name: imports.name,
      count: imports.count,
      price: imports.price
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const imports = this.createFromForm();
    if (imports.id !== undefined) {
      this.subscribeToSaveResponse(this.importsService.update(imports));
    } else {
      this.subscribeToSaveResponse(this.importsService.create(imports));
    }
  }

  private createFromForm(): IImports {
    return {
      ...new Imports(),
      id: this.editForm.get(['id']).value,
      date: this.editForm.get(['date']).value,
      name: this.editForm.get(['name']).value,
      count: this.editForm.get(['count']).value,
      price: this.editForm.get(['price']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IImports>>) {
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
