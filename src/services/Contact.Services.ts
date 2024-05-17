import ContactModel from "../models/ContactModel";
import FormBaseServices from "./FormBase.Services";

export default class ContactService extends FormBaseServices<ContactModel> {
 

  constructor(formSubmit: any, keyItem: string, form: HTMLFormElement) {
    super(formSubmit, keyItem, form)
 
  }

  protected validateFormResult(formResult: any): boolean {

    console.log(formResult);
    
    if (typeof formResult.id !== "string") {
      console.log(formResult.id);
      
      console.error("Invalid type for id:", typeof formResult.id);
      return false;
    }
    if (typeof formResult.company !== "string") {
      console.error("Invalid type for company:", typeof formResult.company);
      return false;
    }
    if (typeof formResult.lastName !== "string") {
      console.error("Invalid type for lastname:", typeof formResult.lastname);
      return false;
    }
    if (typeof formResult.firstName !== "string") {
      console.error("Invalid type for firstname:", typeof formResult.firstname);
      return false;
    }
    if (typeof formResult.country !== "string") {
      console.error("Invalid type for country:", typeof formResult.country);
      return false;
    }
    if (typeof formResult.city !== "string") {
      console.error("Invalid type for city:", typeof formResult.city);
      return false;
    }
    if (typeof formResult.number !== "string") {
      console.error("Invalid type for number:", typeof formResult.number);
      return false;
    }
    if (typeof formResult.validationTextarea !== "string") {
      console.error("Invalid type for validationTextarea:", typeof formResult.validationTextarea);
      return false;
    }
    if (typeof formResult.mail !== "string") {
      console.error("Invalid type for mail:", typeof formResult.mail);
      return false;
    }
  
    console.log("formResult type is valid");
    return true;
  }

  
  private checkCompany(): string {
    if (typeof this._formdata.company === "string") {
      if (
        this._formdata.company.length > 1 &&
        this._formdata.company.length < 42
      ) {
        return this._formdata.company;
      } else {
        throw new Error(
          "Le nom de la société doit contenir entre 2 et 50 caractères."
        );
      }
    } else {
      throw new Error(
        "Le nom de la société doit être une chaine de caractères"
      );
    }
  }

  private checkLastName(): string {
    if (typeof this._formdata.lastName === "string") {
      if (
        this._formdata.lastName.length > 1 &&
        this._formdata.lastName.length < 42
      ) {
        return this._formdata.lastName;
      } else {
        throw new Error(
          "Le nom de famille doit contenir entre 2 et 50 caractères."
        );
      }
    } else {
      throw new Error("Le nom de famille doit être une chaine de caractères");
    }
  }

  private checkFirstName(): string {
    if (typeof this._formdata.firstName === "string") {
      if (
        this._formdata.firstName.length > 1 &&
        this._formdata.firstName.length < 42
      ) {
        return this._formdata.firstName;
      } else {
        throw new Error("Le prénom doit contenir entre 2 et 50 caractères.");
      }
    } else {
      throw new Error("Le prénom doit être une chaine de caractères");
    }
  }

  private checkCountry(): string {
    if (this._formdata.country === "France") {
      return this._formdata.country;
    } else {
      throw new Error("Error Country France");
    }
  }
  private checkCity(): string {
    if (
      this._formdata.city === "Paris" ||
      this._formdata.city === "Lyon" ||
      this._formdata.city === "Marseille"
    ) {
      return this._formdata.city;
    } else {
      throw new Error("Error City Paris or Lyon or Marseille");
    }
  }
  private checkMail(): string {
    if (typeof this._formdata.mail === "string") {
      const mailRegex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!mailRegex.test(this._formdata.mail)) {
        throw new Error("Format mail non valide");
      } else {
        return this._formdata.mail;
      }
    } else {
      throw new Error("Error Mail");
    }
  }
  private checkNumber(): string {
    if (typeof this._formdata.number === "string") {
      const phoneNumberRegex = /^0[0-9]{9}$/;
      if (!phoneNumberRegex.test(this._formdata.number)) {
        throw new Error(
          "Le numéro de téléphone de la société doit commencer par 0 et contenir exactement 10 chiffres."
        );
      } else {
        return this._formdata.number;
      }
    } else {
      throw new Error("Error Number");
    }
  }
  private checkValidationTextarea(): string {
    if (
      typeof this._formdata.validationTextarea === "string" &&
      this._formdata.validationTextarea !== ""
    ) {
      return this._formdata.validationTextarea;
    } else {
      throw new Error("ValidationTextarea est vide ou n'est pas un string");
    }
  }

}
