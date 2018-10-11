import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const fire = keyframes`
    0% {
        opacity: 1;
        transform: scale(0.1);
    }
    25% {
        opacity: 0.85;
    }
    100% {
        transform: scale(1);
        opacity: 0;
    }
`;

export const FireworkSpinner = ({ size, color, loading }) => {
    return loading && <Wrapper size={size} color={color} />;
};

const Wrapper = styled.div`
    border: ${props => props.size / 10}px dotted ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    animation: ${fire} 1.25s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`;

FireworkSpinner.defaultProps = {
    loading: true,
    size: 40,
    color: "#fff",
};

FireworkSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
};
