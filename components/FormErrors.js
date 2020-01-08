// import React from 'react';

export const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p key={i}>
            <span>{fieldName}</span> <span>{formErrors[fieldName]}</span>
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);
