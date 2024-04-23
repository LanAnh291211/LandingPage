import React from 'react';
import classes from './pic-item.module.scss'; // Import the CSS file

interface PicItemProps {
    pic: string;
    name: string;
}

const PicItem = (props: React.PropsWithChildren<PicItemProps>) => {
    return (
        <div className={classes.pic}>
            <img src={props.pic} alt={props.name} />
            <p>{props.name}</p>
        </div>
    );
};

export default PicItem;
