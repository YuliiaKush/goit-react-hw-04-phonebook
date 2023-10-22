import { useContactsContext } from '../Context/Context';
import {
  FilterContainer,
  FilterLabel,
  FilterInput,
} from './ContactFilter.styled';

export const ContactFilter = () => {
  const { filter, handleFilterChange } = useContactsContext();
  return (
    <FilterContainer>
      <FilterLabel htmlFor="nameFilterInput">Find contacts by name</FilterLabel>
      <FilterInput
        id="nameFilterInput"
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterContainer>
  );
};