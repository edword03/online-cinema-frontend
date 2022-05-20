import styles from '../styles/Home.module.css';
import { Home } from '@/components/screens/home';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '@/components/layout';

const HomePage: NextPage = () => {
	return (
    <Layout>   
      <Home />
    </Layout>
  )
};

export default HomePage;