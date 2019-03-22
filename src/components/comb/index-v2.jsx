import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const getBars = ({ countBars, color, size, sizeUnit }) => {
    const bars = [];
    for (let i = 0; i < countBars; i++) {
        bars.push(
            <div
                className={`comb-bar-${i}`}
                color={color}
                size={size}
                key={i.toString()}
                sizeUnit={sizeUnit}
                index={i}
            />,
        );
    }
    return bars;
};

export const CombSpinner = ({ size, color, loading, sizeUnit }) => {
    const countBars = 11;
    const className = "comb-spinner";
    return (
        loading && (
            <div
                className={className}
                style={{
                    "--size": `${size}${sizeUnit}`,
                    "--color": `${color}`,
                }}
            >
                {getBars({
                    countBars,
                    color,
                    size,
                    sizeUnit,
                })}
            </div>
        )
    );
};

CombSpinner.defaultProps = {
    loading: true,
    size: 200,
    color: "#fff",
    sizeUnit: "px",
};

CombSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
