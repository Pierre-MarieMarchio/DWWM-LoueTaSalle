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
    if (this._formdata.lastName instanceof String) {
      return this._formdata.lastName;
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

  private checkEmail(): string {
    if (this._formdata.checkEmail instanceof String) {
      return this._formdata.checkEmail;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkCellphone(): number {
    if (this._formdata.checkCellphone instanceof Number) {
      return this._formdata.checkCellphone;
    } else {
      throw new Error("n'est pas un number");
    }
  }

  private checkEventNature(): string {
    if (this._formdata.checkEventNature instanceof String) {
      return this._formdata.checkEventNature;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkEventDate(): Date {
    if (this._formdata.checkEventDate instanceof Date) {
      return this._formdata.checkEventDate;
    } else {
      throw new Error("n'est pas un date");
    }
  }

  private checkEventHour(): string {
    if (this._formdata.checkEventHour instanceof String) {
      return this._formdata.checkEventHour;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkEventDistrict(): string {
    if (this._formdata.checkEventDistrict instanceof String) {
      return this._formdata.checkEventDistrict;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkEventPeople(): number {
    if (this._formdata.checkEventPeople instanceof Number) {
      return this._formdata.checkEventPeople;
    } else {
      throw new Error("n'est pas un number");
    }
  }

  private checkEventAgeAverage(): string {
    if (this._formdata.checkEventAgeAverage instanceof String) {
      return this._formdata.checkEventAgeAverage;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkEventPreferredCity(): string {
    if (this._formdata.checkEventPreferredCity instanceof String) {
      return this._formdata.checkEventPreferredCity;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkEventVenue(): string {
    if (this._formdata.checkEventVenue instanceof String) {
      return this._formdata.checkEventVenue;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkEventType(): string { }

  private checkEventCaterer(): string { }

  private checkEventQuotation(): string { }

  private checkEventBudget(): number { }

  private checkEventAccomodation(): string { }

  private checkEventBedding(): number { }

  private checkEventDetails(): string { }

  private checkCguCheck(): boolean { }

  private valideForm(): {
    
  }
}
