import ContactModel from "../models/ContactModel";

export default class ContactService {
  private _formdataContact: any;
  private _form: HTMLElement;
  private _formresult: ContactModel | null;

  private _testData: ContactModel = {
    company: "string",
    lastname: "string",
    firstname: "string",
    country: "string",
    city: "string",
    number: "6060625",
    validationTextarea: "string",
    mail: "string",
  };

  constructor(formSubmit: any, form: HTMLElement) {
    this._form = form;
    this._formdataContact = formSubmit;
    this._formresult = null;
  }

  [key: string]: any;

  set formdataContact(data: any) {
    this._formdataContact = data;
  }
  private checkCompany(): string {
    if (typeof this._formdataContact.company === "string") {
      if (
        this._formdataContact.company.length > 1 &&
        this._formdataContact.company.length < 42
      ) {
        return this._formdataContact.company;
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

  private checkLastname(): string {
    if (typeof this._formdataContact.lastname === "string") {
      if (
        this._formdataContact.lastname.length > 1 &&
        this._formdataContact.lastname.length < 42
      ) {
        return this._formdataContact.lastname;
      } else {
        throw new Error(
          "Le nom de famille doit contenir entre 2 et 50 caractères."
        );
      }
    } else {
      throw new Error("Le nom de famille doit être une chaine de caractères");
    }
  }

  private checkFirstname(): string {
    if (typeof this._formdataContact.firstname === "string") {
      if (
        this._formdataContact.firstname.length > 1 &&
        this._formdataContact.firstname.length < 42
      ) {
        return this._formdataContact.firstname;
      } else {
        throw new Error("Le prénom doit contenir entre 2 et 50 caractères.");
      }
    } else {
      throw new Error("Le prénom doit être une chaine de caractères");
    }
  }

  private checkCountry(): string {
    if (this._formdataContact.country === "France") {
      return this._formdataContact.country;
    } else {
      throw new Error("Error Country France");
    }
  }
  private checkCity(): string {
    if (
      this._formdataContact.city === "Paris" ||
      this._formdataContact.city === "Lyon" ||
      this._formdataContact.city === "Marseille"
    ) {
      return this._formdataContact.city;
    } else {
      throw new Error("Error City Paris or Lyon or Marseille");
    }
  }
  private checkMail(): any {
    if (typeof this._formdataContact.mail === "string") {
      const mailRegex =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!mailRegex.test(this._formdataContact.mail)) {
        throw new Error("Format mail non valide");
      } else {
        return this._formdataContact.mail;
      }
    } else {
      throw new Error("Error Mail");
    }
  }
  private checkNumber(): any {
    if (typeof this._formdataContact.number === "string") {
      const phoneNumberRegex = /^0[0-9]{9}$/;
      if (!phoneNumberRegex.test(this._formdataContact.number)) {
        throw new Error(
          "Le numéro de téléphone de la société doit commencer par 0 et contenir exactement 10 chiffres."
        );
      } else {
        return this._formdataContact.number;
      }
    } else {
      throw new Error("Error Number");
    }
  }
  private checkValidationTextarea(): any {
    if (
      typeof this._formdataContact.validationTextarea === "string" &&
      this._formdataContact.validationTextarea !== ""
    ) {
      return this._formdataContact.validationTextarea;
    } else {
      throw new Error("ValidationTextarea est vide ou n'est pas un string");
    }
  }

  public validateForm() {
    let isValid: boolean = false;
    let formResultContact: ContactModel = {
      company: null,
      lastname: null,
      firstname: null,
      country: null,
      city: null,
      number: null,
      validationTextarea: null,
      mail: null,
    };

    this._form
      .querySelectorAll("input,select,textarea")
      .forEach(
        (field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
          if (field.type !== "submit") {
            const name = field.name;

            try {
              const result =
                this["check" + name.charAt(0).toUpperCase() + name.slice(1)]();
              console.log(name + " c'est validé");
              field.classList.remove("is-invalid");
              field.classList.add("is-valid");
              if (formResultContact.hasOwnProperty(name)) {
                isValid = true;
                formResultContact[name] = result;
              }
            } catch (error) {
              console.log(name + " c'est pas validé");
              field.classList.remove("is-valid");
              field.classList.add("is-invalid");
              isValid = false;
            }
          }
        }
      );
    if (isValid) {
      this._formresult = formResultContact;
      this._formresultArray.push(this._formresult);
      console.log(this._formresult);
    }
    return isValid;
  }

  // this._form
  //   .querySelectorAll("input, select, textarea")
  //   .forEach(
  //     (field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
  //       const name = field.name;

  //       try {
  //         this["check" + name.charAt(0).toUpperCase() + name.slice(1)]();
  //         console.log(name + " c'est validé");
  //         //field.classList.remove('is-invalid');
  //         //field.classList.add('is-valid');
  //       } catch (error) {
  //         console.log(name + " c'est pas validé");
  //         //field.classList.remove('is-valid');
  //         //field.classList.add('is-invalid');
  //         // TODO
  //         //const errorElement = field.parentElement.querySelector('.invalid-feedback');
  //         //if (errorElement) {
  //         //  errorElement.textContent = error.message;
  //         //}
  //       }
  //     }
  //   );

  public createContactForm(): void {
    if (this._formresult) {
      localStorage.setItem("contact", JSON.stringify(this._formresultArray));
    }
    return;
    // this._formresult = this._testData;
    // localStorage.setItem("contact", JSON.stringify(this._formresult));
  }
}
