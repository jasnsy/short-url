import { useParams } from 'react-router';
import axios from 'axios';

const Redirect = props => {
    const { id: code } = useParams();

    const redirectToUrl = async () => {
        const { data } = await axios.get(`http://localhost:5000/api/v1/urls/${code}`);
        window.location.replace(data.longUrl);

        return null;
    };

    if (code) {
        try {
            redirectToUrl();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h3>Redirecting...</h3>
        </div>
    );
}

export default Redirect;