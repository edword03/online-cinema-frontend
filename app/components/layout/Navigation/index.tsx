import { Logo } from './Logo'
import { MenuContainer } from './MenuContainer'
import styles from './Navbar.module.scss'

export const Navigation = () => {
  return (
    <section className={styles.navigation}>
      <Logo />
      <MenuContainer />
    </section>
  )
}