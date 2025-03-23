import './brick.scss'

const Brick = ({level, active}) => {
    return (
        <div className={active ? 'active' : '' }>
            BRICK
            { level }
        </div>
    );
}

export default Brick;