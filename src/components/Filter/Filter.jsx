import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <>
      <Label>
        <Input
          type="text"
          placeholder="Search"
          value={filter}
          name="filter"
          onChange={onChangeFilter}
        />
      </Label>
    </>
  );
};
