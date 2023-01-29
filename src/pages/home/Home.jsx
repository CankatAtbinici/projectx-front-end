import React from 'react';
import Content from '../../components/content/content';
import Header from '../../components/header/header';
import TopBar from '../../components/top-bar/Top-Bar';
function Home(props) {


    
    return (
        <div>
            
            <Header/>
            <TopBar/>
            <Content/>
        </div>
    );
}

export default Home;