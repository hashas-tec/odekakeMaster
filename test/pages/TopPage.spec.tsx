import React from 'react';
import { render, screen } from '@testing-library/react';
import TopPage from '../../src/pages/TopPage';


describe("TopPageテスト", () => {
  test('正しい文字列が表示されている', () => {
    const { container } = renderPage()
    expect(container.innerHTML).toContain("テストでーす");
  });
})

const renderPage = () => {
  const renderPage = render(<TopPage />);
  // screen.debug();
  return renderPage
}