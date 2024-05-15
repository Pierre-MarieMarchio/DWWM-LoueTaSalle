export default abstract class Services<T> {
    protected _formdata: any;
    protected _form: HTMLElement;
    protected _formResult: T | null;
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

  
  public abstract validateForm(): boolean;
  
  }