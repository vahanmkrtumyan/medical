import React from 'react'
import { Preloader, Placeholder } from 'react-preloading-screen'
import NoSSR from 'react-no-ssr'
import Header from '../components/Layouts/Header'
import Team from '../components/home-one/Team'
import Funfacts from '../components/home-one/Funfacts'
import Partner from '../components/home-one/Partner'
import Footer from '../components/Layouts/Footer'
import GoTop from '../components/Layouts/GoTop'
import PageTitle from '../components/about/PageTitle'
import AboutArea from '../components/about/AboutArea'

class About extends React.Component {
    render() {
        return (
            <NoSSR>
                <Preloader>
                    <Placeholder>
                        <div className="preloader">
                            <div className="spinner"></div>
                        </div>
                    </Placeholder>
                    <Header />
                    <PageTitle />
                    <AboutArea />
                    <Team />
                    <Partner />
                    <Funfacts />
                    <Footer />
                    <GoTop scrollStepInPx="50" delayInMs="16.66" />
                </Preloader>
            </NoSSR>
        )
    }
}

export default About