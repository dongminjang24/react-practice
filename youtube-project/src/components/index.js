import React from 'react';
import { Outlet } from "react-router-dom"
import Header from './Header/Header';
const Layout = () => {
    return (
        <React.Fragment>
                     <Header></Header>
                <Outlet>
                    {/*하위라우트중에 맞는 걸 가져와서 할 수 있음*/}
                </Outlet>
        </React.Fragment>
    );
};

export default Layout;