import { Component } from '@angular/core';

@Component({
  selector: 'app-receive-rate',
  standalone: true,
  imports: [],
  templateUrl: './receive-rate.component.html',
  styleUrl: './receive-rate.component.css'
})
export class ReceiveRateComponent {
  count : number=0; 
    
    increase(){
      this.count++;
    }


}
