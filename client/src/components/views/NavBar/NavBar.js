import React, { useState } from 'react';
import LeftSide from './Sections/LeftSide';
import RightSide from './Sections/RightSide';
import { Drawer, Button } from 'antd';
import './Sections/NavBar.css';

function NavBar() {
    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    }

    const onClose = () => {
        setVisible(false)
    }

    return (
        <nav className="menu" style={{ position: 'fixed', zIndex:  5, width: '100%' }}>
            <div className="menu__logo">
                <a href="/">Logo</a>
            </div>
            <div className="menu__container">
                <div className="menu_left">
                    <LeftSide mode="horizontal" />
                </div>
                <div className="menu_right">
                    <RightSide mode="horizontal" />
                </div>
                <Button
                    className="menu__mobile-button"
                    type="primary"
                    onClick={showDrawer}
                >
                    
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    className="menu_drawer"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                    <LeftSide mode="inline" />
                    <RightSide mode="inline" />
                </Drawer>
            </div>
        </nav>
    )
}

export default NavBar