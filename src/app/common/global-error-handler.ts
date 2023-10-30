import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any) {
    // Handle the error here
    console.error('An error occurred:', error);
  }
}