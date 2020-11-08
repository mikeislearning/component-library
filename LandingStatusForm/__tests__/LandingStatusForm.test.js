import React from 'react';
import { render } from 'react-native-testing-library';

import LandingStatusForm from '../LandingStatusForm';

describe('<LandingStatusForm />', () => {
  const landingValues = {
    arrivalDate: '2019-08-12',
    destinationCity: 'Toronto',
    originCountry: 'China',
    originCity: 'Shanghai',
  };
  const errors = {
    originCity: 'Type a city of origin',
  };
  it('renders correctly', () => {
    const landingStatusForm = render(
      <LandingStatusForm
        isLanded={true}
        values={landingValues}
        errors={errors}
        handleChange={() => {}}
        setFieldTouched={() => {}}
        touched={{}}
      />
    );
    expect(landingStatusForm).toMatchSnapshot();
  });
});
