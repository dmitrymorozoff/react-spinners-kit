import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = () => keyframes`
    0% {
        border-width: 10px; 
    }
    25% {
        border-width: 3px; 
    }
    50% {
        transform: rotate(115deg); 
        border-width: 10px;
    }
    75% {
        border-width: 3px;
    }
    100% {
        border-width: 10px;
    }
`;
export const RainbowSpinner = ({ size, color, loading }) => {
    return (
        loading && (
            <Wrapper size={size}>
                <Line size={size} color={color} />
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    width: ${props => props.size}px;
    height: ${props => props.size / 2}px;
    overflow: hidden;
`;

const Line = styled.div`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    border-style: solid;
    border-top-color: ${props => props.color};
    border-right-color: ${props => props.color};
    border-left-color: transparent;
    border-bottom-color: transparent;
    box-sizing: border-box;
    transform: rotate(-200deg);
    animation: ${rotate} 3s ease-in-out infinite;
`;

RainbowSpinner.defaultProps = {
    loading: true,
    size: 50,
    color: "#fff",
};

RainbowSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
};
