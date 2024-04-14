import classes from './pic-item.module.css'; // Import the CSS file


const PicItem = (props) => {
    return (
        <div className={classes.pic}>
        <img src={props.pic} alt={props.name}
        
        />
        <p>{props.name}</p>
        </div>
    );
    }
    export default PicItem;