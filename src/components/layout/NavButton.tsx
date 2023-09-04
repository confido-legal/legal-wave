import { As, Button, ButtonProps, HStack, Icon, Text } from '@chakra-ui/react';

interface NavButtonProps extends ButtonProps {
  icon?: As;
  label: string;
}

export const NavButton = (props: NavButtonProps) => {
  const { icon, label, ...buttonProps } = props;
  return (
    <Button variant='ghost' justifyContent='start' {...buttonProps} w='full'>
      <HStack spacing='3'>
        {icon && <Icon as={icon} boxSize='6' color='subtle' />}
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
};