import React from 'react';
import { DateTimePicker, Input, InputLabel } from 'app/components';

import { PropTypes } from 'prop-types';

export default class LandingStatusForm extends React.Component {
  static propTypes = {
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    isLanded: PropTypes.bool.isRequired,
    setFieldTouched: PropTypes.func.isRequired,
    touched: PropTypes.object.isRequired,
    values: PropTypes.object.isRequired,
  };

  render() {
    const { isLanded, values, errors, handleChange, setFieldTouched, touched } = this.props;
    if (isLanded) {
      if (!values.arrivalDate) errors.arrivalDate = 'Please select an arrival date';
      if (!values.destinationCity) errors.destinationCity = 'Please type your city';
    }
    return (
      <React.Fragment>
        {isLanded ? (
          <React.Fragment>
            <InputLabel text="Current canadian city" />
            <Input
              value={values.destinationCity}
              onChangeText={handleChange('destinationCity')}
              onBlur={() => setFieldTouched('destinationCity')}
              placeholder="Current location"
              errorMsg={
                touched.destinationCity && errors.destinationCity ? errors.destinationCity : null
              }
              errors={!!(touched.destinationCity && errors.destinationCity)}
            />

            <InputLabel text="Date of landing" />
            <DateTimePicker
              value={values.arrivalDate}
              onBlur={() => setFieldTouched('arrivalDate')}
              onConfirm={handleChange('arrivalDate')}
              errorMsg={touched.arrivalDate && errors.arrivalDate ? errors.arrivalDate : null}
              errors={!!(touched.arrivalDate && errors.arrivalDate)}
            />

            <InputLabel text="Country of origin" />
            <Input
              value={values.originCountry}
              onChangeText={handleChange('originCountry')}
              onBlur={() => setFieldTouched('originCountry')}
              placeholder="Country of origin"
              errorMsg={touched.originCountry && errors.originCountry ? errors.originCountry : null}
              errors={!!(touched.originCountry && errors.originCountry)}
            />

            <InputLabel text="City of origin" />
            <Input
              value={values.originCity}
              onChangeText={handleChange('originCity')}
              onBlur={() => setFieldTouched('originCity')}
              placeholder="City of origin"
              errorMsg={touched.originCity && errors.originCity ? errors.originCity : null}
              errors={!!(touched.originCity && errors.originCity)}
            />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <InputLabel text="Country of origin" />
            <Input
              value={values.originCountry}
              onChangeText={handleChange('originCountry')}
              onBlur={() => setFieldTouched('originCountry')}
              placeholder="Country of origin"
              errorMsg={touched.originCountry && errors.originCountry ? errors.originCountry : null}
              errors={!!(touched.originCountry && errors.originCountry)}
            />

            <InputLabel text="City of origin" />
            <Input
              value={values.originCity}
              onChangeText={handleChange('originCity')}
              onBlur={() => setFieldTouched('originCity')}
              placeholder="City of origin"
              errorMsg={touched.originCity && errors.originCity ? errors.originCity : null}
              errors={!!(touched.originCity && errors.originCity)}
            />

            <InputLabel text="Moving to (optional)" />
            <Input
              value={values.destinationCity}
              onChangeText={handleChange('destinationCity')}
              placeholder="Canadian destination"
            />

            <InputLabel text="Date of landing (optional)" />
            <DateTimePicker value={values.arrivalDate} onConfirm={handleChange('arrivalDate')} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
