import { Component } from '@angular/core';
import { ModeService } from './mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter';
  count=0;

  constructor(private modeService: ModeService) {}

  counter(type:string){
    type==='add'?this.count++:this.count--
  }

  toggleTheme() {
    this.modeService.toggleTheme();
  }
  isDarkTheme() {
    return this.modeService.isDarkTheme();
  }
}
