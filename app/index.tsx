import Entypo from '@expo/vector-icons/Entypo';
import { Stack } from 'expo-router';
import { useState, useCallback } from 'react';
import { View, KeyboardAvoidingView, Platform, Keyboard, Alert } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import Input from '~/components/Input';
import TodoStats from '~/components/TodoStats';
import TodosList from '~/components/TodosList';

export interface TodoType {
  id: string;
  text: string;
  done: boolean;
}

export default function Home() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleAddTodo = useCallback(() => {
    if (newTodo.trim()) {
      const todo: TodoType = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        done: false,
      };
      setTodos((prevTodos) => [...prevTodos, todo]);
      setNewTodo('');
      Keyboard.dismiss();
    }
  }, [newTodo]);

  const handleToggleTodo = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  }, []);

  const handleChangeText = useCallback((text: string) => {
    setNewTodo(text);
  }, []);

  const handleRemoveTodo = useCallback((id: string) => {
    Alert.alert('Remove Todo', 'Are you sure you want to remove this todo?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)),
      },
    ]);
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Todos',
          headerLargeTitle: true,
        }}
      />
      <Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="m-4 flex-1 flex-col">
          <View className="flex-1">
            <TodosList
              todos={todos}
              onToggleTodo={handleToggleTodo}
              onRemoveTodo={handleRemoveTodo}
            />
          </View>

          <TodoStats todos={todos} />
          <View className="flex-row gap-2 py-4">
            <Input
              placeholder="What needs to be done?"
              className="flex-1"
              value={newTodo}
              onChangeText={handleChangeText}
              onSubmitEditing={handleAddTodo}
            />
            <Button className="aspect-square" onPress={handleAddTodo}>
              <Entypo name="check" size={24} color="white" />
            </Button>
          </View>
        </KeyboardAvoidingView>
      </Container>
    </>
  );
}
