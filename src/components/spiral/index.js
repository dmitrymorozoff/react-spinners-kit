import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
        transform: rotateX(0deg);
    }
    25% {
        transform: rotateX(-90deg);
    }
    50% {
        transform: rotateX(-180deg);
    }
    75% {
        transform: rotateX(-270deg);
    }
    100% {
        transform: rotateX(-360deg);
    }
`;

const getCubes = ({ countCubesInLine, backColor, frontColor, size }) => {
    const cubes = [];
    let keyValue = 0;
    for (let i = 0; i < countCubesInLine; i++) {
        cubes.push(
            <CubeWrapper x={i * (size / 4)} y={0} key={keyValue.toString()}>
                <Cube size={size} index={keyValue}>
                    <Side front={true} size={size} color={frontColor} />
                    <Side back={true} size={size} color={frontColor} />
                    <Side bottom={true} size={size} color={backColor} />
                    <Side top={true} size={size} color={backColor} />
                </Cube>
            </CubeWrapper>,
        );
        keyValue++;
    }
    return cubes;
};

export const SpiralSpinner = ({ size, backColor, frontColor, loading }) => {
    const countCubesInLine = 4;
    return (
        loading && (
            <Wrapper size={size}>
                {getCubes({ countCubesInLine, backColor, frontColor, size })}
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
    height: ${props => props.size / 4}px;
    perspective: ${props => props.size * 3}px;
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
    width: ${props => props.size / 4}px;
    height: ${props => props.size / 4}px;
    transform-style: preserve-3d;
    animation: ${rotate} 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: ${props => props.index * 0.15}s;
`;

const rotateCube = props => {
    if (props.top) {
        return 90;
    }
    if (props.bottom) {
        return -90;
    }
    return 0;
};

const Side = styled.div`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: ${props => props.color};
    transform: rotateX(${props => rotateCube(props)}deg)
        rotateY(${props => (props.back ? 180 : 0)}deg)
        translateZ(${props => props.size / 8}px);
`;

SpiralSpinner.defaultProps = {
    loading: true,
    size: 40,
    frontColor: "#00ff89",
    backColor: "#686769",
};

SpiralSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    frontColor: PropTypes.string,
    backColor: PropTypes.string,
};
