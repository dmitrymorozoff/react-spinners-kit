import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const wave = props => keyframes`
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    50% {
        transform: translateY(${-props.size / 5}px);
        opacity: 0.25;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

const getPlanes = ({ countPlaneInLine, color, size }) => {
    const lines = [];
    const planes = [];
    let keyValue = 0;
    for (let i = 0; i < countPlaneInLine; i++) {
        for (let j = 0; j < countPlaneInLine; j++) {
            planes.push(
                <Plane
                    color={color}
                    size={size}
                    x={i * (size / 6 + size / 9)}
                    y={j * (size / 6 + size / 9) + size / 10}
                    key={i + j.toString()}
                    index={keyValue}
                />,
            );
            keyValue++;
        }
        lines.push(
            <Line index={keyValue} key={keyValue.toString()} size={size}>
                {[...planes]}
            </Line>,
        );
        planes.length = 0;
    }
    return lines;
};

export const FlagSpinner = ({ size, color, loading }) => {
    const countPlaneInLine = 4;
    return (
        loading && (
            <Wrapper size={size}>
                {getPlanes({ countPlaneInLine, color, size })}
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
`;

const Line = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    animation: ${wave} 1.5s cubic-bezier(0.86, 0, 0.07, 1) infinite;
    animation-delay: ${props => props.index * 0.05}s;
`;

const Plane = styled.div`
    position: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    width: ${props => props.size / 6}px;
    height: ${props => props.size / 6}px;
    background-color: ${props => props.color};
`;

FlagSpinner.defaultProps = {
    loading: true,
    size: 40,
    color: "#fff",
};

FlagSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
};
