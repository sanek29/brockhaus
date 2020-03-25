import React from 'react'
import {Menu} from 'antd'


function LeftSide(props) {
    return (
        <Menu mode={props.mode}>
            <Menu.Item key="mail">
                <a href="/">Home</a>
            </Menu.Item>
        </Menu>
    )
}

export default LeftSide