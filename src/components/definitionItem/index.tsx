import { FunctionalComponent, h } from 'preact';
import style from './style.css';


interface DefinitionItemProps {
  label: string;
  value: string|number;
}

const DefinitionItem: FunctionalComponent<DefinitionItemProps> = ({ label, value }) => (
   <p class={style.definitionItem}>
     <span class={style.defintionLabel}>{label}:</span> {value || 'N/A'}
   </p>
);

export default DefinitionItem;
