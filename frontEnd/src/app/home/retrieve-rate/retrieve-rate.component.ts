import { Component } from '@angular/core';

@Component({
  selector: 'app-retrieve-rate',
  standalone: true,
  imports: [],
  templateUrl: './retrieve-rate.component.html',
  styleUrl: './retrieve-rate.component.css'
})
export class RetrieveRateComponent {
  count : number=0; 
    
    increase(){
      this.count++;
    }

}
