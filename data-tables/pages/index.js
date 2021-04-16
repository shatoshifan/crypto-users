import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React from 'react'

import UserTable from '../components/UserTable'

import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Data Table Assignment</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1 className={styles.title}>Data Table Assignment</h1>
      <QueryClientProvider client={queryClient}>
        <UserTable></UserTable>
      </QueryClientProvider>
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Made by Mark Olech with MongoDB, Express, React, NodeJS.
        </a>
      </footer>
    </div>
  )
}
