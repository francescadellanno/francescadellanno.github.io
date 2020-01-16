import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import classnames from 'classnames';
import './styles/image-loader.scss';

const ImageLoader = ({ imageId, pixelated = false }) => {
    
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="img-loader__container">
             <LazyLoad 
                debounce={false}
                offsetVertical={100}
            >
                <div className={classnames("img-loader__item", { "img-loader__item--hide": imageLoaded }, { "img-loader__item--pixel": pixelated })}>
                    <img 
                        src={`https://source.unsplash.com/${imageId}/16x9`}
                        alt="corgi-1"
                    />
                </div>
            </LazyLoad>
            <LazyLoad 
                debounce={false}
                throttle={2000}
            >
                <div className={classnames("img-loader__item", { "img-loader__item--hide": !imageLoaded })}>
                    <img 
                        src={`https://source.unsplash.com/${imageId}/1600x900`}
                        alt="corgi-1"
                        onLoad={() => {
                            setImageLoaded(true)
                        }}
                    />
                </div>
            </LazyLoad>
        </div>
    )
} 

export default ImageLoader;
