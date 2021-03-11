import { FunctionalComponent, h } from 'preact';
import { route } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';

import { getCountry } from '../../api/getCountry';
import { getCountriesByCodes } from '../../api/getCountries';
import CountryType, { Currency, Language } from '../../types/country';

import DefinitionItem from '../../components/definitionItem';
import {ArrowLeft} from 'preact-feather';

import style from './style.css';

interface CountryProps {
  countryId: string;
}

type Border = {
  name: string;
  alpha2Code: string;
};

const doNavigation = (countryCode: string): boolean =>
  route(`/country/${countryCode}`);

const currencyString = (currencies: Currency[]): string => currencies
  .map(currency => currency.name)
  .join(', ');

const languageString = (languages: Language[]): string => languages
  .map(language => language.name)
  .join(', ');

const Country: FunctionalComponent<CountryProps> = ({ countryId }) => {
  const [country, setCountry] = useState<CountryType|null>(null);

  useEffect(() => {
    getCountry(countryId).then((country: CountryType) => {
      getCountriesByCodes(country.borders as string[], ['name', 'alpha2Code'])
        .then((borderCountries: Partial<CountryType>[]) => {
          country.borders = borderCountries;
          setCountry(country);
        })
    });
  }, [countryId]);

  if (!country) return null;

  const borderButtonMap = (border: Border): h.JSX.Element => (
    <button
      class={style.border}
      onClick={(): boolean => doNavigation(border.alpha2Code)}>
      {border.name}
    </button>
  );

  return (
    <div class={style.country}>
      <button
        class={style.back}
        onClick={(): boolean => route('/')}>
        <ArrowLeft />
        Back
      </button>
      <main>
        <img src={country.flag} />
        <div>
          <h1>{country.name}</h1>
          <div class={style.details}>
            <div>
               <DefinitionItem label="Native Name" value={country.nativeName} />
               <DefinitionItem label="Population" value={country.population.toLocaleString("en-US")} />
               <DefinitionItem label="Region" value={country.region} />
               <DefinitionItem label="Sub Region" value={country.subregion} />
               <DefinitionItem label="Capital" value={country.capital} />
            </div>
            <div>
               <DefinitionItem label="Top Level Domain" value={country.topLevelDomain.join(', ')} />
               <DefinitionItem label="Currencies" value={currencyString(country.currencies)} />
               <DefinitionItem label="Languages" value={languageString(country.languages)} />
            </div>
          </div>
          <div class={style.borders}>
            <span>Border Countries:</span>
              {(country.borders as Border[]).map(borderButtonMap)}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Country;
