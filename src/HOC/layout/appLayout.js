import React from 'react'
import AppHeader from './header/header';

export default function AppLayout(props) {
    return (
        <>
            <div className="App" data-spy="scroll" data-target="#myScrollspy" data-offset="15">
                <div className="Xcontainer">
                    <AppHeader />
                    {props.children}
                </div>
            </div>
        </>
    )
}
