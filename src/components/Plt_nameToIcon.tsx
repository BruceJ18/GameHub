import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { ColorModeContext, HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { Platform } from "../entities/Platform";
import { useContext } from "react";

interface Props {
  platforms: Platform[];
  selectedPlatformId?: number;
}

const Plt_nameToIcon = ({ platforms = [], selectedPlatformId }: Props) => {
  const { colorMode } = useContext(ColorModeContext);
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    apple: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color={
            selectedPlatformId === platform.id && colorMode === "dark"
              ? "white"
              : selectedPlatformId === platform.id && colorMode !== "dark"
              ? "black"
              : "gray.500"
          }
        />
      ))}
    </HStack>
  );
};

export default Plt_nameToIcon;
