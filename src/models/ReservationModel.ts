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
    if (typeof this._formdata.lastName === 'string') {
      return this._formdata.lastName;
    } else {
      throw new Error("n'est pas un string");
    }
  }
  
  private checkFirstName(): string {
    if (typeof this._formdata.firstName === 'string') {
      return this._formdata.firstName;
    } else {
      throw new Error("n'est pas un string");
    }
  }
  
  private checkEmail(): string {
    if (typeof this._formdata.email === 'string') {
      return this._formdata.email;
    } else {
      throw new Error("n'est pas un string");
    }
  }
  
  private checkCellphone(): number {
    if (typeof this._formdata.cellphone === 'number') {
      return this._formdata.cellphone;
    } else {
      throw new Error("n'est pas un number");
    }
  }
  
  private checkEventNature(): string {
    if (typeof this._formdata.eventNature === 'string') {
      return this._formdata.eventNature;
    } else {
      throw new Error("n'est pas un string");
    }
  }
  
  private checkEventDate(): Date {
    const dateString = this._formdata.eventDate;
    if (typeof dateString === 'string') {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return date;
      } else {
        throw new Error("n'est pas une date valide");
      }
    } else {
      throw new Error("n'est pas un string");
    }
  }
  
  private checkEventHour(): string {
    if (typeof this._formdata.eventHour === 'string') {
      return this._formdata.eventHour;
    } else {
      throw new Error("n'est pas un string");
    }
  }
  
  private checkEventDistrict(): string {
    if (typeof this._formdata.eventDistrict === 'string') {
      return this._formdata.eventDistrict;
    } else {
      throw new Error("n'est pas un string");
    }
  }
  
  private checkEventPeople(): number {
    if (typeof this._formdata.eventPeople === 'number') {
      return this._formdata.eventPeople;
    } else {
      throw new Error("n'est pas un number");
    }
  }
  
  private checkEventAgeAverage(): string {
    if (typeof this._formdata.eventAgeAverage === 'string') {
      return this._formdata.eventAgeAverage;
    } else {
      throw new Error("n'est pas un string");
    }
  }
  
  private checkEventPreferredCity(): string {
    if (typeof this._formdata.eventPreferredCity === 'string') {
      return this._formdata.eventPreferredCity;
    } else {
      throw new Error("n'est pas un string");
    }
  }
  
  private checkEventVenue(): string {
    if (typeof this._formdata.eventVenue === 'string') {
      return this._formdata.eventVenue;
    } else {
      throw new Error("n'est pas un string");
    }
  }
  
  private checkEventType(): string {
    if (typeof this._formdata.eventType === 'string' && this._formdata.eventType !== '') {
      return this._formdata.eventType;
    } else {
      throw new Error("eventType est vide ou n'est pas un string");
    }
  }
  
  private checkEventCaterer(): string {
    if (typeof this._formdata.eventCaterer === 'string' && this._formdata.eventCaterer !== '') {
      return this._formdata.eventCaterer;
    } else {
      throw new Error("eventCaterer est vide ou n'est pas un string");
    }
  }
  
  private checkEventQuotation(): string {
    if (typeof this._formdata.eventQuotation === 'string' && this._formdata.eventQuotation !== '') {
      return this._formdata.eventQuotation;
    } else {
      throw new Error("eventQuotation est vide ou n'est pas un string");
    }
  }
  
  private checkEventBudget(): number {
    const budget = Number(this._formdata.eventBudget);
    if (!isNaN(budget) && budget >= 0) {
      return budget;
    } else {
      throw new Error("eventBudget n'est pas un number valide");
    }
  }
  
  private checkEventAccomodation(): string {
    if (typeof this._formdata.eventAccomodation === 'string' && this._formdata.eventAccomodation !== '') {
      return this._formdata.eventAccomodation;
    } else {
      throw new Error("eventAccomodation est vide ou n'est pas un string");
    }
  }
  
  private checkEventBedding(): number {
    const bedding = Number(this._formdata.eventBedding);
    if (!isNaN(bedding) && bedding >= 0) {
      return bedding;
    } else {
      throw new Error("eventBedding n'est pas un number valide");
    }
  }
  
  private checkEventDetails(): string {
    if (typeof this._formdata.eventDetails === 'string' && this._formdata.eventDetails !== '') {
      return this._formdata.eventDetails;
    } else {
      throw new Error("eventDetails est vide ou n'est pas un string");
    }
  }
  
  private checkCguCheck(): boolean {
    if (typeof this._formdata.cguChecked === 'boolean' && this._formdata.cguChecked === true) {
      return this._formdata.cguChecked;
    } else {
      throw new Error("cguChecked n'est pas coché ou n'est pas un boolean");
    }
  }

  public validateForm() {
    console.log(this._formdata);
    this._form.querySelectorAll('input, select, textarea').forEach((input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
      const name = input.name;
      try {

        this['check' + name.charAt(0).toUpperCase()+name.slice(1)]();
        
        console.log(name + ` c'est valide`);
        
        
      } catch (error) {
        console.log(name +" erreur");
        
      }
    });
  }
}
