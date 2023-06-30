import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from '../../src/pages/NotFoundPage';
import { BrowserRouter } from 'react-router-dom';


describe("NotFoundPageテスト", () => {
  test('正しい文字列が表示されている', () => {
    const { container } = renderPage()
    expect(container.innerHTML).toContain("404");
    expect(container.innerHTML).toContain("お探しのページは見つかりませんでした");
    expect(container.innerHTML).toContain("トップに戻る");
  });
})

const renderPage = () => {
  const renderPage = render(
    <BrowserRouter > 
      <NotFoundPage />
    </BrowserRouter>
  );
  // screen.debug();
  return renderPage
}