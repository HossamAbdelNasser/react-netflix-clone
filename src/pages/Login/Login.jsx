import './login.scss'
import FacebookIcon from '@mui/icons-material/Facebook';


const Login = () => {
  return (
    <div className='login'>
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />

          <div className="modal">
            <form className="form" action="">
                <h1>Sign in</h1>
                <input className='input' type="text" placeholder='Email or phone number' />
                <input className='input' type="password" placeholder='Password' />
                <button className='btn' type="submit">Sign In</button>

                <div className='after'>
                    <div className="left">
                       <span>
                        <input className="checkbox" type="checkbox"/> Remember me 
                        </span> 
                        <span className='facebook'>
                            <FacebookIcon 
                            className='facebookIcon'/> Login with Facebook
                        </span>
                        <span>New to Netflix? Sign up now.</span>
                    </div>
                    <div className="right">
                        Need help?
                    </div>
            </div>
            </form>
            
            <div className="copyright">
                        <p>This page is protected by Google reCAPTCHA to ensure you are not a bot.</p>
                    </div>
          </div>
    </div>
  )
}

export default Login