import React, { useReducer } from 'react';

export function Checkbox() {
  const [checked, toggle] = useReducer(checked => !checked, false);
  return (
    <>
      <label htmlFor="checkbox">{checked ? 'Checked' : 'Not Checked'}</label>
      <input
        type="checkbox"
        checked={checked}
        onChange={toggle}
        id="checkbox"
      />
    </>
  );
}
