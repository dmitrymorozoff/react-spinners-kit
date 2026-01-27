import { FC } from "react";

interface OneColorSpinnerProps {
    size?: number;
    color?: string;
    sizeUnit?: string;
    loading?: boolean;
}

interface TwoColorSpinnerProps {
    size?: number;
    frontColor?: string;
    backColor?: string;
    sizeUnit?: string;
    loading?: boolean;
}

declare const BallSpinner: FC<OneColorSpinnerProps>;
declare const BarsSpinner: FC<OneColorSpinnerProps>;
declare const CircleSpinner: FC<OneColorSpinnerProps>;
declare const CubeSpinner: FC<TwoColorSpinnerProps>;
declare const DominoSpinner: FC<OneColorSpinnerProps>;
declare const FillSpinner: FC<OneColorSpinnerProps>;
declare const FireworkSpinner: FC<OneColorSpinnerProps>;
declare const FlagSpinner: FC<OneColorSpinnerProps>;
declare const GridSpinner: FC<OneColorSpinnerProps>;
declare const GuardSpinner: FC<TwoColorSpinnerProps>;
declare const HeartSpinner: FC<OneColorSpinnerProps>;
declare const ImpulseSpinner: FC<TwoColorSpinnerProps>;
declare const PulseSpinner: FC<OneColorSpinnerProps>;
declare const PushSpinner: FC<OneColorSpinnerProps>;
declare const SequenceSpinner: FC<TwoColorSpinnerProps>;
declare const SphereSpinner: FC<OneColorSpinnerProps>;
declare const SpiralSpinner: FC<TwoColorSpinnerProps>;
declare const StageSpinner: FC<OneColorSpinnerProps>;
declare const SwapSpinner: FC<OneColorSpinnerProps>;
declare const WaveSpinner: FC<OneColorSpinnerProps>;
declare const ClapSpinner: FC<TwoColorSpinnerProps>;
declare const RotateSpinner: FC<OneColorSpinnerProps>;
declare const SwishSpinner: FC<OneColorSpinnerProps>;
declare const GooSpinner: FC<OneColorSpinnerProps>;
declare const CombSpinner: FC<OneColorSpinnerProps>;
declare const PongSpinner: FC<OneColorSpinnerProps>;
declare const RainbowSpinner: FC<OneColorSpinnerProps>;
declare const RingSpinner: FC<OneColorSpinnerProps>;
declare const HoopSpinner: FC<OneColorSpinnerProps>;
declare const FlapperSpinner: FC<OneColorSpinnerProps>;
declare const MagicSpinner: FC<OneColorSpinnerProps>;
declare const JellyfishSpinner: FC<OneColorSpinnerProps>;
declare const TraceSpinner: FC<TwoColorSpinnerProps>;
declare const ClassicSpinner: FC<OneColorSpinnerProps>;
declare const WhisperSpinner: FC<TwoColorSpinnerProps>;
declare const MetroSpinner: FC<OneColorSpinnerProps>;

export {
    BallSpinner,
    GridSpinner,
    SwapSpinner,
    BarsSpinner,
    WaveSpinner,
    PushSpinner,
    FireworkSpinner,
    StageSpinner,
    HeartSpinner,
    GuardSpinner,
    CircleSpinner,
    SpiralSpinner,
    PulseSpinner,
    SequenceSpinner,
    DominoSpinner,
    ImpulseSpinner,
    CubeSpinner,
    FillSpinner,
    SphereSpinner,
    FlagSpinner,
    ClapSpinner,
    RotateSpinner,
    SwishSpinner,
    GooSpinner,
    CombSpinner,
    PongSpinner,
    RainbowSpinner,
    RingSpinner,
    HoopSpinner,
    FlapperSpinner,
    MagicSpinner,
    JellyfishSpinner,
    TraceSpinner,
    ClassicSpinner,
    WhisperSpinner,
    MetroSpinner,
};
