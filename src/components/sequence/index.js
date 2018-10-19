import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = props => keyframes`
    0% {
        top: ${props.size}px;
        transform: rotateY(0deg);
    }
    30%{
        top: 0;
        transform: rotateY(90deg);
    }
    100% {
        transform: rotateY(0deg);
        top: -${props.size}px;
    }
`;

const getCubes = ({ countCubesInLine, leftColor, frontColor, size }) => {
    const cubes = [];
    let keyValue = 0;
    for (let i = 0; i < countCubesInLine; i++) {
        cubes.push(
            <CubeWrapper
                x={i * (size / 8 + size / 11)}
                y={0}
                key={keyValue.toString()}
            >
                <Cube size={size} index={keyValue}>
                    <Side front={true} size={size} color={frontColor} />
                    <Side left={true} size={size} color={leftColor} />
                </Cube>
            </CubeWrapper>,
        );
        keyValue++;
    }
    return cubes;
};

export const SequenceSpinner = ({ size, leftColor, frontColor, loading }) => {
    const countCubesInLine = 5;
    return (
        loading && (
            <Wrapper size={size}>
                {getCubes({ countCubesInLine, leftColor, frontColor, size })}
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.size}px;
    height: ${props => props.size / 1.75}px;
    perspective: ${props => props.size * 3}px;
    overflow: hidden;
    transform: rotateY(20deg);
`;

const CubeWrapper = styled.div`
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    width: inherit;
    height: inherit;
`;

const Cube = styled.div`
    position: relative;
    width: ${props => props.size / 8}px;
    height: ${props => props.size / 1.75}px;
    transform-style: preserve-3d;
    animation: ${rotate} 1.75s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: ${props => props.index * 0.1}s;
`;

const Side = styled.div`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: ${props => props.color};
    transform: rotateY(${props => (props.front ? 0 : -90)}deg)
        translateZ(${props => props.size / 16}px);
`;

SequenceSpinner.defaultProps = {
    loading: true,
    size: 40,
    frontColor: "#4b4c56",
    leftColor: "#00ff89",
};

SequenceSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    frontColor: PropTypes.string,
    leftColor: PropTypes.string,
};
