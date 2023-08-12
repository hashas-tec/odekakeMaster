import { Button } from 'react-bootstrap';
import React, { Dispatch, SetStateAction } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../../firebase'
import { signInWithPopup } from 'firebase/auth'
import { createSignInUsers } from '../repository/usersRepository'

const LoginPage = ({
  setIsAuth
}: {
  setIsAuth: Dispatch<SetStateAction<boolean>>
}) => {
  const navigate = useNavigate()

  const loginWithGoogle = () => {
    // GoogleSignIn用 
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        createSignInUsers(result.user.uid)
      })
      .then(() => {
        navigate('/home')
      });
  }

  return (
    <div>
      <div className='card'>
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
        <Button>ログイン</Button>
        <Link to="account-create">アカウントがない方は作成</Link>
      </div>

      <button onClick={loginWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default LoginPage;
