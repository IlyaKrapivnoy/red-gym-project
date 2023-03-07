import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../pages';
import '@testing-library/jest-dom';

describe('Test Home', () => {
  it('Home snapshot', () => {
    const view = render(<Home />);
    expect(view).toMatchSnapshot();
  });
});
