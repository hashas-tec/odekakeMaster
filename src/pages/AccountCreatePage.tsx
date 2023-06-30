import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

const AccountCreatePage: React.FC = () => {
 
  return (
    <div className='card'>
      <div>アカウント作成ページ</div>
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
      <Button>アカウント作成</Button>
      <Link to="/">アカウントがある場合はログイン</Link>
    </div>
  );
};

export default AccountCreatePage;
