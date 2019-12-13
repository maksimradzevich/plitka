import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IClients, Clients } from 'app/shared/model/clients.model';
import { ClientsService } from './clients.service';

@Component({
  selector: 'jhi-clients-update',
  templateUrl: './clients-update.component.html'
})
export class ClientsUpdateComponent implements OnInit {
  isSaving: boolean;

  editForm = this.fb.group({
    id: [],
    fio: [],
    phone: [],
    address: [],
    totalPrice: []
  });

  constructor(protected clientsService: ClientsService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ clients }) => {
      this.updateForm(clients);
    });
  }

  updateForm(clients: IClients) {
    this.editForm.patchValue({
      id: clients.id,
      fio: clients.fio,
      phone: clients.phone,
      address: clients.address,
      totalPrice: clients.totalPrice
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const clients = this.createFromForm();
    if (clients.id !== undefined) {
      this.subscribeToSaveResponse(this.clientsService.update(clients));
    } else {
      this.subscribeToSaveResponse(this.clientsService.create(clients));
    }
  }

  private createFromForm(): IClients {
    return {
      ...new Clients(),
      id: this.editForm.get(['id']).value,
      fio: this.editForm.get(['fio']).value,
      phone: this.editForm.get(['phone']).value,
      address: this.editForm.get(['address']).value,
      totalPrice: this.editForm.get(['totalPrice']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<IClients>>) {
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
