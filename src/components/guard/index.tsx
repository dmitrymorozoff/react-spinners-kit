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

const getCubes = ({ countCubesInLine, backColor, frontColor, size, sizeUnit }) => {
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
                    sizeUnit={sizeUnit}
                >
                    <Cube size={size} index={keyValue} sizeUnit={sizeUnit}>
                        <Side front={true} size={size} color={frontColor} sizeUnit={sizeUnit} />
                        <Side left={true} size={size} color={backColor} sizeUnit={sizeUnit} />
                    </Cube>
                </CubeWrapper>,
            );
            keyValue++;
        }
    }
    return cubes;
};

export const GuardSpinner = ({ size, backColor, frontColor, loading, sizeUnit }) => {
    const countCubesInLine = 3;
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                {getCubes({
                    countCubesInLine,
                    backColor,
                    frontColor,
                    size,
                    sizeUnit,
                })}
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
    height: ${props => `${props.size}${props.sizeUnit}`};
    perspective: ${props => `${props.size * 3}${props.sizeUnit}`};
`;

const CubeWrapper = styled.div`
    position: absolute;
    top: ${props => `${props.y}${props.sizeUnit}`};
    left: ${props => `${props.x}${props.sizeUnit}`};
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
`;

const Cube = styled.div`
    position: relative;
    width: ${props => `${props.size / 4}${props.sizeUnit}`};
    height: ${props => `${props.size / 4}${props.sizeUnit}`};
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
        translateZ(${props => `${props.size / 8}${props.sizeUnit}`});
`;

GuardSpinner.defaultProps = {
    loading: true,
    size: 40,
    frontColor: "#00ff89",
    backColor: "#373846",
    sizeUnit: "px",
};

GuardSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    frontColor: PropTypes.string,
    backColor: PropTypes.string,
    sizeUnit: PropTypes.string,
};
