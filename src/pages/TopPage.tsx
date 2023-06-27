import { Button } from 'react-bootstrap';
import React from 'react';

const TopPage: React.FC = () => {
  return (
    <div>
      <div>ログインページ</div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <Button>テストでーす</Button>
    </div>
  );
};

export default TopPage;
