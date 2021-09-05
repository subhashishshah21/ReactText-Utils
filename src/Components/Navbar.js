import React from 'react'

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand mx-5">Text Utils</a>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggleDark} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${(props.mode) === 'light' ? 'dark' : 'light'}`} >{`Enable ${(props.mode) === 'light' ? 'dark' : 'light'} mode`}</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className ="form-check-label">Enable Red Mode</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className ="form-check-label">Enable Blue Mode</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggleGreen} type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className ="form-check-label">Green mode</label>
                </div>
            </div>
        </nav>
    )
}
