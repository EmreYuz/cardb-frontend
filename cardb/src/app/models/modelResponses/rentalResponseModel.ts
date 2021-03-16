import { Rental } from '../rental';
import { ResponseModel } from '../reponseModel';

export interface RentalResponseModel extends ResponseModel {
  data: Rental[];
}
