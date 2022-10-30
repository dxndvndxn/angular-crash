import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss'],
})
export class GlobalErrorComponent implements OnInit {
  error = '';
  constructor(public errorService: ErrorService) {}

  ngOnInit(): void {
    this.errorService.error$.subscribe((error) => (this.error = error));
  }
}
