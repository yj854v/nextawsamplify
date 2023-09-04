import Image from 'next/image';
import NavBar from './components/Navbar';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
    </main>
  )
}
