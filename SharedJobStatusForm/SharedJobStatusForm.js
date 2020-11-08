import React from 'react';
import { View } from 'react-native';

import { Dropdown, Input, InputLabel } from 'app/components';
import {
  jobStatusOptions,
  industries,
  getYearFromISODate,
  formatDropdownYearData,
  formatYearToISODate,
  transformDropdownList,
  isEndYearSmaller,
  strings,
} from 'app/utils';

const renderDetailedForm = (
  jobStatus,
  industryList,
  values,
  errors,
  handleChange,
  touched,
  setFieldTouched
) => {
  let job = {};
  let company = {};
  let industry = {};
  let isCompanyVisible = true;

  if (jobStatus === jobStatusOptions[0]) {
    // Currently employed
    job.text = 'What is your job title?';
    job.placeholder = 'Job title';
    company.text = 'Current employer/company';
    industry.text = 'Industry';
    industry.placeholder = 'Select industry';
  } else {
    // Looking for new opportunities && Studying
    job.text = 'Desired job';
    job.placeholder = 'Desired job';
    industry.text = 'Desired industry';
    industry.placeholder = 'Desired industry';
    isCompanyVisible = false;
  }

  // validate form values

  const endDateSmallerError = isEndYearSmaller(values.startDate, values.endDate);
  const companyEmptyError = !values.company ? 'Type a company name' : undefined;
  if (jobStatus === jobStatusOptions[0]) {
    if (companyEmptyError) errors.company = companyEmptyError;
    if (endDateSmallerError) errors.endDateSmaller = endDateSmallerError;
  }
  console.log('errors', errors);
  console.log('touched', touched);

  return (
    <React.Fragment>
      <InputLabel text={job.text} />
      <Input
        onBlur={() => setFieldTouched('profession')}
        value={values.profession}
        onChangeText={handleChange('profession')}
        placeholder={job.placeholder}
        errorMsg={touched.profession && errors.profession}
        errors={!!(touched.profession && errors.profession)}
      />
      {isCompanyVisible && (
        <React.Fragment>
          <InputLabel text={company.text} />
          <Input
            onBlur={() => setFieldTouched('company')}
            value={values.company}
            onChangeText={handleChange('company')}
            placeholder={company.placeholder}
            errorMsg={touched.company && companyEmptyError}
            errors={!!(touched.company && companyEmptyError)}
          />
        </React.Fragment>
      )}
      <InputLabel text={industry.text} />
      <Dropdown
        onBlur={() => setFieldTouched('occupationalIndustry')}
        items={industryList}
        onValueChange={handleChange('occupationalIndustry')}
        placeholder={industry.placeholder}
        value={values.occupationalIndustry}
        errorMsg={errors.occupationalIndustry}
        errors={!!errors.occupationalIndustry}
      />
      {isCompanyVisible && (
        <View>
          <View>
            <InputLabel text="Start year" />
            <Dropdown
              items={formatDropdownYearData()}
              onValueChange={handleChange('startDate')}
              placeholder={strings.placeholder.select}
              value={values.startDate ? getYearFromISODate(values.startDate) : ''}
            />
          </View>
          <View>
            <InputLabel text="End year" />
            <Dropdown
              items={formatDropdownYearData(false, true)}
              onValueChange={handleChange('endDate')}
              placeholder={strings.placeholder.select}
              value={values.endDate ? getYearFromISODate(values.endDate) : ''}
              errorMsg={endDateSmallerError}
              errors={!!endDateSmallerError}
            />
          </View>
        </View>
      )}
    </React.Fragment>
  );
};

export const sharedJobStatusForm = (values, errors, handleChange, touched, setFieldTouched) => {
  return (
    <React.Fragment>
      <InputLabel text="Current status" />

      {/* Dropdown - job status */}
      <Dropdown
        items={transformDropdownList(jobStatusOptions)}
        onValueChange={handleChange('jobStatus')}
        placeholder="What is your current status?"
        value={values.jobStatus}
        errorMsg={errors.jobStatus}
        errors={!!errors.jobStatus}
      />
      {renderDetailedForm(
        values.jobStatus,
        transformDropdownList(industries),
        values,
        errors,
        handleChange,
        touched,
        setFieldTouched
      )}
    </React.Fragment>
  );
};

export const transformJobDetailsData = (values, updatedJobs) => {
  let jobDetailsData = {
    occupationalIndustry: values.occupationalIndustry,
    profession: values.profession,
  };

  // if jobStatus is currently employed, company name is new
  // update company name and title for the latest job
  if (
    (updatedJobs.length === 0 || updatedJobs[0].company !== values.company) &&
    values.jobStatus === jobStatusOptions[0]
  ) {
    updatedJobs.unshift({
      company: values.company,
      title: values.profession,
      startDate: formatYearToISODate(values.startDate),
      endDate: formatYearToISODate(values.endDate),
    });
    jobDetailsData.jobs = updatedJobs;
  } else if (updatedJobs.length > 0) {
    // if not updating the company, and the current data has jobs
    // then for any job status, update the latest job title
    updatedJobs[0].title = values.profession;
    updatedJobs[0].startDate = formatYearToISODate(values.startDate);
    updatedJobs[0].endDate = formatYearToISODate(values.endDate);
    jobDetailsData.jobs = updatedJobs;
  }
  return jobDetailsData;
};
