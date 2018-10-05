import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const getCubes = (countCubeInLine, color, size) => {
    const cubes = [];
    let keyValue = 0;
    for (let i = 0; i < countCubeInLine; i++) {
        cubes.push(
            <Cube
                color={color}
                size={size}
                x={i * (size / 3 + size / 15)}
                y={0}
                key={keyValue.toString()}
                index={i}
            />,
        );
        keyValue++;
    }
    return cubes;
};

export const PulseSpinner = ({ size, color }) => {
    const countCubeInLine = 3;
    return (
        <Wrapper size={size}>{getCubes(countCubeInLine, color, size)}</Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.size}px;
    height: ${props => props.size / 2.5}px;
`;

const Cube = styled.div`
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    width: ${props => props.size / 5}px;
    height: ${props => props.size / 2.5}px;
    background-color: ${props => props.color};
    animation: ${motion} 1.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) infinite;
    animation-delay: ${props => props.index * 0.15}s;
`;

PulseSpinner.defaultProps = {
    size: 40,
    color: "#fff",
};

PulseSpinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};
