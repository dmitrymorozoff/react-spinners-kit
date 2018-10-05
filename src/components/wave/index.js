import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    25% {
        transform: skewY(25deg);;
    }
    50% {
        height: 100%;
        margin-top: 0;
    }
    75% {
        transform: skewY(-25deg);
    }
`;

const getBars = (countBars, color, size) => {
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
            />,
        );
    }
    return bars;
};

export const WaveSpinner = ({ size, color }) => {
    const countBars = 10;
    return <Wrapper size={size}>{getBars(countBars, color, size)}</Wrapper>;
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.size * 2.5}px;
    height: ${props => props.size}px;
    overflow: hidden;
`;

const Bar = styled.div`
    position: absolute;
    top: ${props => props.y + props.size / 10}px;
    left: ${props => props.x}px;
    width: ${props => props.size / 5}px;
    height: ${props => props.size / 10}px;
    margin-top: ${props => props.size - props.size / 10}px;
    transform: skewY(0deg);
    background-color: ${props => props.color};
    animation: ${motion} 1.25s ease-in-out infinite;
    animation-delay: ${props => props.index * 0.15}s;
`;

WaveSpinner.defaultProps = {
    size: 30,
    color: "#fff",
};

WaveSpinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};
