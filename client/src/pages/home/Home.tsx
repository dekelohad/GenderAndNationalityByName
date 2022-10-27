import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { AppDispatch } from '../../redux/store';
import { selectStatus, selectUsers } from '../../redux/features/users/userSlice';
import { fetchUserInfo } from '../../redux/features/users/userThunks';
import { ValidationsUtils } from "../../utils";
import { Layout, Loader, Button } from '../../components';
import './Home.css';

export default function Home() {
    const [userName, setUserName] = useState<string>('');
    const fetchStatus = useSelector(selectStatus);
    const users = useSelector(selectUsers);
    const dispatch = useDispatch<AppDispatch>();

    const handleSearch = async (e: React.SyntheticEvent) => {
        const isUserInStore = users.some(user => user.name === userName);
        e.preventDefault();
        if (!ValidationsUtils.isAlphabetChar(userName)) {
            toast.error('Please enter a valid username');
            return;
        }
        else if (isUserInStore) {
            toast.error('You already have that user in your list');
            return;
        }
        else {
            await dispatch(fetchUserInfo(userName));
            toast('User successfully added', {
                closeOnClick: true,
                autoClose: 1000,
            });
        }
        setUserName('');
    }
    return (
        <Layout>
            <div className='small-container center'>
                <h2 className='title'>Enter a person's name to find their gender and country</h2>
                {fetchStatus === 'loading' ? <Loader /> : null}
                <form>
                    <input className='input' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Please enter a name' />
                    <Button isDisabled={userName.length === 0} className='btn' onClick={handleSearch}>Add New User</Button>
                </form>
            </div>
        </Layout>
    )
}
