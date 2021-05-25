import React, { FC } from 'react'

const WaveFooter: FC = () => {
    return (
        <div className="u-waver-footer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="0.8530957920717348" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                </defs>
                <g>
                    <use href="#0.8530957920717348" x="48" y="0" fill="#000"></use>
                </g>
            </svg>
        </div>
    )
}

export default WaveFooter