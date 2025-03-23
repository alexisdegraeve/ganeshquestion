import Stage from "../stage/stage";

function FourStages() {
    return (
        <div>
            <Stage level="4" active={true}></Stage>
            <Stage level="3"></Stage>
            <Stage level="2"></Stage>
            <Stage level="1"></Stage>
        </div>
    );
}

export default FourStages;
