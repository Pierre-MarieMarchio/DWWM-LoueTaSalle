import ReservationModel from "../models/ReservationModel";

export default class ReservationService {
  private _formdata: any;
  private _formresult: ReservationModel | null;
  private _form: HTMLElement;

  private _testData: ReservationModel = {
    lastName: "string",
    firstName: "string",
    email: "string",
    cellphone: 120,
    eventNature: "string",
    eventDate: new Date(),
    eventHour: "string",
    eventDistrict: "string",
    eventPeople: 123,
    eventAgeAverage: "string",
    eventPreferredCity: "string",
    eventVenue: "string",
    eventType: "string", // PM à partir de là
    eventCaterer: "string",
    eventQuotation: "string",
    eventBudget: 123,
    eventAccomodation: "string",
    eventBedding: 123,
    eventDetails: "string",
    cguChecked: true,
  };

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
      throw new Error("Le nom de famille n'est pas une chaîne de caractères.");
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
      throw new Error("Le prénom n'est pas un string.");
    }
  }

  private checkEmail(): string {
    function checkEmail(email: string) {
      var re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }

    if (typeof this._formdata.email === "string") {
      try {
        checkEmail(this._formdata.email);
        return this._formdata.email;
      } catch (error) {
        throw new Error("L'adresse email n'est pas valide.");
      }
    } else {
      throw new Error("L'adresse email n'est pas un string.");
    }
  }

  private checkCellphone(): number {
    if (typeof this._formdata.cellphone === "number") {
      return this._formdata.cellphone;
    } else {
      throw new Error("n'est pas un number");
    }
  }

  private checkEventNature(): string {
    if (typeof this._formdata.eventNature === "string") {
      return this._formdata.eventNature;
    } else {
      throw new Error("n'est pas un string");
    }
  }

  private checkEventDate(): Date {
    const dateString = this._formdata.eventDate;
    if (typeof dateString === "string") {
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
    if (typeof this._formdata.eventType === "string" && this._formdata.eventType !== "") {
      return this._formdata.eventType;
    } else {
      throw new Error("eventType est vide ou n'est pas un string");
    }
  }

  private checkEventCaterer(): string {
    if (typeof this._formdata.eventCaterer === "string" && this._formdata.eventCaterer !== "") {
      return this._formdata.eventCaterer;
    } else {
      throw new Error("eventCaterer est vide ou n'est pas un string");
    }
  }

  private checkEventQuotation(): string {
    if (typeof this._formdata.eventQuotation === "string" && this._formdata.eventQuotation !== "") {
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
    if (typeof this._formdata.eventAccomodation === "string" && this._formdata.eventAccomodation !== "") {
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
    if (typeof this._formdata.eventDetails === "string" && this._formdata.eventDetails !== "") {
      return this._formdata.eventDetails;
    } else {
      throw new Error("eventDetails est vide ou n'est pas un string");
    }
  }

  private checkCguCheck(): boolean {
    if (typeof this._formdata.cguChecked === "boolean" && this._formdata.cguChecked === true) {
      return this._formdata.cguChecked;
    } else {
      throw new Error("cguChecked n'est pas coché ou n'est pas un boolean");
    }
  }

  public validateForm() {
    this._form
      .querySelectorAll("input, select, textarea")
      .forEach((field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
        const name = field.name;

        try {
          this["check" + name.charAt(0).toUpperCase() + name.slice(1)]();
          console.log(name + " c'est validé");
          field.classList.remove('is-invalid');
          field.classList.add('is-valid');
        } catch (error) {
          console.log(name + " c'est pas validé");
          field.classList.remove('is-valid');
          field.classList.add('is-invalid');
          // TODO
          //const errorElement = field.parentElement.querySelector('.invalid-feedback');
          //if (errorElement) {
          //  errorElement.textContent = error.message;
          //}
        }
      });
  }

  public creatReservation(): void {
    this._formresult = this._testData;
    localStorage.setItem("Reservation", JSON.stringify(this._formresult));
  }

}
