import { Feather } from '@expo/vector-icons';
import { useCallback } from 'react';
import { View, Text, Pressable, Alert, Platform } from 'react-native';

import { Button } from './Button';

import { TodoType } from '~/app';

interface TodoItemProps {
  todo: TodoType;
  onToggleTodo: (id: string) => void;
  onRemoveTodo: (id: string) => void;
}

export default function TodoItem({ todo, onToggleTodo, onRemoveTodo }: TodoItemProps) {
  const removeTodo = useCallback(() => {
    if (Platform.OS === 'web') {
      onRemoveTodo(todo.id);
      return;
    }

    Alert.alert('Remove Todo', 'Are you sure you want to remove this todo?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        style: 'destructive',
        onPress: () => onRemoveTodo(todo.id),
      },
    ]);
  }, [todo.id]);

  return (
    <View className="flex-row items-center gap-2 px-2 py-2">
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

      <Button className="aspect-square bg-slate-300 p-[8px]" onPress={removeTodo}>
        <Feather name="x" size={24} color="#64748b" />
      </Button>
    </View>
  );
}
