import React from 'react';
import classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop';

const IceCream = ({ scoops }) => {

    return (
        <div>
            <div className={classes.icecream}>
                <p className={classes.cone} />
                {/* <p>Please start adding scoops</p> */}
                {scoops.map((scoop) => {
                    return <Scoop key={`${scoop}${Math.random()}`} scoop={scoop} />
                })}
                <div className={classes.cherry} />
            </div>
        </div>
    );
};

export default IceCream;