import React from 'react';
import "ds-wc/dist/base-components/button/ds-button";

const Button = () => (
  <ds-button
    type="primary"
  >
    Button label
  </ds-button>
);

function handleClick(event) {
  console.log("React:", event)
}

export default Button;