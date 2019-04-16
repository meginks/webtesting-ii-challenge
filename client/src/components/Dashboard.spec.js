import React from 'react'; 

import { render } from 'react-testing-library';

import 'jest-dom/extend-expect'; 

import Dashboard from './Dashboard'; 

describe('<Dashboard />', () => {
    it('should render 4 buttons', () => {
        const {getByText} = render(<Dashboard />)
    })
})