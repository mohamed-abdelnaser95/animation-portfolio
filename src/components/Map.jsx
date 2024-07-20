import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
} from "react-simple-maps";

const MapChart = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-20.0, -52.0, 0],
                center: [10, -30],
                scale: 1100,
            }}
            style={{
                width: "100%",
                height: "100%"
            }}
        >
            <Geographies
                geography="/features.json"
                fill="#2C065D"
                stroke="crimson"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[30.3522, 28.8566]}
                dx={-50}
                dy={-60}
                connectorProps={{
                    stroke: "crimson",
                    strokeWidth: 3,
                    strokeLinecap: "round",
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                    {"Egypt"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default MapChart;