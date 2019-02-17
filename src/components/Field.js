/*
 * Replace the `alert` with the actual dispatch later on
 *
 * You already have utilit classes available to mark the current field selected by a player:
 *  .is-player-0
 *  .is-player-1
 *
 * Check out the src/index.html for pre-defined basic css classes.
 */
import React from 'react';

const Field = (props) => {
  let fieldClassName = 'Field';
  // eslint-disable-next-line
  if (props.fieldValue) {
    fieldClassName += ` is-player-${props.fieldValue}`;
  }
  return (
    <div
      className={fieldClassName}
      role="presentation"
      onClick={() => props.onClick(props.fieldId)}
    />
  );
};

export default Field;
