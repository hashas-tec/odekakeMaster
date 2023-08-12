import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../firebase"
import { Dispatch, SetStateAction, useState } from "react"
import { useNavigate } from "react-router-dom"
import { switchByIsSignIn } from "../utils/AuthState"
import TutorialComponents from "../components/TutorialComponents"

const HomePage = ({   
  setIsAuth
}: {
  setIsAuth: Dispatch<SetStateAction<boolean>>
}) => {

  const [uid, setUid] = useState('')

  useState(() => {
    switchByIsSignIn((e: string) => setUid(e), setUid(''))
  }, [])
  
  const navigate = useNavigate()
  const logoutHandler = () => {
      signOut(auth).then(() => {
          localStorage.clear();
          setIsAuth(false);
          navigate('/')
      })
  }

  const displayTutorial = () => {
    if(uid !== '') {
      return <TutorialComponents uid={uid}/>
    }
  }

  return (
    <div className="">
      {displayTutorial()}
      <button onClick={logoutHandler}>ログアウト</button>
      <h1>ようこそ！</h1>
    </div>
  )
}

export default HomePage
