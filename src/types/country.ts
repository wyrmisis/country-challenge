export type Currency = {
  code: string;
  name: string;
  symbol: string;
};

export type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

type Translation = {
  [key: string]: string;
};

type RegionalBloc = {
  acronym: string;
  name: string;
  otherAcronyms: string[];
  otherNames: string[];
}

export default interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[] | Partial<Country>[];
  nativeName: string;
  numericCode: string;
  currencies: Currency[];
  languages: Language[];
  translations: Translation;
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: string;
}
