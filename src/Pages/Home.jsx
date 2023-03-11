import React, { useContext } from 'react';
import { UserContext } from '../Components/Context';

const Home = () => {
    const data = useContext(UserContext)
    console.log(data.auth)
    return (
        <div>
            this is home
        </div>
    );
};

export default Home;