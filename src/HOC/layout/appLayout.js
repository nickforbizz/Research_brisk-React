import React from 'react'
import AppHeader from './header/header';
import AppFooter from './footer/footer';

export default function AppLayout(props) {
    return (
        <>
            <div className="App" data-spy="scroll" data-target="#myScrollspy" data-offset="15">
                <div className="Xcontainer">

                    <section>

                        <article>
                            <AppHeader />
                        </article>

                        <main>
                            {props.children}
                        </main>

                        <article>
                            <AppFooter />
                        </article>
                    </section>
                </div>
            </div>
        </>
    )
}
