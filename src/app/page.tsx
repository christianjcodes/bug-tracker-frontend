import Image from 'next/image';
import styles from './page.module.css';
import Layout from './layout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className='loginArea'>
        <Form.Label htmlFor="inputEmail">Email</Form.Label>
        <Form.Control
          type="email"
          placeholder='Enter email'
          id="inputEmail"
        />
        <Form.Label htmlFor="inputPassword">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder='Password'
          id="inputPassword"
        />
      </div>
      <Button variant="primary">Sign In</Button>{' '}
      <Link href="/new-user">New user? Create an account here!</Link>

    </Layout>
  );
}
