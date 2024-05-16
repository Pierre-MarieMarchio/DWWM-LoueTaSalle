import FormModel from './FormModel'

export default interface ContactModelModel extends FormModel {
  company: string;
  lastname: string;
  firstname: string;
  country: string;
  city: string;
  number: string;
  validationTextarea: string;
  mail: string;
}
