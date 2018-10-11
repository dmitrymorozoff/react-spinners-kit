import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from { transform: rotateX(0) rotateY(0); }
    to   { transform: rotateX(360deg) rotateY(360deg); }
`;

export const CubeSpinner = ({ size, backColor, frontColor, loading }) => {
    return (
        loading && (
            <Wrapper size={size}>
                <CubeWrapper x={0} y={0}>
                    <Cube size={size}>
                        <Side front={true} size={size} color={frontColor} />
                        <Side back={true} size={size} color={frontColor} />
                        <Side bottom={true} size={size} color={backColor} />
                        <Side top={true} size={size} color={backColor} />
                        <Side left={true} size={size} color={backColor} />
                        <Side right={true} size={size} color={backColor} />
                    </Cube>
                </CubeWrapper>
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
    perspective: ${props => props.size * 4}px;
`;

const CubeWrapper = styled.div`
    sposition: absolute;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    width: inherit;
    height: inherit;
`;

const Cube = styled.div`
    position: relative;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    transform-style: preserve-3d;
    animation: ${rotate} 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
`;

const rotateXCube = props => {
    if (props.top) {
        return 90;
    }
    if (props.bottom) {
        return -90;
    }
    return 0;
};

const rotateYCube = props => {
    if (props.left) {
        return 90;
    }
    if (props.right) {
        return -90;
    }
    if (props.back) {
        return 180;
    }
    return 0;
};

const Side = styled.div`
    backface-visibility: hidden;
    display: block;
    position: absolute;
    width: inherit;
    height: inherit;
    background-color: ${props => props.color};
    transform: rotateX(${props => rotateXCube(props)}deg)
        rotateY(${props => rotateYCube(props)}deg)
        translateZ(${props => props.size / 2}px);
`;

CubeSpinner.defaultProps = {
    loading: true,
    size: 25,
    frontColor: "#00ff89",
    backColor: "#686769",
};

CubeSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    frontColor: PropTypes.string,
    backColor: PropTypes.string,
};
