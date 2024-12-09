import {ChangeEvent, FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserData} from '../interfaces/UserData';
import {createUser} from '../api/userAPI';

const UserForm = () => {
  const [newUser, setNewUser] = useState<UserData | undefined>({
    id: null,
    username: '',
    password: '',
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const navigate = useNavigate();

  const createNewUser = async (body: UserData) => {
    try {
      const data = await createUser(body);
      return data;
    } catch (err) {
      console.error('Failed to create user', err);
      throw err;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setNewUser((prev) => (prev ? {...prev, [name]: value} : undefined));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (newUser && newUser.username && newUser.password) {
      try{
        const data = await createNewUser(newUser);
        console.log('User created:', data);
        navigate('/'); 
      
    } catch (error) {
      console.error('Error creating user:', error);
    }
  } else {
    console.log('Username and password are required.');
  }
};
      

  
    

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px' 
    }}>
      
      <button
        onClick={toggleFormVisibility}
        style={{
          padding: '10px 20px',
          backgroundColor: '#444B6E',
          color: '#F8F991',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        {isFormVisible ? 'Close Form' : 'Add New User'}
      </button>

      
      {isFormVisible && (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#444B6E',
              padding: '20px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              zIndex: 1000,
              width: '300px',
            }}
          >
            <form className="form" onSubmit={handleSubmit}>
              <h1>Add New User</h1>
              <label>New User</label>
              <input
                type="text"
                id= "username"
                name="username"
                value={newUser?.username || ''}
                onChange={handleChange}
                required
                style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
              />
              <label>New Password</label>
              <input
                type="password"
                name="password"
                value={newUser?.password || ''}
                onChange={handleChange}
                style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
              />
              <button
                type="submit"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                Create
              </button>
            </form>
          </div>

          {/* Overlay to close the form when clicking outside */}
          <div
            onClick={toggleFormVisibility}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 999,
            }}
          ></div>
        </>
      )}
    </div>
  );
  

};

export default UserForm;