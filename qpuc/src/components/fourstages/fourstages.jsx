import Stage from "../stage/stage";
import "./fourstages.scss"

const FourStages = () => {
    return (
        <div>
            <Stage level="4"></Stage>
            <Stage level="3"></Stage>
            <Stage level="2"></Stage>
            <Stage level="1"></Stage>
            <Stage level="0" active={true}></Stage>
        </div>
    );
}

export default FourStages;
