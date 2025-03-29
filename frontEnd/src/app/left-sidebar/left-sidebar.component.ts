import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {


  isLeftSidebarCollapsed=input.required<boolean>();
  changeIsLeftSidebarCollapsed=output<boolean>();




  items =[

    {
      routeLink: 'Home',
      icon: 'fas fa-home',
      label: 'Home' ,
    },
    {
      routeLink: 'Configure',
      icon: 'fas fa-file-alt',
      label: 'Configure Form' ,
    },
    {
      routeLink: 'User',
      icon: 'fas fa-user',
      label: 'User' ,
    },
  
    // {
    //   routeLink: 'Control',
    //   icon: 'fas fa-cogs',
    //   label: 'Control' ,
    // },
    
    {routeLink: 'Dashboard',
      icon: 'fas fa-tachometer-alt',
      label: 'Dashboard' ,
      
    }
    

    
  ];
  toggleCollapse(): void{
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed);
  
  }

  closeSidenav(): void{
    this.changeIsLeftSidebarCollapsed.emit(true);

  }
  
}
