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
  eventType: string; // PM à partir de là
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
    if (typeof this._formdata.lastName === "string") {
      if (this._formdata.lastName.length > 1 && this._formdata.lastName.length < 42) {
        return this._formdata.lastName;
      } else {
        throw new Error("Le nom de famille est soit trop court, soit trop long.");
      }
    } else {
      throw new Error("Le nom de famille n'est pas une chaîne de caractères");
    }
  }

  private checkFirstName(): string {
    if (typeof this._formdata.firstName === "string") {
      if (this._formdata.firstName > 1 && this._formdata.firstName < 42) {
        return this._formdata.firstName;
      } else {
        throw new Error("Le prénom est soit trop court, soit trop long.");
      }
    } else {
      throw new Error("Le prénom n'est pas un string");
    }
  }

  private checkEmail(): string {
    if (typeof this._formdata.checkEmail === "string") {
      return this._formdata.checkEmail;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkCellphone(): number {
    if (typeof this._formdata.checkCellphone === "string") {
      return this._formdata.checkCellphone;
    } else {
      throw new Error("n'est pas un number");
    }
  }

  private checkEventNature(): string {
    if (typeof this._formdata.checkEventNature === "string") {
      return this._formdata.checkEventNature;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkEventDate(): Date {
    if (typeof this._formdata.checkEventDate === "string") {
      return this._formdata.checkEventDate;
    } else {
      throw new Error("n'est pas un date");
    }
  }

  private checkEventHour(): string {
    if (typeof this._formdata.checkEventHour === "string") {
      return this._formdata.checkEventHour;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkEventDistrict(): string {
    if (typeof this._formdata.checkEventDistrict === "string") {
      return this._formdata.checkEventDistrict;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkEventPeople(): number {
    if (typeof this._formdata.checkEventPeople === "string") {
      return this._formdata.checkEventPeople;
    } else {
      throw new Error("n'est pas un number");
    }
  }

  private checkEventAgeAverage(): string {
    if (typeof this._formdata.checkEventAgeAverage === "string") {
      return this._formdata.checkEventAgeAverage;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkEventPreferredCity(): string {
    if (typeof this._formdata.checkEventPreferredCity === "string") {
      return this._formdata.checkEventPreferredCity;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkEventVenue(): string {
    if (typeof this._formdata.checkEventVenue === "string") {
      return this._formdata.checkEventVenue;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkEventType(): string {
    if (typeof this._formdata.eventType === "string") {
      return this._formdata.event;
    } else {
      throw new Error("eventType n'est pas un string");
    }
  }

  private checkEventCaterer(): string {
    if (typeof this._formdata.eventCaterer === "string") {
      return this._formdata.eventCaterer;
    } else {
      throw new Error("eventCaterer n'est pas un string");
    }
  }

  private checkEventQuotation(): string {
    if (typeof this._formdata.eventQuotation === "string") {
      return this._formdata.eventQuotation;
    } else {
      throw new Error("eventQuotation n'est pas un string");
    }
  }

  private checkEventBudget(): number {
    if (typeof this._formdata.eventBudget === "string") {
      return this._formdata.eventBudget;
    } else {
      throw new Error("eventBudget n'est pas un string");
    }
  }

  private checkEventAccomodation(): string {
    if (typeof this._formdata.eventAccomodation === "string") {
      return this._formdata.eventAccomodation;
    } else {
      throw new Error("eventAccomodation n'est pas un string");
    }
  }

  private checkEventBedding(): number {
    if (typeof this._formdata.eventBedding === "string") {
      return this._formdata.eventBedding;
    } else {
      throw new Error("eventBedding n'est pas un string");
    }
  }


  private checkEventDetails(): string {
    if (typeof this._formdata.eventDetails === "string") {
      return this._formdata.eventDetails;
    } else {
      throw new Error("eventDetails n'est pas un string");
    }
  }

  private checkCguCheck(): boolean {
    if (typeof this._formdata.cguChecked === "boolean") {
      return this._formdata.cguChecked;
    } else {
      throw new Error("cguChecked n'est pas un string");
    }
  }

  public validateForm() {
    this._form.querySelectorAll("input, select, textarea").forEach((field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
      const name = field.name;

      try {
        this['check' + name.charAt(0).toUpperCase() + name.slice(1)]();
        console.log(name + " c'est validé");
        //field.classList.remove('is-invalid');
        //field.classList.add('is-valid');
      } catch (error) {
        console.log(name + " c'est pas validé");
        //field.classList.remove('is-valid');
        //field.classList.add('is-invalid');
        // TODO
        //const errorElement = field.parentElement.querySelector('.invalid-feedback');
        //if (errorElement) {
        //  errorElement.textContent = error.message;
        //}
      }

    });
  }
}
