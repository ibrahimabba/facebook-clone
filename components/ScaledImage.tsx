import React, { useState, useEffect } from "react";
import { Image } from "react-native";


type Props = {
    source: string,
    width?: number,
    height?: number,
    style?: any
}
type Dimension = {
    width: number,
    height: number
}

function ScaledImage(props: Props) {

    const [source, setSource] = useState({ uri: props.source });
    const [dimension, setDimention] = useState<Dimension>();

    useEffect(() => {
        return () => {
            Image.getSize(props.source, (width, height) => {
                if (props.width && !props.height) {
                    setDimention({
                        width: props.width,
                        height: height * (props.width / width)
                    });
                } else if (props.width && props.height) {
                    setDimention({
                        width: width * (props.height / height),
                        height: props.height
                    });
                } else {
                    setDimention({ width: width, height: height });
                }
            });
        }
    }, []);
    return (
        <Image
            source={source}
            style={{ height: dimension?.height, width: dimension?.width, ...props.style }}
        />
    );
}
export default ScaledImage
