import { Feather } from '@expo/vector-icons';
import { View, Text, Pressable } from 'react-native';

import { TodoType } from '~/app';

interface TodoItemProps {
  todo: TodoType;
  onToggleTodo: (id: string) => void;
}

export default function TodoItem({ todo, onToggleTodo }: TodoItemProps) {
  return (
    <View className="px-2 py-2">
      <Pressable
        onPress={() => onToggleTodo(todo.id)}
        className={`
          flex-row items-start gap-2 self-start rounded-2xl px-4 py-2
          ${todo.done ? 'bg-green-600' : 'bg-indigo-500'}
        `}>
        <Feather
          name={todo.done ? 'check-circle' : 'circle'}
          size={20}
          color="white"
          className="mt-[2px]"
        />
        <Text
          className={`
            text-lg font-medium text-white
            ${todo.done ? 'line-through opacity-80' : ''}
          `}
          numberOfLines={2}
          ellipsizeMode="tail">
          {todo.text}
        </Text>
      </Pressable>
    </View>
  );
}
