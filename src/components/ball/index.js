import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    0% {
        transform: translateX(0) scale(1);
    }
    25% {
        transform: translateX(${props.size / 2}px) scale(0.25);
    }
    50% {
        transform: translateX(0) scale(1);
    }
    75% {
        transform: translateX(-${props.size / 2}px) scale(0.25);
    }
    100% {
        transform: translateX(0) scale(1);

    }
`;

export const BallSpinner = ({ size, color }) => {
    return (
        <Wrapper size={size}>
            <Ball color={color} size={size} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.size}px;
    height: ${props => props.size / 2}px;
`;

const Ball = styled.div`
    width: ${props => props.size / 3}px;
    height: ${props => props.size / 3}px;
    border-radius: 50%;
    background-color: ${props => props.color};
    animation ${props =>
        motion(props)} 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`;

BallSpinner.defaultProps = {
    size: 60,
    color: "#6B55FF",
};

BallSpinner.propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
};
