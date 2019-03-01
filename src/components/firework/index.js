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

export const FireworkSpinner = ({ size, color, loading, sizeUnit }) => {
    return loading && <Wrapper size={size} color={color} sizeUnit={sizeUnit} />;
};

const Wrapper = styled.div`
    border: ${props => `${props.size / 10}${props.sizeUnit}`} dotted ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
    border-radius: 50%;
    animation: ${fire} 1.25s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
`;

FireworkSpinner.defaultProps = {
    loading: true,
    size: 40,
    color: "#fff",
    sizeUnit: "px",
};

FireworkSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
