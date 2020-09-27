import React from 'react'
import AppSideNav from './layout/sidenav'
import AppCard from './../Utilities/card/card'



// styles
import './dashboard.css'

export default function Dashboard(props) {
    return (
        <div className=" dashboard-container">
            <div className="row mr-0">
                <div className="col-sm-2 sidenav_dashboard">
                    <AppSideNav />
                </div>

                <div className="col-sm-10">
                    
                        <div className="row">
                            <div className="col-md-4">
                                <AppCard />
                            </div>
                            <div className="col-md-4">
                                <AppCard />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
