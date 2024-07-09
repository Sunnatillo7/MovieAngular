import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastr = inject(ToastrService)



  showSuccess(text: string, title?: string) {
    this.toastr.success(text, title);
  }
  showError(text: string, title?: string) {
    this.toastr.error(text, title);
  }
  showWarning(text: string, title?: string) {
    this.toastr.warning(text, title);
  }

}
