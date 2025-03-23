import './stage.scss'

const Stage = ({level, active}) => {
    return (
        <div className={active ? 'active' : '' }>
            STAGE
            { level }
        </div>
    );
}

export default Stage;