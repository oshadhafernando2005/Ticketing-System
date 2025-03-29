import { Component,HostListener, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeftSidebarComponent} from '../left-sidebar/left-sidebar.component';
import {MainComponent} from '../main/main.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [RouterOutlet,LeftSidebarComponent,MainComponent,CommonModule,UserComponent],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.scss'
})
export class SplashComponent {

  showHeader = true;

  
  title = 'Real_Time_Event_Ticketing_System';
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize') // Detect screen resize events
  onResize(){
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768){
      this.isLeftSidebarCollapsed.set(true);
    } else{
      this.isLeftSidebarCollapsed.set(false);
    }

  }
  ngOnInit(): void {
    setTimeout(() => {
      this.showHeader = false;
    }, 10000);
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void{
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }


}
