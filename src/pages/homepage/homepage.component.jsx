import React from 'react';
import './homepage.styles.scss';
import About from '../../components/about/about.component';
import Features from '../../components/features/features.component';

const HomePage = () => {
    return (
        <div className='homepage'>
            {/* <Directory /> */}
            <main>
                <About />
                <Features />
                <section class="section-technology"></section>
                <section class="section-stories"></section>
            </main>

        </div>

    )
}

export default HomePage;