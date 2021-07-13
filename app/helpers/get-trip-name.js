import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function getTripName(params/*, hash*/) {
  let [rentPoint, rentHours, rentDate, bicycleId] = params;    
  return htmlSafe(
    `Rent point is <strong>${rentPoint}</strong>. 
    Bike was rented for<strong>${rentHours} hours</strong>.
    Renting date is ${rentDate}.
    and bicycle ID is ${bicycleId}`);
}

export default helper(getTripName);
