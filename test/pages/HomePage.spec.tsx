import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../../src/pages/HomePage';
import { BrowserRouter } from 'react-router-dom';


describe("HomePageテスト", () => {
  test('正しい文字列が表示されている', () => {
    const { container } = renderPage()
    expect(container.innerHTML).toContain("ようこそ！");
    expect(container.innerHTML).toContain("ログアウト");
  });
})

const renderPage = () => {
  const renderPage = render(
    <BrowserRouter >
      <HomePage />
    </BrowserRouter>
    );
  // screen.debug();
  return renderPage
}