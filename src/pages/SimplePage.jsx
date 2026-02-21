import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import styles from './SimplePage.module.css'

export default function SimplePage({ title, subtitle, children }) {
  return (
    <>
      <Navbar />
      <main className="pageShell">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
