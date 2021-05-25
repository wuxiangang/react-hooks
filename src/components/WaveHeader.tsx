import React, { FC } from 'react'

const WaveHeader: FC = () => {
    return (
        <div className="u-waver-header header">
            <svg viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="0.17577678740639313" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
                </defs>
                <g>
                    <use href="#0.17577678740639313" x="48" y="0" fill="#FFFFFF"></use>
                </g>
            </svg>
        </div>
    )
}

export default WaveHeader