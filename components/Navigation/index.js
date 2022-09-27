import Link from 'next/link'
import Image from 'next/image'
import styles from './navigation.module.css'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Image src="/images/logo.svg" alt='spaceX logo' width={300} height={260}/>
      <ul className={styles.list}>
        <li>
          <Link href="#">falcon 9</Link>
        </li>
        <li>
          <Link href="#">falcon heavy</Link>
        </li>
        <li>
          <Link href="#">dragon</Link>
        </li>
        <li>
          <Link href="#">starship</Link>
        </li>
        <li>
          <Link href="#">human spacelight</Link>
        </li>
        <li>
          <Link href="#">rideshare</Link>
        </li>
        <li>
          <Link href="#">starlink</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;