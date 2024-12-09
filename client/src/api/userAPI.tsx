import Auth from '../utils/auth';
import {UserData} from '../interfaces/UserData';


const retrieveUsers = async (): Promise<UserData[]> => { 
    try {
        const response = await fetch('/api/users', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
            }
        });
        const data = await response.json();

        if(!response.ok) {
            throw new Error('invalid user API response, check network tab!');
        }
        return data;
    } catch (err) {
        console.log('Error from data retrieval:', err);
        return [];
    }
};

const retrieveUser = async (id: number | null): Promise<UserData> => {
    try {
        const response = await fetch(`/api/users/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${Auth.getToken()}`
            }
        });
        const data = await response.json();
        if(!response.ok) {
            throw new Error('invalid user API response, check network tab!');
        }
        return data;
    } catch (err) {
        console.log('Error from data retrieval:', err);
        throw new Error('Could not fetch user');
    }
};

const createUser = async (body: UserData): Promise<UserData> => {
    try {
        const response = await fetch(
            
            '/api/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Auth.getToken()}`
                },
                body: JSON.stringify({username: body.username, password: body.password})
            }
        );
        const data = response.json();
console.log(JSON.stringify(data));

        if(!response.ok) {
            throw new Error('invalid API response, check network tab!');
        }
        return data;
    } catch (err) {
        console.log('Error from data retrieval:', err);
        throw new Error('Could not create user');
    }
};


const updateUsers = async (id: number | null, body: UserData): Promise<UserData> => {
    try {
        const response = await fetch(
            `/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Auth.getToken()}`
                },
                body: JSON.stringify(body)
            }
        );
        const data = response.json();

        if(!response.ok) {
            throw new Error('invalid API response, check network tab!');
        }
        return data;
    } catch (err) {
        console.log('Error from data retrieval:', err);
        throw new Error('Could not update user');
    }
};

export {retrieveUsers, retrieveUser, createUser, updateUsers};


