import React from 'react';
import './Loader.scss';

const Loader = (): React.ReactElement => {
    return (
        <div className="loader">
            <div className="rotator">
                <div className="triangle"></div>
                <div className="triangle"></div>
                <div className="triangle"></div>
                <div className="triangle"></div>
            </div>
        </div>
    );
};

export default Loader;
