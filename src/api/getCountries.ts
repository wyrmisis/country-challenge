import { apiProtocol, baseApiUrl } from './constants';
import Country from '../types/country';

const filterFields = (fields: string[]): string =>
  fields
    ? `fields=${fields.join(';')}`
    : '';

export const getCountries = (): Promise<Country[]> =>
  fetch(`${apiProtocol}${baseApiUrl}/all`)
    .then((response: Response) => response.json());

export const getCountriesByName = (name: string): Promise<Country[]> =>
  fetch(`${apiProtocol}${baseApiUrl}/name/${name}`)
    .then((response: Response) => response.json());

export const getCountriesByRegion = (regionName: string): Promise<Country[]> =>
  fetch(`${apiProtocol}${baseApiUrl}/region/${regionName}`)
    .then((response: Response) => response.json());

export const getCountriesByCodes = (codes: string[], fields: string[]): Promise<Country[]> =>
  fetch(`${apiProtocol}${baseApiUrl}/alpha?codes=${codes.join(';')}&${filterFields(fields)}`)
    .then((response: Response) => response.json());
