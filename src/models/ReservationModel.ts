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
  private _form: HTMLElement;

  constructor(formSubmit: any, form: HTMLElement) {
    this._form = form;
    this._formdata = formSubmit;
    this._formresult = null;
  }

  [key: string]: any;

  set formdata(data: any) {
    this._formdata = data;
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

  public validateForm() {
    console.log(this._formdata);
   
  }
}
