import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = props => keyframes`
    0% {
        border-width: 10${props.sizeUnit}; 
    }
    25% {
        border-width: 3${props.sizeUnit}; 
    }
    50% {
        transform: rotate(115deg); 
        border-width: 10${props.sizeUnit};
    }
    75% {
        border-width: 3${props.sizeUnit};
    }
    100% {
        border-width: 10${props.sizeUnit};
    }
`;
export const RainbowSpinner = ({ size, color, loading, sizeUnit }) => {
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                <Line size={size} color={color} sizeUnit={sizeUnit} />
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size / 2}${props.sizeUnit}`};
    overflow: hidden;
`;

const Line = styled.div`
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
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
    sizeUnit: "px",
};

RainbowSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
