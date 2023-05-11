import { ColorModeContext, HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import { useContext } from 'react';




const ColorModeSwitch = () => {
    const { toggleColorMode } = useColorMode();
    const { colorMode } = useContext(ColorModeContext);


  return (
    <HStack whiteSpace='nowrap'>
        <Switch colorScheme={'green'} isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
        <Text >Dark Mode</Text>
        
    </HStack>
  )
}

export default ColorModeSwitch