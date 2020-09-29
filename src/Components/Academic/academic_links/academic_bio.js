import React from 'react'
import Navlinks from '../Navlinks/navlinks'

export default function Academic_bio() {
    return (
        <section>
            <div className="container">

                <div className="row">


                    <div className="col-sm-3">
                        <Navlinks />
                    </div>

                    <div className="col-sm-9">
                        <h3>Academic Bio</h3> <hr/>

                        <article className="academic_bio_box">
                            <div className="bio">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laborum deserunt. Error ut distinctio fuga. Itaque commodi 
                                repudiandae quod obcaecati qui. Ut omnis itaque corrupti, aut illum tempore exercitationem voluptatum.
                            </div>
                        </article>

                        <article>
                            <h5 className="mt-4">Our Qualities</h5>
                            <ul className="bio_nav">
                                <li className="nav-item">We Deliver on time</li>
                                <li> Ut omnis itaque corrupti, </li>
                                <li>Lorem ipsum dolor sit amet consectetur</li>
                            </ul>
                        </article>
                    </div>


                </div>
                {/* .row */}

            </div>
            {/* .container  */}
        </section>
    )
}
