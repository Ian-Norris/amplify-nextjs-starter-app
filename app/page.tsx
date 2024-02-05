import Navbar from './components/navbar'
import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
       <Navbar />
      <div className={styles.center}>
        <div className={styles.logoContainer}>
          <Image
            src="/ian_norris_logo_color-removebg-preview.png"
            alt="AWS Logo"
            width={500}
            height={500}
            priority
            />
        </div>
      </div>
    </main>
  )
}
