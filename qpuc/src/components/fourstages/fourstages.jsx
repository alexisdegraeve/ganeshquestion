import Stage from "../stage/stage";
import "./fourstages.scss"

const FourStages = ({start, difficulty}) => {
    return (
        <div className="d-flex flex-nowrap four-stages">
            <Stage level="4" active={start & difficulty>4 && difficulty<=5}></Stage>
            <Stage level="3" active={start & difficulty>3 && difficulty<=5}></Stage>
            <Stage level="2" active={start & difficulty>2 && difficulty<=5}></Stage>
            <Stage level="1" active={start & difficulty>1 && difficulty<=5}></Stage>
            <Stage level="0" active={start & difficulty>=1}></Stage>
        </div>
    );
}

export default FourStages;
