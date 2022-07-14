import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../pages/Home/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

/**
 * @jest-environment jsdom
 */
test('renders learn react link', () => {
  /**
 * @jest-environment jsdom
 */
render(
  <Provider store={store}>
  <BrowserRouter>
   <App />
 </BrowserRouter>
 </Provider>
)
  const linkElement = screen.getByText('MKS');
  expect(linkElement).toBeInTheDocument();
});