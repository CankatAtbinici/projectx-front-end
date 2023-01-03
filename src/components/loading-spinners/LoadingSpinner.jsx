import React from 'react';
import DotLoader from "react-spinners/DotLoader";

function LoadingSpinner(props) {
    return (
        <div className='loading-spinner-parent'>
            <DotLoader color="#ff385c"  size={100} speedMultiplier={1}  />
        </div>
    );
}

export default LoadingSpinner;