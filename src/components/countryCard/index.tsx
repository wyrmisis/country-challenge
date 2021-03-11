import { FunctionalComponent, h } from 'preact';
import { route } from 'preact-router';
import DefinitionItem from '../definitionItem';
import style from './style.css';
import Country from '../../types/country';


interface CountryCardProps {
  country: Country;
}

const doNavigation = (countryCode: string): boolean =>
  route(`/country/${countryCode}`);

const CountryCard: FunctionalComponent<CountryCardProps> = ({ country }) => {
  return (
     <div class={style.countryCard} onClick={(): void => doNavigation(country.alpha2Code)} >
       <header>
         <img src={country.flag} />
       </header>
       <main>
         <h1>{country.name}</h1>
         <DefinitionItem label="Population" value={country.population.toLocaleString("en-US")} />
         <DefinitionItem label="Region" value={country.region} />
         <DefinitionItem label="Capital" value={country.capital} />
       </main>
     </div>
  );
};

export default CountryCard;
