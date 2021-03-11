import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import { getCountries } from '../../api/getCountries';
import Country from '../../types/country';

import CountryCard from '../../components/countryCard';
import NameFilter from '../../components/nameFilter';
import RegionFilter from '../../components/regionFilter';

import style from './style.css';

const Home: FunctionalComponent = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filterName, setFilterName] = useState<string|undefined>(undefined);
  const [filterRegion, setFilterRegion] = useState<string|undefined>(undefined);
  const [regions, setRegions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCountries = (): void => {
    setIsLoading(true);

    getCountries()
      .then((countries: Country[]) => {
        countries = countries.map(country => ({
          ...country,
          region: country.region || 'Unaffiliated'
        }))

        setCountries(countries);

        setRegions(
          Array.from(new Set(
            countries
              .map(country => country.region)
              .filter(region => !!region)
          )  
        ))
      })
      .finally(() => setIsLoading(false));
  }

  useEffect(fetchCountries, []);

  const countriesToDisplay = (): Country[] => {
    let filteredCountries = countries;

    if (filterRegion)
      filteredCountries = filteredCountries.filter(country =>
        country.region.toLowerCase() === filterRegion.toLowerCase()
      );

    if (filterName) // @TODO JS thinks this is a regex if you use parentheses
      filteredCountries = filteredCountries.filter(country =>
        country.name.match(filterName)
      );

    return filteredCountries;
  }

  return (
    <div class={style.home}>
      <div class={style.filters}>
        <div class={style.nameFilter}>
          <NameFilter
            onChange={setFilterName}
            disabled={isLoading} />
        </div>
        <div class={style.regionFilter}>
          <RegionFilter
            regions={regions}
            onChange={setFilterRegion}
            disabled={isLoading} />
        </div>
      </div>
      
      <div class={style.countries}>
        {countriesToDisplay().map((country: Country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
