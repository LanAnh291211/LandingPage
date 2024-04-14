import classes from './pic-grid.module.css';
import PicItem from './pic-item';
const PicGrid = ({ pics }) => {
    return (
        <div className={classes.grid}>
            {pics.map((pic) => (
                <PicItem pic={pic.pic} name={pic.name} />
            ))}
        </div>
    );
}
export default PicGrid;
