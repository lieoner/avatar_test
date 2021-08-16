import React, { FC, useState } from 'react';

interface Props {
    src: string;
    size: number;
    margin: number;
    backgroundColor: string;
    colors: string[];
    hoverColors: string[];
    colorWidth: number;
}

export const ColoredUserpic: FC<Props> = ({
    size,
    src,
    margin,
    backgroundColor,
    colors,
    hoverColors,
    colorWidth,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const container = {
        width: size,
        height: size,
        display: 'flex',
        overflow: 'hidden',
        borderRadius: (size / 2).toFixed(0) + 'px',
    };

    const avatar = {
        backgroundColor: backgroundColor,
        flex: 1,
        margin: margin,
        borderRadius: (size / 2).toFixed(0) + 'px',
        overflow: 'hidden',
        padding: colorWidth,
    };
    const avatarPicture = {
        height: '100%',
        width: '100%',
        borderRadius: (size / 2).toFixed(0) + 'px',
    };
    const toggleGradient = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div
            className='container'
            style={{
                ...container,
                backgroundImage: !isHovered
                    ? `linear-gradient(to right, ${colors[0]}, ${colors[1]})`
                    : `linear-gradient(to right, ${hoverColors[0]}, ${hoverColors[1]})`,
            }}
            onMouseEnter={() => {
                toggleGradient();
            }}
            onMouseLeave={() => {
                toggleGradient();
            }}
        >
            <div className='avatar' style={avatar}>
                <img src={src} alt='avatar' style={avatarPicture} />
            </div>
        </div>
    );
};
