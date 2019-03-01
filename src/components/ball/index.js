import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const motion = props => keyframes`
    0% {
        transform: translateX(0) scale(1);
    }
    25% {
        transform: translateX(${props.size / 2}${props.sizeUnit}) scale(0.25);
    }
    50% {
        transform: translateX(0) scale(1);
    }
    75% {
        transform: translateX(${-props.size / 2}${props.sizeUnit}) scale(0.25);
    }
    100% {
        transform: translateX(0) scale(1);

    }
`;

export const BallSpinner = ({ size, color, loading, sizeUnit }) => {
    return (
        loading && (
            <Wrapper size={size}>
                <Ball color={color} size={size} sizeUnit={sizeUnit} />
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size / 2}${props.sizeUnit}`};
`;

const Ball = styled.div`
    width: ${props => `${props.size / 3}${props.sizeUnit}`};
    height: ${props => `${props.size / 3}${props.sizeUnit}`};
    border-radius: 50%;
    background-color: ${props => props.color};
    animation: ${props => motion(props)} 3s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`;

BallSpinner.defaultProps = {
    loading: true,
    size: 40,
    color: "#00ff89",
    sizeUnit: "px",
};

BallSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
