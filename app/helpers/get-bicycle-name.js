import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function getBicycleName(params/*, hash*/) {
  let [brand, pricePerHour] = params;
  return htmlSafe(`<strong>${brand}</strong>. ${pricePerHour}$`);
}

export default helper(getBicycleName);
