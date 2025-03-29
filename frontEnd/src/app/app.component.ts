import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeftSidebarComponent} from './left-sidebar/left-sidebar.component';
import {MainComponent} from './main/main.component';
import { NgZone } from '@angular/core';
import {SplashComponent} from './splash/splash.component'



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LeftSidebarComponent,MainComponent,SplashComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }


  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void{
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

}
