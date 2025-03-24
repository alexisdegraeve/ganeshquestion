import Stage from "../stage/stage";
import "./fourstages.scss"

const FourStages = ({start}) => {
    return (
        <div className="d-flex flex-nowrap flex-column">
            <Stage level="4"></Stage>
            <Stage level="3"></Stage>
            <Stage level="2"></Stage>
            <Stage level="1"></Stage>
            <Stage level="0" active={start}></Stage>
        </div>
    );
}

export default FourStages;
