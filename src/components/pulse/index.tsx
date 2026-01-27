import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = keyframes`
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

const getCubes = ({ countCubeInLine, color, size, sizeUnit }) => {
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
                sizeUnit={sizeUnit}
            />,
        );
        keyValue++;
    }
    return cubes;
};

export const PulseSpinner = ({ size, color, loading, sizeUnit }) => {
    const countCubeInLine = 3;
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                {getCubes({ countCubeInLine, color, size, sizeUnit })}
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size / 2.5}${props.sizeUnit}`};
`;

const Cube = styled.div`
    position: absolute;
    top: ${props => `${props.y}${props.sizeUnit}`};
    left: ${props => `${props.x}${props.sizeUnit}`};
    width: ${props => `${props.size / 5}${props.sizeUnit}`};
    height: ${props => `${props.size / 2.5}${props.sizeUnit}`};
    background-color: ${props => props.color};
    animation: ${motion} 1.5s cubic-bezier(0.895, 0.03, 0.685, 0.22) infinite;
    animation-delay: ${props => props.index * 0.15}s;
`;

PulseSpinner.defaultProps = {
    loading: true,
    size: 40,
    color: "#fff",
    sizeUnit: "px",
};

PulseSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
