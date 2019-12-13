import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IAdmins, Admins } from 'app/shared/model/admins.model';
import { AdminsService } from './admins.service';

@Component({
  selector: 'jhi-admins-update',
  templateUrl: './admins-update.component.html'
})
export class AdminsUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    fio: [],
    phone: [],
    shopAddress: []
  });

  constructor(protected adminsService: AdminsService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ admins }) => {
      this.updateForm(admins);
    });
  }

  updateForm(admins: IAdmins) {
    this.editForm.patchValue({
      id: admins.id,
      fio: admins.fio,
      phone: admins.phone,
      shopAddress: admins.shopAddress
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const admins = this.createFromForm();
    if (admins.id !== undefined) {
      this.subscribeToSaveResponse(this.adminsService.update(admins));
    } else {
      this.subscribeToSaveResponse(this.adminsService.create(admins));
    }
  }

  private createFromForm(): IAdmins {
    return {
      ...new Admins(),
      id: this.editForm.get(['id']).value,
      fio: this.editForm.get(['fio']).value,
      phone: this.editForm.get(['phone']).value,
      shopAddress: this.editForm.get(['shopAddress']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IAdmins>>) {
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
