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

  constructor(formData: any) {
    this._formdata = formData;
    this._formresult = {
      lastName: this.checkLastName(),
      firstName: this.checkFirstName(),
      email: this.checkEmail(),
      cellphone: this.checkCellphone(),
      eventNature: this.checkEventNature(),
      eventDate: this.checkEventDate(),
      eventHour: this.checkEventHour(),
      eventDistrict: this.checkEventDistrict(),
      eventPeople: this.checkEventPeople(),
      eventAgeAverage: this.checkEventAgeAverage(),
      eventPreferredCity: this.checkEventPreferredCity(),
      eventVenue: this.checkEventVenue(),
      eventType: this.checkEventType(),
      eventCaterer: this.checkEventCaterer(),
      eventQuotation: this.checkEventQuotation(),
      eventBudget: this.checkEventBudget(),
      eventAccomodation: this.checkEventAccomodation(),
      eventBedding: this.checkEventBedding(),
      eventDetails: this.checkEventDetails(),
      cguChecked: this.checkCguCheck(),
    };
  }

  private checkLastName(): string {
    if (typeof this._formresult.lastName === "string") {
      return this._formresult.lastName;
    } else {
      throw new Error ("n'est pas un string");
    }
  }

  private checkFirstName(): string {
    if (this._formdata.firstName instanceof String) {
      return this._formdata.firstName;
    } else {
      throw new Error ("n'est pas un string");
    }
  }

  private checkEmail(): string {}

  private checkCellphone(): number {}

  private checkEventNature(): string {}

  private checkEventDate(): Date {}

  private checkEventHour(): any {
    // trouver le type
  }

  private checkEventDistrict(): string {}

  private checkEventPeople(): number {}

  private checkEventAgeAverage(): string {}

  private checkEventPreferredCity(): string {}

  private checkEventVenue(): string {}

  private checkEventType(): string {}

  private checkEventCaterer(): string {}

  private checkEventQuotation(): string {}

  private checkEventBudget(): number {}

  private checkEventAccomodation(): string {}

  private checkEventBedding(): number {}

  private checkEventDetails(): string {}

  private checkCguCheck(): boolean {}
}
