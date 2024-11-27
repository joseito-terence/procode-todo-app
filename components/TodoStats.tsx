import { Feather } from '@expo/vector-icons';
import { useMemo } from 'react';
import { View, Text } from 'react-native';

import type { TodoType } from '~/app';

interface TodoStatsProps {
  todos: TodoType[];
}

export default function TodoStats({ todos }: TodoStatsProps) {
  const { total, completed, pending } = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.done).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [todos]);

  return (
    <View className="flex-row justify-around">
      <View className="flex-row items-center rounded-full bg-slate-100 px-4 py-2 shadow-sm">
        <View className="flex-row items-center">
          <Feather name="list" size={14} color="#64748b" />
          <Text className="ml-1.5 font-medium">{total}</Text>
        </View>
        <Text className="ml-1.5 text-xs text-slate-500">Total</Text>
      </View>

      <View className="flex-row items-center rounded-full bg-blue-50 px-4 py-2 shadow-sm">
        <View className="flex-row items-center">
          <Feather name="clock" size={14} color="#3b82f6" />
          <Text className="ml-1.5 font-medium text-blue-500">{pending}</Text>
        </View>
        <Text className="ml-1.5 text-xs text-slate-500">In Progress</Text>
      </View>

      <View className="flex-row items-center rounded-full bg-green-50 px-4 py-2 shadow-sm">
        <View className="flex-row items-center">
          <Feather name="check-circle" size={14} color="#22c55e" />
          <Text className="ml-1.5 font-medium text-green-500">{completed}</Text>
        </View>
        <Text className="ml-1.5 text-xs text-slate-500">Completed</Text>
      </View>
    </View>
  );
}
