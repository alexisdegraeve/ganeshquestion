import './stage.scss'

const Stage = ({level, active}) => {
    return (
        <div >
            <div>
            <svg height="280" width="360" xmlns="http://www.w3.org/2000/svg" className={'stage ' + (active ? 'active' : '')}>
                <defs>
                    <linearGradient id="header-shape-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" className='stop1'/>
                    <stop offset="50%" className='stop2'/>
                    <stop offset="100%" className='stop1'/>
                    </linearGradient>
                </defs>
                <polygon points="150,15 258,77 258,202 150,265 42,202 42,77" fill={!active ? "transparent" : "url(#header-shape-gradient)"}  />
                <text x="43%" y="53%" dominant-baseline="middle" text-anchor="middle" class="heavy">{ level }</text>
                Sorry, your browser does not support inline SVG.
                </svg>

            </div>
            
            
        </div>
    );
}

export default Stage;