import Link from 'next/link'
import Form from './pages/form/page'
import DropdownForm from './pages/dropdoown/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='bg-red-400 p-1 rounded w-full text-center text-2xl font-bold'>Form and Routing</h1>
      <Link href="/">Home</Link>
      <Form/>
      <DropdownForm/>
    </main>
  )
}
