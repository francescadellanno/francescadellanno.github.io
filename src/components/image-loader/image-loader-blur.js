import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import classnames from 'classnames';
import './styles/image-loader.scss';

const ImageLoaderBlur = ({ imageId}) => {
    
    const [imageLoaded, setImageLoaded] = useState(false);

    const overlayStyles = {
        filter: "blur(1px)",
        transition: "opacity ease-in 1000ms",
        clipPath: "inset(0)"
    };

    return (
        <div className="img-loader__container">
             <LazyLoad 
                debounce={false}
                offsetVertical={100}
            >
                <div className={classnames("img-loader__item", { "img-loader__item--hide": imageLoaded })}>
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
                        style={overlayStyles}
                    />
                </div>
            </LazyLoad>
        </div>
    )
} 

export default ImageLoaderBlur;
