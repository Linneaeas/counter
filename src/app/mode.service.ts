import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModeService {
  private isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  isDarkTheme() {
    return this.isDarkMode;
  }
  constructor() { }
}
