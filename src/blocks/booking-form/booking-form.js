import data from '../../data.json';
import addDropdownDate from '../dropdown-date/dropdown-date';

console.log(JSON.stringify(data));
addDropdownDate('.booking-form .js-date-picker');
