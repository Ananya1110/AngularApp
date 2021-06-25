import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Myapp';
  constructor(){
    // setTimeout(()=>{
    //   this.title="welcome";

    // },2000);
  }
}
