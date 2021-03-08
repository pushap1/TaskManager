import React from 'react';
import PropTypes from 'prop-types';

import AsyncSelect from 'react-select/async';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import InputLabel from '@material-ui/core/InputLabel';

import UsersRepository from 'repositories/UsersRepository';

import useStyles from './useStyles';

const UserSelect = ({ errors, label, isClearable, isDisabled, isRequired, onChange, value, helperText }) => {
  const styles = useStyles();
  const handleLoadOptions = (inputValue) =>
    UsersRepository.index({ q: { firstNameOrLastNameCont: inputValue } }).then(({ data }) => data.items);

  return (
    <>
      <FormControl margin="dense" disabled={isDisabled} error={errors} required={isRequired}>
        <InputLabel className={styles.label}>{label}</InputLabel>
        <div className={styles.select}>
          <AsyncSelect
            cacheOptions
            label={label}
            loadOptions={handleLoadOptions}
            defaultOptions
            getOptionLabel={(user) => `${user.firstName} ${user.lastName}`}
            getOptionValue={(user) => user.id}
            isDisabled={false}
            isSearchable
            isClearable={isClearable}
            defaultValue={value}
            onChange={onChange}
            menuPortalTarget={document.body}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          />
        </div>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </>
  );
};

UserSelect.propTypes = {
  errors: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape(),
  helperText: PropTypes.string,
};

UserSelect.defaultProps = {
  value: {},
  helperText: '',
  isDisabled: true,
  isClearable: false,
  isRequired: false,
};

export default UserSelect;
