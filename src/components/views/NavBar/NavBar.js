import React, { useState } from 'react';
import LeftSide from './Sections/LeftSide';
//import RightSide from './Sections/RightSide';
import { Drawer, Button, Icon } from 'antd';
import './Sections/NavBar.css';

function NavBar() {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    }

    const onClone = () => {
        setVisible(false)
    }

    return (
        <nav className="menu" style={{ position: 'fixed', zIndex:  5, width: '100%' }}>
            <div className="menu_logo">
                <a href="/">Logo</a>
            </div>
            <div className="menu_container">
                <div className="menu__left">
                    <LeftSide mode="horizontal" />
                </div>
                <div className="menu__right">
                    
                </div>
                <Button
                    className="menu_mobile-button"
                    type="primary"
                    onClick={showDrawer}
                >
                    
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    className="menu_drawer"
                    closable={false}
                    onClose={onClone}
                    visible={visible}
                >
                    <LeftSide mode="inline" />
                    
                </Drawer>
            </div>
        </nav>
    )
}

export default NavBar