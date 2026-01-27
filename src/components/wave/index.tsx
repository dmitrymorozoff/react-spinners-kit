import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = keyframes`
    25% {
        transform: skewY(25deg);
    }
    50% {
        height: 100%;
        margin-top: 0;
    }
    75% {
        transform: skewY(-25deg);
    }
`;

const getBars = ({ countBars, color, size, sizeUnit }) => {
    const bars = [];
    for (let i = 0; i < countBars; i++) {
        bars.push(
            <Bar
                color={color}
                size={size}
                x={i * (size / 5 + (size / 15 - size / 100))}
                y={0}
                key={i.toString()}
                index={i}
                sizeUnit={sizeUnit}
            />,
        );
    }
    return bars;
};

export const WaveSpinner = ({ size, color, loading, sizeUnit }) => {
    const countBars = 10;
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                {getBars({ countBars, color, size, sizeUnit })}
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => `${props.size * 2.5}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
    overflow: hidden;
`;

const Bar = styled.div`
    position: absolute;
    top: ${props => `${props.y + props.size / 10}${props.sizeUnit}`};
    left: ${props => `${props.x}${props.sizeUnit}`};
    width: ${props => `${props.size / 5}${props.sizeUnit}`};
    height: ${props => `${props.size / 10}${props.sizeUnit}`};
    margin-top: ${props => `${props.size - props.size / 10}${props.sizeUnit}`};
    transform: skewY(0deg);
    background-color: ${props => props.color};
    animation: ${motion} 1.25s ease-in-out infinite;
    animation-delay: ${props => props.index * 0.15}s;
`;

WaveSpinner.defaultProps = {
    loading: true,
    size: 30,
    color: "#fff",
    sizeUnit: "px",
};

WaveSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
