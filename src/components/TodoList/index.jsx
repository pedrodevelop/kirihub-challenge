import React, { useState } from 'react';
import { ListItemText } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

import Box from './TodoContainer';

import {
  OutlinedInput,
  Typography,
  Button,
  Form,
  List,
  ListItem,
  IconButton
} from './styles';

export default function TodoList() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = e => {
    e.preventDefault();

    if (!input || /^\s*$/.test(input)) {
      return;
    }

    const newTodo = [...todos, { id: Math.random(), title: input }];

    setTodos(newTodo);

    setInput('');
  };

  const handleRemoveTodo = id => {
    const newTodoArray = [...todos].filter(todo => todo.id !== id);

    setTodos(newTodoArray);
  };

  return (
    <Box>
      <Typography component="h1">O que vamos fazer hoje?</Typography>
      <Form onSubmit={handleAddTodo}>
        <OutlinedInput
          variant="outlined"
          value={input}
          onChange={e => {
            setInput(e.target.value);
          }}
        />
        <Button type="submit">Adicionar item</Button>
      </Form>
      <List>
        {todos.map(todo => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleRemoveTodo(todo.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText primary={todo.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
