import { useNavigate } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Button } from '../../components';

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className='small-container'>
            <h1>Page Not Found</h1>
            <Button onClick={() => navigate(ROUTES.HOME)}>Go Back Homepage</Button>
        </div>
    )
}
