import {Box} from "@mui/material";
import {Component, ReactNode} from "react";

const AuroraBackground = ({children}: {children: ReactNode}) => {

    return ( // @ts-ignore
        <Box sx={{
            position: 'relative',
            width: '100%',
            height: '100vh',
            overflow: 'hidden',
            background: '#000',
        }}>
            <Box sx={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                opacity: 0.5,
                background: "linear-gradient(#05051f, #05051f, #97f7f3, #05051f, #05051f, #05051f, #76f6bd, #aaebc9, #05051f, #05051f, #69c1ff, #cb304f, #05051f, #05051f, #05051f, #05051f, #4a5b8f, #419f91, #05051f, #05051f, #3a4aa1, #db3b69, #05051f)",
                backgroundSize: "1800% 1800%",
                animation: 'aurora-animation 180s ease infinite',
                '@keyframes aurora-animation': {
                    "0%":{backgroundPosition:"18% 0%"},
                "50%":{backgroundPosition:"83% 100%"},
                "100%":{backgroundPosition:"18% 0%"},
                },
            }}>{children}</Box>
        </Box>
    );
};

export default AuroraBackground;
