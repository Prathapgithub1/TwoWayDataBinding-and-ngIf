import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp1';
  public data:string='';
  clearData():any{
    this.data='';
    if(this.data ===""){
      alert('dont click clear button when input empty')
    }
  }
}
