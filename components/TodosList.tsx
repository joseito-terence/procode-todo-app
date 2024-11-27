import { Feather } from '@expo/vector-icons';
import { View, Text, FlatList } from 'react-native';

import TodoItem from './TodoItem';

import type { TodoType } from '~/app';

interface TodosListProps {
  todos: TodoType[];
  onToggleTodo: (id: string) => void;
  onRemoveTodo: (id: string) => void;
}

export default function TodosList({ todos, onToggleTodo, onRemoveTodo }: TodosListProps) {
  if (todos.length === 0) {
    return (
      <View className="flex-1 items-center justify-center">
        <Feather name="check-circle" size={64} color="#cbd5e1" />
        <Text className="mt-4 text-lg text-slate-400">No todos yet! Add one below.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={todos}
      keyExtractor={(item, index) => `${item}-${index}`}
      renderItem={({ item }) => (
        <TodoItem todo={item} onToggleTodo={onToggleTodo} onRemoveTodo={onRemoveTodo} />
      )}
      contentContainerClassName="pb-4"
      keyboardDismissMode="on-drag"
    />
  );
}
