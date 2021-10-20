import React from 'react';
import Head from 'next/head';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <TodoList />
      </main>
    </div>
  );
}
