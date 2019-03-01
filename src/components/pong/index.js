import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motionPlayer = props => keyframes`
    0% {
        top: ${props.left ? 0 : props.size / 3.5}${props.sizeUnit};
    }
    50% {
        top: ${props.left ? props.size / 3.5 : 0}${props.sizeUnit};
    }
    100% {
        top: ${props.left ? 0 : props.size / 3.5}${props.sizeUnit};
    }
`;

const motionBall = props => keyframes`
    0% {
        top: ${props.size / 3.5 - props.size / 8}${props.sizeUnit};
        left: ${props.size / 12}${props.sizeUnit};
    }
    25% {
        top: ${props.size / 3.5}${props.sizeUnit};
        left: ${props.size - props.size / 8}${props.sizeUnit}; 
    }
    50% {
        top: ${props.size / 1.75 - props.size / 8}${props.sizeUnit};
        left: ${props.size / 12}${props.sizeUnit}; 
    }
    75% {
        top: ${props.size / 3.5}${props.sizeUnit};
        left: ${props.size - props.size / 8}${props.sizeUnit};
    }
    100% {
        top: ${props.size / 3.5 - props.size / 8}${props.sizeUnit};
        left: ${props.size / 12}${props.sizeUnit}; 
    }
`;

export const PongSpinner = ({ size, color, loading, sizeUnit }) => {
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                <Player left={true} color={color} size={size} sizeUnit={sizeUnit} />
                <Ball color={color} size={size} sizeUnit={sizeUnit} />
                <Player right={true} color={color} size={size} sizeUnit={sizeUnit} />
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    position: relative;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size / 1.75}${props.sizeUnit}`};
`;

const Ball = styled.div`
    position: absolute;
    width: ${props => `${props.size / 8}${props.sizeUnit}`};
    height: ${props => `${props.size / 8}${props.sizeUnit}`};
    border-radius: 50%;
    background-color: ${props => props.color};
    animation: ${props => motionBall(props)} 2s linear infinite;
`;

const Player = styled.div`
    position: absolute;
    width: ${props => `${props.size / 12}${props.sizeUnit}`};
    height: ${props => `${props.size / 3}${props.sizeUnit}`};
    background-color: ${props => props.color};
    left: ${props => (props.left ? 0 : props.size)};
    right: ${props => (props.right ? 0 : props.size)};
    border-radius: 4px;
    animation: ${props => motionPlayer(props)} 2s linear infinite;
`;

PongSpinner.defaultProps = {
    loading: true,
    size: 60,
    color: "#4b4c56",
    sizeUnit: "px",
};

PongSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
