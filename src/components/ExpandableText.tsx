import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface props {
  children: string;
}

const ExpandableText = ({ children }: props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;
  

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + '...';

  return (
    <Text>
      {summary}
      <Button
        size={"xs"}
        fontWeight={"bold"}
        onClick={() => setExpanded(!expanded)}
        marginLeft={2}
        colorScheme={"yellow"}
      >
        {expanded ? "Collapse" : "Expand"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
