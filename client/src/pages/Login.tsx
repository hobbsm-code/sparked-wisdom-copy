import {useState, FormEvent, ChangeEvent} from 'react';
import UserForm from '../pages/UserForm';
import Auth from '../utils/auth';
import {login} from '../api/authAPI';

const Login = () => {
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name, value} = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const data = await login(loginData);
            Auth.login(data.token);
        } catch (err) {
            console.error('Login error:', err);
        }
    };
    
        return (
          <div>
            <div>
      <div className= 'lanheader'>
      <h1>Welcome to Sparked Wisdom!</h1>
      </div>
      <div className = 'lanp'>
      <p>Where you can find the inspiration you need to get through the day! Please sign in or create an account to join our daily quotes for you.</p>
      </div>
      <div className= 'lanp'>
      <img src="https://previews.123rf.com/images/irozvodovskyi/irozvodovskyi2101/irozvodovskyi210100103/162371027-vector-lamp-bulb-icon-on-white-isolate.jpg" alt="Light bulb icon representing Sparked Wisdom"  className="logo-image"/>
        </div>
    </div>
          <div className="container mt-5">
            <form className="p-4 border rounded shadow" onSubmit={handleSubmit}>
              <h1 className="text-center mb-4">Login</h1>
              
              
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  value={loginData.username || ''}
                  onChange={handleChange}
                  placeholder="Enter your username"
                />
              </div>
        
              
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  value={loginData.password || ''}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>
        
              
              <div className="text-center">
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </div>
            </form>
            <UserForm/>
          </div>
          </div>
        );
        
};
export default Login;