import { User } from '../../../../models';
import './AllUsersTable.css';


interface AllUsersTableProps {
    data: User[];
}

export default function AllUsersTable({ data }: AllUsersTableProps) {
    return (
        <table className='users_table'>
            <thead >
                <tr>
                    <th className='users_table_th'>Name</th>
                    <th className='users_table_th'>Gender</th>
                    <th className='users_table_th'>Country</th>
                </tr>
            </thead >
            <tbody>
                {data.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.gender}</td>
                        <td>{user.country}</td>
                    </tr>
                ))}

            </tbody>
        </table >
    )
}
