import { ColorMode } from "@chakra-ui/react"
import React from "react";


interface ColorModeContextType {
    colorMode: ColorMode;
}

const ColorModeContext = React.createContext<ColorModeContextType>({} as ColorModeContextType)

export default ColorModeContext;