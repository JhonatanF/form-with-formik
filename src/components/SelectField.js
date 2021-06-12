import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const SelectField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="mb-2">

      <label htmlFor={field.name}>{label}</label>
      <select htmlFor={field.name} name={field.name}>
        <option value={field.option} className={`form-control shadow-none ${true}`}></option>
      </select>
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}
