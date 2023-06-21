import React from 'react';
import Sprite from './sprite.svg';

const Icon = () => {
    return (
        <div>
            <svg>
                <use xlingkHref={`${Sprite}#icon-name`}/>
            </svg>
        </div>
    )
}

export default Icon;