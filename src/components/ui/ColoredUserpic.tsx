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
        padding: colorWidth,
        margin: margin,
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
                    ? `linear-gradient(to right, ${colors.map((el) => {
                          return el;
                      })})`
                    : `linear-gradient(to right, ${hoverColors.map((el) => {
                          return el;
                      })})`,
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
