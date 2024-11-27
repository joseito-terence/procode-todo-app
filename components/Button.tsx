import { forwardRef } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {}

export const Button = forwardRef<View, ButtonProps>(({ children, ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      className={`items-center rounded-[28px] bg-indigo-500 p-4 ${touchableProps.className}`}>
      {children}
    </TouchableOpacity>
  );
});
