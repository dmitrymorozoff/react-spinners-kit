import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motionPlayer = props => keyframes`
    0% {
        top: ${props.left ? 0 : props.size / 3.5}px;
    }
    50% {
        top: ${props.left ? props.size / 3.5 : 0}px;
    }
    100% {
        top: ${props.left ? 0 : props.size / 3.5}px;
    }
`;

const motionBall = props => keyframes`
    0% {
        top: ${props.size / 3.5 - props.size / 8}px;
        left: ${props.size / 12}px;
    }
    25% {
        top: ${props.size / 3.5}px;
        left: ${props.size - props.size / 8}px; 
    }
    50% {
        top: ${props.size / 1.75 - props.size / 8}px;
        left: ${props.size / 12}px; 
    }
    75% {
        top: ${props.size / 3.5}px;
        left: ${props.size - props.size / 8}px;
    }
    100% {
        top: ${props.size / 3.5 - props.size / 8}px;
        left: ${props.size / 12}px; 
    }
`;

export const PongSpinner = ({ size, color, loading }) => {
    return (
        loading && (
            <Wrapper size={size}>
                <Player left={true} color={color} size={size} />
                <Ball color={color} size={size} />
                <Player right={true} color={color} size={size} />
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    position: relative;
    width: ${props => props.size}px;
    height: ${props => props.size / 1.75}px;
`;

const Ball = styled.div`
    position: absolute;
    width: ${props => props.size / 8}px;
    height: ${props => props.size / 8}px;
    border-radius: 50%;
    background-color: ${props => props.color};
    animation: ${props => motionBall(props)} 2s linear infinite;
`;

const Player = styled.div`
    position: absolute;
    width: ${props => props.size / 12}px;
    height: ${props => props.size / 3}px;
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
};

PongSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
};
