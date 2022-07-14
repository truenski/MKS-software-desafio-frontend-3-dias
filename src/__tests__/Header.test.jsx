import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Components/Header';
/**
 * @jest-environment jsdom
 */
test('renders learn react link', () => {
  /**
 * @jest-environment jsdom
 */
render(<Header/>)
  const linkElement = screen.getByText('MKS');
  expect(linkElement).toBeInTheDocument();
});