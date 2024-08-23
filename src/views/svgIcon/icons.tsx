import Svg, { Path } from "react-native-svg";

type ArrowLeftProps = {
    stroke?: string;
};

type ArrowRightProps = {
    stroke?: string;
};

export const ArrowLeft = ({ stroke = "black" }: ArrowLeftProps) => {
    return (
        <Svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={stroke}
            height={24}
            width={24}
        >
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
        </Svg>
    );
};

export const ArrowRight = ({ stroke = "black" }: ArrowRightProps) => {
    return (
        <Svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={stroke}
            height={24}
            width={24}
        >
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
        </Svg>
    );
};


export const AddToCart = ({ stroke = "black" }: ArrowRightProps) => {
    return (
        <Svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={stroke}
            height={24}
            width={24}
        >
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
        </Svg>
    );
}