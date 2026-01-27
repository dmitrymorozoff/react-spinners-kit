import React, { CSSProperties } from 'react';
import styles from './ball.module.css';

export interface BallSpinnerProps {
    loading?: boolean;
    size?: number;
    color?: string;
    sizeUnit?: 'px' | 'em' | 'rem' | '%';
    className?: string;
    style?: CSSProperties;
}

export const BallSpinner: React.FC<BallSpinnerProps> = ({
    size = 40,
    color = '#00ff89',
    loading = true,
    sizeUnit = 'px',
    className = '',
    style,
}) => {
    if (!loading) {
        return null;
    }

    const wrapperStyle: CSSProperties = {
        width: `${size}${sizeUnit}`,
        height: `${size / 2}${sizeUnit}`,
        ...style,
    };

    const ballStyle: CSSProperties = {
        width: `${size / 3}${sizeUnit}`,
        height: `${size / 3}${sizeUnit}`,
        backgroundColor: color,
        // @ts-ignore - CSS custom properties
        '--translate-x': `${size / 2}${sizeUnit}`,
    };

    return (
        <div className={`${styles.wrapper} ${className}`.trim()} style={wrapperStyle}>
            <div className={styles.ball} style={ballStyle} />
        </div>
    );
};

BallSpinner.displayName = 'BallSpinner';
