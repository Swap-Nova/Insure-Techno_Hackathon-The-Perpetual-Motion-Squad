import React from 'react';
import Banner from '../../components/banner/Banner.js';
import Hero from '../../components/hero/Hero.js';
import Info from '../../components/info/Info.js';

const Home = () =>{
    return(
        <div>
            <Hero />
            <section className="section3">
                <Info />
            </section>
            <section className="section2">
                <Banner />
            </section>
        </div>
    )
}

export default Home;