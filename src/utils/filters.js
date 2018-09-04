import filesize from 'filesize';
import { shortDate , time , longDate , longestDate } from './helpers.js';

function capitalize (value) {
  if ( !value ) return null;
  return value.toString().charAt(0).toUpperCase() + value.slice(1);
}

function toShortLocaleDate (date) {
  if ( !date ) return 'нет данных';
  return new Date(date).toLocaleString('ru-RU', shortDate);
}

function toTime (date) {
  if ( !date ) return '--:--';
  return new Date(date).toLocaleString('ru-RU', time);
}

function toLocaleDate (date) {
  if ( !date ) return 'нет данных';
  return new Date(date).toLocaleString('ru-RU', longDate);
}

function toLongLocaleDate (date) {
  if ( !date ) return 'нет данных';
  return new Date(date).toLocaleString('ru-RU', longestDate);
}

function currencyFormat ( value , locale = 'RUB') {
  value = Number(value);
  if ( isNaN(value) ) return null;
  return Number(value).toLocaleString('ru-RU', {
    style: 'currency',
    currency: locale,
    maximumSignificantDigits: 20
  });
}

function toReadableString (value) {
  if ( !value ) return null;
  return filesize(Number(value));
}

export {
  capitalize,
  toShortLocaleDate,
  toLocaleDate,
  toTime,
  currencyFormat,
  toReadableString,
  toLongLocaleDate
};

