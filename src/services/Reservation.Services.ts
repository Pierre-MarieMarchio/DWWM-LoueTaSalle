import ReservationModel from "../models/ReservationModel";
import Services from "./Services"

export default class ReservationService extends Services<ReservationModel> {


  constructor(formSubmit: any, form: HTMLElement) {
    super(formSubmit, form);
  
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
      if (this._formdata.firstName.length > 1 && this._formdata.firstName.length < 42) {
        return this._formdata.firstName;
      } else {
        throw new Error("Le prénom est soit trop court, soit trop long.");
      }
    } else {
      throw new Error("Le prénom n'est pas un string.");
    }
  }

  private checkEmail(): string {
    function testEmail(email: string) {
      var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return re.test(email);
    }

    if (typeof this._formdata.email === "string") {
      if (this._formdata.email.length > 3 && this._formdata.email.length < 42) {
        if (testEmail(this._formdata.email)) {
          return this._formdata.email;
        } else {
          throw new Error("L'email est dans un format invalide.");
        }
      } else {
        throw new Error("L'email est soit trop court, soit trop long.");
      }
    } else {
      throw new Error("L'email n'est pas un string.");
    }
  }

  private checkCellphone(): string {
    function testCellphone(cellphone: string) {
      var re = /^(\d{10})$/;
      return re.test(cellphone);
    }

    if (typeof this._formdata.cellphone === "string") {
      if (this._formdata.cellphone.length == 10) {
        if (testCellphone(this._formdata.cellphone)) {
          return this._formdata.cellphone;
        } else {
          throw new Error("Le numéro de téléphone ne comprends pas 10 chiffres.");
        }
      } else {
        throw new Error("Le numéro de téléphone n'est pas à 10 caractères.");
      }
    } else {
      throw new Error("Le numéro de téléphone n'est pas un string.");
    }
  }

  private checkEventNature(): string {
    if (typeof this._formdata.eventNature === "string") {
      const eventNatureInt = parseInt(this._formdata.eventNature);
      if (eventNatureInt > 0 && eventNatureInt < 15) {
        return this._formdata.eventNature;
      } else {
        throw new Error("La nature de l'évènement sélectionnée n'est pas valide.");
      }
    } else {
      throw new Error("La nature de l'évènement n'est pas un string.");
    }
  }

  private checkEventDate(): Date {
    const eventDateString = this._formdata.eventDate;
    if (typeof eventDateString === "string") {
      const date = new Date(eventDateString);
      if (!isNaN(date.getTime())) {
        return date;
      } else {
        throw new Error("La date de l'évènement n'est pas une date valide.");
      }
    } else {
      throw new Error("La date de l'évènement n'est pas un string.");
    }
  }

  private checkEventHour(): string {
    if (typeof this._formdata.eventHour === "string") {
      const eventHourString = this._formdata.eventHour.replace(":", "");
      const eventHourInt = parseInt(eventHourString);
      if (!this._formdata.eventHour) {
        throw new Error("L'heure de l'évènement n'est pas indiquée.");
      }
      return this._formdata.eventHour;
    }
    else {
      throw new Error("L'heure de l'évènement n'est pas un string.");
    }
  }

  private checkEventDistrict(): string {
    if (typeof this._formdata.eventDistrict === "string") {
      const eventDistrictInt = parseInt(this._formdata.eventDistrict);
      if (eventDistrictInt > 0 && eventDistrictInt < 4) {
        return this._formdata.eventDistrict;
      } else {
        throw new Error("Le département de l'évènement sélectionné n'est pas valide.");
      }
    } else {
      throw new Error("Le département de l'évènement n'est pas un string.");
    }
  }

  private checkEventPeople(): string {

    function testEventPeople(eventPeople: string) {
      var re = /^\d+$/;
      return re.test(eventPeople);
    }

    if (typeof this._formdata.eventPeople === "string") {
      if (testEventPeople(this._formdata.eventPeople)) {
        const eventPeopleInt = parseInt(this._formdata.eventPeople);
        if (eventPeopleInt > 0) {
          return this._formdata.eventPeople;
        } else {
          throw new Error("Le nombre de participant n'est pas supérieur à 0.");
        }
      } else {
        throw new Error("Le nombre de participants n'est pas un/des chiffre(s).");
      }
    } else {
      throw new Error("Le nombre de participants n'est pas un string.");
    }
  }

  private checkEventAgeAverage(): string {

    if (typeof this._formdata.eventAgeAverage === "string") {
      const eventAgeAvrageInt = parseInt(this._formdata.eventAgeAverage);
      if (eventAgeAvrageInt > 0 && eventAgeAvrageInt < 9) {
        return this._formdata.eventAgeAverage;
      } else {
        throw new Error("La moyenne d'âge sélectionné n'est pas valide.");
      }
    } else {
      throw new Error("La moyenned d'âge n'est pas un string.");
    }
  }

  private checkEventPreferredCity(): string {

    function testEventPreferredCity(eventPreferredCity: string) {
      var re = /^[a-zA-ZÀ-ÿ\-'. ]+(?: \d{5})?$/;
      return re.test(eventPreferredCity);
    }

    if (typeof this._formdata.eventPreferredCity === "string") {
      if (testEventPreferredCity(this._formdata.eventPreferredCity)) {
        return this._formdata.eventPreferredCity;
      } else {
        throw new Error("La ville préférée indiquée ne semble pas valide.");
      }
    } else {
      throw new Error("La ville préférée n'est pas un string.");
    }
  }

  private checkEventVenue(): string {
    if (typeof this._formdata.eventVenue === "string") {
      const eventVenueInt = parseInt(this._formdata.eventVenue);
      if (eventVenueInt > 0 && eventVenueInt < 7) {
        return this._formdata.eventVenue;
      } else {
        throw new Error("Le type de lieu sélectionné est invalide.");
      }
    } else {
      throw new Error("Le type de lieu n'est pas un string.");
    }
  }

  private checkEventType(): string {
    if (typeof this._formdata.eventType === "string") {
      const eventTypeInt = parseInt(this._formdata.eventType);
      if (eventTypeInt > 0 && eventTypeInt < 4) {
        return this._formdata.eventType;
      } else {
        throw new Error("Le type d'évènement n'est pas rempli.");
      }
    } else {
      throw new Error("Le type d'évènement n'est pas un string.");
    }
  }

  private checkEventCaterer(): string {
    if (typeof this._formdata.eventCaterer === "string") {
      const eventCatererInt = parseInt(this._formdata.eventCaterer);
      if (eventCatererInt > 0 && eventCatererInt < 3) {
        return this._formdata.eventCaterer;
      } else {
        throw new Error("Le choix d'un traiteur n'est pas rempli.");
      }
    } else {
      throw new Error("Le choix d'un traiteur n'est pas un string.");
    }
  }

  private checkEventQuotation(): string {
    if (typeof this._formdata.eventQuotation === "string") {
      const eventQuotationInt = parseInt(this._formdata.eventQuotation);
      if (eventQuotationInt > 0 && eventQuotationInt < 6) {
        return this._formdata.eventQuotation;
      }
      throw new Error("Le nombre de devis n'est pas rempli.");
    } else {
      throw new Error("Le nombre de devis n'est pas un string.");
    }
  }

  private checkEventBudget(): string {
    if (typeof this._formdata.eventBudget === "string") {
      const eventBudgetInt = parseInt(this._formdata.eventBudget);
      if (eventBudgetInt > 0) {
        return this._formdata.eventBudget;
      } else {
        throw new Error("Le budget de l'évènement n'est pas rempli.");
      }
    } else {
      throw new Error("Le budget de l'évènement n'est pas un string.");
    }
  }

  private checkEventAccomodation(): string {
    if (typeof this._formdata.eventAccomodation === "string") {
      const eventAccomodationInt = parseInt(this._formdata.eventAccomodation);
      if (eventAccomodationInt > 0 && eventAccomodationInt < 3) {
        return this._formdata.eventAccomodation;
      } else {
        throw new Error("L'hébergement de l'évènement n'est pas rempli.");
      }
    } else {
      throw new Error("L'hébergement de l'évènement n'est pas un string.");
    }
  }

  private checkEventBedding(): string {
    if (typeof this._formdata.eventBedding === "string") {
      const eventBeddingInt = parseInt(this._formdata.eventBedding);
      if (eventBeddingInt >= 0) {
        return this._formdata.eventBedding;
      } else {
        throw new Error("Le nombre de couchages de l'évènement n'est pas rempli.");
      }
    } else {
      throw new Error("Le nombre de couchages de l'évènement n'est pas un string.");
    }
  }

  private checkEventDetails(): string {
    if (typeof this._formdata.eventDetails === "string" && this._formdata.eventDetails !== "") {
      return this._formdata.eventDetails;
    } else {
      throw new Error("eventDetails est vide ou n'est pas un string");
    }
  }

  private checkCguCheck(): string {
    if (typeof this._formdata.cguCheck === "string") {
      const cguCheck = Boolean(this._formdata.cguCheck);
      if (this._formdata.cguCheck) {
        return this._formdata.cguCheck;
      } else {
        throw new Error("Les CGU ne sont pas cochés.");
      }
    } else {
      throw new Error("Les CGU n'est pas un boolean.");
    }
  }

  public validateForm(): boolean {
    let isValid: boolean = true;

    let formResult: ReservationModel = {
      lastName: null,
      firstName: null,
      email: null,
      cellphone: null,
      eventNature: null,
      eventDate: null,
      eventHour: null,
      eventDistrict: null,
      eventPeople: null,
      eventAgeAverage: null,
      eventPreferredCity: null,
      eventVenue: null,
      eventType: null,
      eventCaterer: null,
      eventQuotation: null,
      eventBudget: null,
      eventAccomodation: null,
      eventBedding: null,
      eventDetails: null,
      cguChecked: null,
    };

    this._form
      .querySelectorAll("input, select, textarea")
      .forEach((field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
        if (field.type !== "submit") {
          const name = field.name;
          const methodName = "check" + name.charAt(0).toUpperCase() + name.slice(1);

          if (typeof this[methodName] === "function") {
            try {
              const result = (this as any)[methodName]();
              console.log(name + " c'est validé");
              field.classList.remove("is-invalid");
              field.classList.add("is-valid");
              if (formResult.hasOwnProperty(name)) {
                formResult[name] = result;
              }
            } catch (error) {
              console.log(name + " c'est pas validé");
              field.classList.remove("is-valid");
              field.classList.add("is-invalid");
              isValid = false;
            }
          }
        }
      });

    if (isValid) {
      this._formResult = formResult;
      this._formResultArray.push(this._formResult);
      console.log(this._formResult);
    }

    return isValid;
  }

  public createReservation(): void {
    if (this._formResult) {
      localStorage.setItem("Reservation", JSON.stringify(this._formResultArray));
    }
    return;
  }
}
