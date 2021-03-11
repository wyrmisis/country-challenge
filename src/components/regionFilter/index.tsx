import { FunctionalComponent, h } from 'preact';
import style from './style.css';

interface RegionFilterProps {
  regions: string[];
  onChange: (region: string|undefined) => void;
  disabled: boolean;
}

const RegionFilter: FunctionalComponent<RegionFilterProps> = ({
  regions,
  onChange,
  disabled
}) => {
  return (
    <select
      class={style.regionFilter}
      onChange={(e: Event): void => onChange((e.target as HTMLInputElement).value)}
      disabled={disabled}
      placeholder="Filter by Region">
      <option value={undefined} disabled selected>Filter by Region</option>
      <option value={undefined}>All</option>
      {regions.map((region: string) => (
        <option value={region.toLowerCase()}>{region}</option>
      ))}
    </select>
  );
};

export default RegionFilter;
