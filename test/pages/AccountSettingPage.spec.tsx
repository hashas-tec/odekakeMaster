import React from 'react';
import { render, screen } from '@testing-library/react';
import AccountCreatePage from '../../src/pages/AccountCreatePage';
import { BrowserRouter } from 'react-router-dom';


describe("AccountSettingPageテスト", () => {
  test('正しい文字列が表示されている', () => {
    const { container } = renderPage()
    expect(container.innerHTML).toContain("アカウント作成ページ");
    expect(container.innerHTML).toContain("アカウントがある場合はログイン");
  });
})

const renderPage = () => {
  const renderPage = render(
    <BrowserRouter >
      <AccountCreatePage />
    </BrowserRouter>
  );
  // screen.debug();
  return renderPage
}