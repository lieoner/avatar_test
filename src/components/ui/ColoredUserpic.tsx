import React, { FC, useCallback, useState } from 'react';

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
        borderRadius: '50%',
    };

    const avatar = {
        flex: 1,
        backgroundColor: backgroundColor,
        margin: margin,
        padding: colorWidth,
        overflow: 'hidden',
        borderRadius: '50%',
    };

    const avatarWrapper = {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: '50%',
    };

    const avatarImage = {
        height: '100%',
        width: 'auto',
    };

    const toggleHovered = useCallback(() => {
        setIsHovered(!isHovered);
    }, [isHovered]);

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
                toggleHovered();
            }}
            onMouseLeave={() => {
                toggleHovered();
            }}
        >
            <div className='avatar' style={avatar}>
                <div className='avatarWrapper' style={avatarWrapper}>
                    <img src={src} alt='avatar' style={avatarImage} />
                </div>
            </div>
        </div>
    );
};
