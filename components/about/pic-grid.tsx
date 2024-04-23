import React from 'react';
import classes from './pic-grid.module.scss';
import PicItem from './pic-item';

interface Pic {
    pic: string;
    name: string;
}

const PicGrid = ({ pics }: { pics: Pic[] }) => {
    return (
        <div className={classes.grid}>
            {pics.map((pic: Pic) => (
                <PicItem pic={pic.pic} name={pic.name} />
            ))}
        </div>
    );
}

export default PicGrid;
