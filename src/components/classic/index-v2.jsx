import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const getBars = ({ countBars: countBars }) => {
    const bars = [];
    for (let i = 0; i < countBars; i++) {
        bars.push(<div className={`classic-bar-${i}`} countBars={countBars} key={i.toString()} />);
    }
    return bars;
};

export const ClassicSpinner = ({ size, color, loading, sizeUnit }) => {
    const countBars = 16;
    const className = "classic-spinner";
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
                })}
            </div>
        )
    );
};

ClassicSpinner.defaultProps = {
    loading: true,
    size: 30,
    color: "#fff",
    sizeUnit: "px",
};

ClassicSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
