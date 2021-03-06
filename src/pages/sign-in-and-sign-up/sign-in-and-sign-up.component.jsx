import React from "react";

import SingIn from "../../components/sing-in/sing-in.component";
import SingUp from "../../components/sing-up/sing-up.component";

import './sign-in-and-sign-up.styles.scss';

const SingInAndSingUpPage = () => (
    <div className='sing-in-and-sing-up'>
        <SingIn />
        <SingUp />
    </div>
);

export default SingInAndSingUpPage;