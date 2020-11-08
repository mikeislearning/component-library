/**
 * @format
 */

import { transformJobDetailsData } from '../SharedJobStatusForm';

describe('transformJobDetailsData()', () => {
  it('transform data correctly when job status is studying', () => {
    const values = {
      jobStatus: 'Studying',
      occupationalIndustry: 'marketing',
      profession: 'engineer',
    };
    const updatedJobs = [];
    expect(transformJobDetailsData(values, updatedJobs)).toMatchSnapshot();
  });

  it('transform data correctly when job status is currently employed', () => {
    const values = {
      company: 'arrive',
      occupationalIndustry: 'marketing',
      profession: 'engineer',
      jobStatus: 'currently employed',
      startDate: '2018-01-01 00:00:00',
      endDate: '2019-01-01 00:00:00',
    };
    const updatedJobs = [
      {
        company: 'arrive',
        title: 'engineer II',
        startDate: '2018-01-01 00:00:00',
        endDate: '2019-01-01 00:00:00',
      },
    ];
    expect(transformJobDetailsData(values, updatedJobs)).toMatchSnapshot();
  });
});
