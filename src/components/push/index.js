import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`

    15% {
        transform: scaleY(1) translateX(10px);
    }
    90% {
        transform: scaleY(0.05) translateX(-5px);
    }
    100%{
        transform: scaleY(0.05) translateX(-5px);
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

export const PushSpinner = ({ size, color }) => {
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
    top: 0;
    left: ${props => props.x}px;
    width: ${props => props.size / 5}px;
    height: 100%;
    transform: scaleY(0.05) translateX(-5px);
    background-color: ${props => props.color};
    animation: ${motion} 1.25s ease-in-out infinite;
    animation-delay: ${props => props.index * 0.15}s;
`;

PushSpinner.defaultProps = {
    size: 30,
    color: "#686769",
};

PushSpinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};
