export default abstract class Services<T> {
    protected _formdata: any;
    protected _form: HTMLElement;
    protected _formResult: { [key: string]: any } | null;
    protected _formResultArray: Array<T> = [];
    [key: string]: any;
  
    constructor(formSubmit: any, form: HTMLElement) {
      this._form = form;
      this._formdata = formSubmit;
      this._formResult = null;
    }
  
    set formdata(data: any) {
      this._formdata = data;
    }
   
    protected validateIndividualField(fieldName: string, field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, methodName: string): boolean {
      try {
        const result = this[methodName as keyof this](); // Assertion de type pour éviter l'erreur
        console.log(fieldName + " est valide");
        field.classList.remove("is-invalid");
        field.classList.add("is-valid");
        if (this._formResult) {
          console.log(this._formResult[fieldName]);
          console.log(fieldName);
          console.log(result);
          
          this._formResult[fieldName] = result;

        }
        return true;
      } catch (error) {
        console.log(fieldName + " n'est pas valide");
        field.classList.remove("is-valid");
        field.classList.add("is-invalid");
        return false;
      }
    }
  
    protected validateAllFields(): boolean {
      let isValid: boolean = false;
      this._form
        .querySelectorAll("input, select, textarea")
        .forEach((field: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
          if (field.type !== "submit") {
            const methodName = "check" + field.name.charAt(0).toUpperCase() + field.name.slice(1);
            isValid = this.validateIndividualField(field.name, field, methodName);
          }
        });
  
        if (isValid) {
          
          console.log(this._formResult);
          
          
          this._formResultArray.push(this._formResult as T);
        }
      return isValid;
    }
  
    public validateForm(): boolean {
      const isValid: boolean = this.validateAllFields();
      return isValid
    }
  
    public createReservation(): void {
      if (this._formResultArray) {
        console.log(this._formResultArray);
        
        localStorage.setItem("Reservation", JSON.stringify(this._formResultArray));
      }
      return;
    }
  }