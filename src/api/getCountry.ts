import { apiProtocol, baseApiUrl } from './constants';
import Country from '../types/country';

export const getCountry = (countryCode: string): Promise<Country> =>
  fetch(`${apiProtocol}${baseApiUrl}/alpha/${countryCode}`)
    .then((response: Response) => response.json());

export const getCountryByName = (countryCode: string): Promise<Country[]> =>
  fetch(`${apiProtocol}${baseApiUrl}/name/${countryCode}?fullText=true`)
    .then((response: Response) => response.json());