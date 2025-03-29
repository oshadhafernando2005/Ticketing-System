import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ConfigureComponent } from './configure/configure.component';
import { UserComponent } from './user/user.component';
import {IssueTicketComponent} from './issue-ticket/issue-ticket.component'
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';





export const routes: Routes = [
  // This is the default route that loads UserComponent first when the app starts
  { path: '', redirectTo: 'Issue', pathMatch: 'full' },
  
  // Routes for other components
  { path: 'User', component: UserComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Control', component: ControlPanelComponent },
  { path: 'Configure', component: ConfigureComponent },
  { path: 'Issue', component: IssueTicketComponent },
  { path: 'Buy', component: BuyTicketComponent },

  
];
