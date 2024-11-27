import { TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <TextInput
      className={`rounded-full border border-gray-300 bg-white px-6 py-4 text-lg ${className}`}
      {...props}
    />
  );
}
