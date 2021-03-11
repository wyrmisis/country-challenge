import { FunctionalComponent, h } from 'preact';
import { Search } from 'preact-feather';
import style from './style.css';

interface NameFilterProps {
  onChange: (name: string) => void;
  disabled: boolean;
}

const NameFilter: FunctionalComponent<NameFilterProps> = ({ onChange, disabled }) => {
  return (
      <div class={style.nameFilter}>
        <Search size={18} />
        <input
          placeholder='Search for a country...'
          onKeyUp={(event: Event): void => onChange((event.target as HTMLInputElement).value)}
          disabled={disabled} />
      </div>
  );
};

export default NameFilter;
