import { Component } from '@angular/core';
import {MaxWidgetComponent} from './max-widget/max-widget.component';
import {TotalWigetComponent} from './total-wiget/total-wiget.component';
import {ReceiveRateComponent} from './receive-rate/receive-rate.component';
import { RetrieveRateComponent } from './retrieve-rate/retrieve-rate.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaxWidgetComponent, TotalWigetComponent,ReceiveRateComponent,RetrieveRateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  
})
export class HomeComponent {

    imageUrl: string = 'event.jpg'; 

    
    }
