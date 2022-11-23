import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal/alert-modal.component';

enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning'
}
enum IconTypes {
  DANGER = 'bi bi-x-circle',
  SUCCESS = 'bi bi-check2-circle',
  WARNING = 'bi bi-exclamation-triangle'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(public modalService: BsModalService) { }

  private showAlert(message: string, type: string, icon: string) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
    bsModalRef.content.icon = icon;
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertTypes.DANGER, IconTypes.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertTypes.SUCCESS, IconTypes.SUCCESS);
  }

  showAlertWarning(message: string) {
    this.showAlert(message, AlertTypes.WARNING, IconTypes.WARNING);
  }
}
