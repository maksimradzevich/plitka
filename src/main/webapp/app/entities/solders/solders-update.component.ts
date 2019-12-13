import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ISolders, Solders } from 'app/shared/model/solders.model';
import { SoldersService } from './solders.service';

@Component({
  selector: 'jhi-solders-update',
  templateUrl: './solders-update.component.html'
})
export class SoldersUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    fio: [],
    phone: [],
    address: [],
    shop: [],
    plitkaCount: []
  });

  constructor(protected soldersService: SoldersService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ solders }) => {
      this.updateForm(solders);
    });
  }

  updateForm(solders: ISolders) {
    this.editForm.patchValue({
      id: solders.id,
      fio: solders.fio,
      phone: solders.phone,
      address: solders.address,
      shop: solders.shop,
      plitkaCount: solders.plitkaCount
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const solders = this.createFromForm();
    if (solders.id !== undefined) {
      this.subscribeToSaveResponse(this.soldersService.update(solders));
    } else {
      this.subscribeToSaveResponse(this.soldersService.create(solders));
    }
  }

  private createFromForm(): ISolders {
    return {
      ...new Solders(),
      id: this.editForm.get(['id']).value,
      fio: this.editForm.get(['fio']).value,
      phone: this.editForm.get(['phone']).value,
      address: this.editForm.get(['address']).value,
      shop: this.editForm.get(['shop']).value,
      plitkaCount: this.editForm.get(['plitkaCount']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ISolders>>) {
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
