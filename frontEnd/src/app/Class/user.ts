export class User {
    id: string ='';
    name: string = '';
    userType: string = '';
    earlyBirdTickets: number=0;
    generalTickets: number=0;
    lastMinuteTickets: number=0;
    ticketsPerIssue: number=0;
    ticketInterval: number=0;


    constructor(
        id: string = '',
        name: string = '',
        userType: string = '',
        earlyBirdTickets: number = 0,
        generalTickets: number = 0,
        lastMinuteTickets: number = 0,
        ticketsPerIssue: number = 0,
        ticketInterval: number = 0
      ) {
        this.id = id;
        this.name = name;
        this.userType = userType;
        this.earlyBirdTickets = earlyBirdTickets;
        this.generalTickets = generalTickets;
        this.lastMinuteTickets = lastMinuteTickets;
        this.ticketsPerIssue = ticketsPerIssue;
        this.ticketInterval = ticketInterval;
      }



}
