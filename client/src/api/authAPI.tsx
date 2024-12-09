import { UserLogin } from '../interfaces/UserLogin';
import { UserSignup } from '../interfaces/UserSignup';

const handleResponse = async (response: Response) => {
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData.message}`);
    }
    return response.json();
  };

const login = async (userInfo: UserLogin) => {
    try{
        const response = await fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });

        const data = await response.json();

        if (!response.ok) {
             const errorData = await response.json();
            throw new Error(`Error: ${errorData.message}`);

        }


        return data;
    } catch (error) {
        console.log('Error from user login:', error);
        return Promise.reject( 'Could not log in user')
    }
}

const Signup = async (userInfo: UserSignup): Promise<any> => {
    try {
      const response = await fetch('/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo)
      });
      return await handleResponse(response);
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error from user signup:', err.message);
        return Promise.reject(err.message || 'Could not fetch user info');
      } else {
        console.error('Error from user signup:', err);
        return Promise.reject('Could not fetch user info');
      }
    }
  };

export {Signup, login};