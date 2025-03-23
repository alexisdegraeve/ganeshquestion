import Brick from "../brick/brick";

const FourInOne = () => {
    return (
        <div>
            <Brick level="4" active={true}></Brick>
            <Brick level="3"></Brick>
            <Brick level="2"></Brick>
            <Brick level="1"></Brick>
        </div>
    );
}

export default FourInOne;
