export interface ReservationInterface {
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
  private _formresult: ReservationInterface;

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
      throw new Error("n'est pas un string");
    }
  }

  private checkFirstName(): string {
    if (this._formdata.firstName instanceof String) {
      return this._formdata.firstName;
    } else {
      throw new Error("n'est pas un string");
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

  private checkEventType(): string {
    if (this._formdata.eventType instanceof String) {
      return this._formdata.event;
    } else {
      throw new Error("eventType n'est pas un string");
    }
  }

  private checkEventCaterer(): string {
    if (this._formdata.eventCaterer instanceof String) {
      return this._formdata.eventCaterer;
    } else {
      throw new Error("eventCaterer n'est pas un string");
    }
  }

  private checkEventQuotation(): string {
    if (this._formdata.eventQuotation instanceof String) {
      return this._formdata.eventQuotation;
    } else {
      throw new Error("eventQuotation n'est pas un string");
    }
  }

  private checkEventBudget(): number {
    if (this._formdata.eventBudget instanceof Number) {
      return this._formdata.eventBudget;
    } else {
      throw new Error("eventBudget n'est pas un string");
    }

  }

  private checkEventAccomodation(): string {
    if (this._formdata.eventAccomodation instanceof String) {
      return this._formdata.eventAccomodation;
    } else {
      throw new Error("eventAccomodation n'est pas un string");
    }
  }

  private checkEventBedding(): number {
    if (this._formdata.eventBedding instanceof Number) {
      return this._formdata.eventBedding;
    } else {
      throw new Error("eventBedding n'est pas un string");
    }

  }
  

  private checkEventDetails(): string {

    if (this._formdata.eventDetails instanceof String) {
      return this._formdata.eventDetails;
    } else {
      throw new Error("eventDetails n'est pas un string");
    }

  }

  private checkCguCheck(): boolean {
    if (this._formdata.cguChecked instanceof Boolean) {
      return this._formdata.cguChecked;
    } else {
      throw new Error("cguChecked n'est pas un string");
    }

  }
}
