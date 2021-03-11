import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import { Moon } from 'preact-feather';
import style from './style.css';

interface HeaderProps {
  onDarkModeToggle: () => void;
}

const Header: FunctionalComponent<HeaderProps> = ({ onDarkModeToggle }) => {
  return (
    <header class={style.header}>
      <h1>
        <Link href="/">
          Where in the World?
        </Link>
      </h1>
      <button onClick={onDarkModeToggle}>
        <Moon size={18} />
        <span>Dark Mode</span>
      </button>
    </header>
  );
};

export default Header;
