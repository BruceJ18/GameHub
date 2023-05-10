import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs' 
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
  selectedPlatform: Platform | null;
}

const Plt_nameToIcon = ({ platforms = [], selectedPlatform }: Props) => {
    const iconMap: { [key: string] : IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        apple: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color={selectedPlatform?.id === platform.id ? 'white' : 'gray.500'}/>
      ))}
    </HStack>
  );
};

export default Plt_nameToIcon;
