// app/products/layout.js
import { auth } from '../services/authService';
import './index.css';
import Navbar from './NavBarComponent';

export default async function ProductsLayout({ children }) {
  const session = await auth();

  return (
    <div lang="en">
      <Navbar session={session} />
      <main>{children}</main>
    </div>
  );
}