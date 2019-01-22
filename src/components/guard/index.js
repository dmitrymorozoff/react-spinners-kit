import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
        transform: rotateY(90deg);
    }
    50% {
        transform: rotateY(0deg);
    }
    100% {
        transform: rotateY(90deg);
    }
`;

const getCubes = ({ countCubesInLine, backColor, frontColor, size }) => {
    const cubes = [];
    let keyValue = 0;
    for (let i = 0; i < countCubesInLine; i++) {
        for (let j = 0; j < countCubesInLine; j++) {
            cubes.push(
                <CubeWrapper
                    size={size}
                    x={i * (size / 4 + size / 8)}
                    y={j * (size / 4 + size / 8)}
                    key={keyValue.toString()}
                >
                    <Cube size={size} index={keyValue}>
                        <Side front={true} size={size} color={frontColor} />
                        <Side left={true} size={size} color={backColor} />
                    </Cube>
                </CubeWrapper>,
            );
            keyValue++;
        }
    }
    return cubes;
};

export const GuardSpinner = ({ size, backColor, frontColor, loading }) => {
    const countCubesInLine = 3;
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
    height: ${props => props.size}px;
    perspective: ${props => props.size * 3}px;
`;

const CubeWrapper = styled.div`
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
`;

const Cube = styled.div`
    position: relative;
    width: ${props => props.size / 4}px;
    height: ${props => props.size / 4}px;
    transform-style: preserve-3d;
    animation: ${rotate} 1.5s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    animation-delay: ${props => props.index * 0.125}s;
`;

const Side = styled.div`
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: ${props => props.color};
    transform: rotateY(${props => (props.front ? 0 : -90)}deg)
        translateZ(${props => props.size / 8}px);
`;

GuardSpinner.defaultProps = {
    loading: true,
    size: 40,
    frontColor: "#00ff89",
    backColor: "#373846",
};

GuardSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    frontColor: PropTypes.string,
    backColor: PropTypes.string,
};
