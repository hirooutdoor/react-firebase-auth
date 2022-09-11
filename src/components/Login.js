import { auth } from '../firebase';
import { Link ,useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const navigate = useNavigate();
  const [error,setError] = useState('');
    const handleSubmit = async(e) =>{
    e.preventDefault();
    const{ email, password }=e.target.elements;
    try{
      await signInWithEmailAndPassword(auth, email.value,password.value);
    navigate("/");
    console.log("catch")
  } catch(error){
    console.log(error.code);
    if (error.code === "auth/invalid-email") {
      setError("The email is badly formatted.")
    } else {setError(error.message);}
  }
    };
  return( 
  <div>
  <h1>ログイン画面</h1>
  {error && <p style={{ color: 'red' }}>{error}</p>}
    <form onSubmit={handleSubmit}>
      <div>
      <label>メールアドレス</label>
          <input name="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>
          ユーザ登録は<Link to={'/signup'}>こちら</Link>から
        </div>
      
    </form>
  </div>
  
  )
};

export default Login;