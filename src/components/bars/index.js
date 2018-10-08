import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    0% {
        width: ${props.size / 20}px
    }
    50%{
        width: ${props.size / 6}px
    }
    100% {
        width: ${props.size / 20}px
    }
`;

const getBars = (countBars, color, size) => {
    const bars = [];
    for (let i = 0; i < countBars; i++) {
        bars.push(
            <Bar
                color={color}
                size={size}
                x={i * (size / 5 + size / 25) - size / 12}
                key={i.toString()}
                index={i}
            />,
        );
    }
    return bars;
};

export const BarsSpinner = ({ size, color }) => {
    const countBars = 5;
    return <Wrapper size={size}> {getBars(countBars, color, size)} </Wrapper>;
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
`;

const Bar = styled.div`
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    width: ${props => props.size / 20}px;
    height: ${props => props.size}px;
    background-color: ${props => props.color};
    animation: ${motion} 1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: ${props => props.index * 0.15}s;
`;

BarsSpinner.defaultProps = {
    size: 40,
    color: "#00ff89",
};

BarsSpinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};
