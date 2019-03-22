import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const getBalls = ({ countBalls, size, sizeUnit }) => {
    const balls = [];
    const ballSize = size / 5;
    const angle = 360 / countBalls;
    const offset = ballSize / 2;
    const radius = size / 2;

    for (let i = 0; i < countBalls; i++) {
        const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset + sizeUnit;
        const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset + sizeUnit;
        balls.push(
            <div
                className={`clap-ball-${i}`}
                style={{
                    "--x": x,
                    "--y": y,
                }}
                key={i.toString()}
            />,
        );
    }
    return balls;
};

export const ClapSpinner = ({ size, frontColor, backColor, loading, sizeUnit }) => {
    const countBalls = 7;
    const className = "clap-spinner";
    return (
        loading && (
            <div
                className={className}
                style={{
                    "--size": `${size}${sizeUnit}`,
                    "--front-color": `${frontColor}`,
                    "--back-color": `${backColor}`,
                }}
            >
                {getBalls({
                    countBalls,
                    size,
                    sizeUnit,
                })}
            </div>
        )
    );
};

ClapSpinner.defaultProps = {
    loading: true,
    size: 30,
    frontColor: "#00ff89",
    backColor: "#4b4c56",
    sizeUnit: "px",
};

ClapSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    frontColor: PropTypes.string,
    backColor: PropTypes.string,
    sizeUnit: PropTypes.string,
};
