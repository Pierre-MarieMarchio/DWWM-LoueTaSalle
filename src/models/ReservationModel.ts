export interface ReservationModel {
    lastName: string;
    firstName: string;
    email: string;
    cellphone: number;
    eventNature: string; 
    eventDate: Date;
    eventHour: string; 
    eventDistrict: string; 
    eventPeople: number;
    eventAgeAverage: string; 
    eventPreferredCity: string; 
    eventVenue: string; 
    eventType: string; 
    eventCaterer: string; 
    eventQuotation: string; 
    eventBudget: number;
    eventAccomodation: string; 
    eventBedding: number;
    eventDetails: string;
    cguChecked: boolean; 
}

export default class BookingModel {
    private _formdata: any;
    private _formresult: ReservationModel;
}