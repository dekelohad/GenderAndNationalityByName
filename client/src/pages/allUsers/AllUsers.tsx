import { Layout } from '../../components';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectUsers, selectStatus } from '../../redux/features/users/userSlice';
import { Loader } from '../../components';
import { AllUsersTable } from './components';

export default function AllUsers() {
    const status = useSelector(selectStatus);
    const users = useSelector(selectUsers);

    if (status === 'loading') {
        return <Loader />
    }

    if (status === 'failed') {
        toast.error('Something went wrong');

    }



    return (
        <Layout>
            <div className='small-container'>
                {users.length > 0 ?
                    <>
                        <h1>All Users Info: </h1>
                        <AllUsersTable data={users} />
                    </>
                    : <h1>No users found</h1>}
            </div>
        </Layout>
    )
}
