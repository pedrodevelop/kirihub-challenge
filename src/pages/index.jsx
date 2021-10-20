import React from 'react';
import Head from 'next/head';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo list</title>
      </Head>

      <main>
        <TodoList />
      </main>
    </div>
  );
}
