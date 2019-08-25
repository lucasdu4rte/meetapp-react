import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/dark.css';
import flatpickr from 'flatpickr';
import { Portuguese } from 'flatpickr/dist/l10n/pt';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';

flatpickr.localize(Portuguese);

function DatePicker({ name, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.value',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <Container>
      <Flatpickr
        name={fieldName}
        value={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        {...rest}
      />
      {error && <span>{error}</span>}
    </Container>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DatePicker;
