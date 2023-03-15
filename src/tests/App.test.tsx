import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from '../components/App';


jest.mock('react-redux', () => ({
  connect: () => (ReactComponent: any) => ReactComponent,
}));

describe('App', () => {
  it('Should render app correctly without crash', async () => {
     render(<App />)
   })
})