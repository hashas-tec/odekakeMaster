import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>お探しのページは見つかりませんでした</h3>
      <Link to="/">トップに戻る</Link>
    </div>
  );
};

export default NotFoundPage;
