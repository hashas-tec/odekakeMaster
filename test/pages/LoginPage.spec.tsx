import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '../../src/pages/LoginPage';
import { BrowserRouter } from 'react-router-dom';


describe("LoginPageテスト", () => {
  test('正しい文字列が表示されている', () => {
    const { container } = renderPage()
    expect(container.innerHTML).toContain("ログインページ");
    expect(container.innerHTML).toContain("アカウントがない方は作成");
  });
})

const renderPage = () => {
  const renderPage = render(
    <BrowserRouter >
      <LoginPage />
    </BrowserRouter>
    );
  // screen.debug();
  return renderPage
}