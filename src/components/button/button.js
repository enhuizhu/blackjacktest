import React, {PropTypes} from 'react';
import cx from 'classnames';

import './button.css';

function Button({
  color,
  children,
  onClick,
  disabled,
}) {
  let click = function() {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <button
      role="button"
      className={cx({
        'button': true,
        [`button-color-${color}`]: true,
        'disabled': disabled
      })}
      onClick={click}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'tertiary',
  ]).isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  color: 'primary',
  onClick: () => {}
};

export default Button;
