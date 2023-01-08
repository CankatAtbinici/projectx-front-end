import React from 'react';
import {  faUserGraduate , faLocationDot, faPersonSwimming, faUser  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function TopBar(props) {
    return (
        <div>
            <section>
            <div className='row top-bar-parent p-4' >
                <div className="col-3"> <FontAwesomeIcon icon={faUserGraduate} size="2x"/> </div>
                <div className="col-3"> <FontAwesomeIcon icon ={faLocationDot} size="2x" /></div>
                <div className="col-3"><FontAwesomeIcon icon ={faPersonSwimming}  size="2x"/></div>
                <div className="col-3"> <FontAwesomeIcon icon ={faUser}  size="2x"/> </div>

            </div>
            </section>
        </div>
    );
}

export default TopBar;