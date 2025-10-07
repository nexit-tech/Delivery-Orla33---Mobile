import { User, ShoppingCart } from 'lucide-react'
import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoCircle}>
          <span>33</span>
        </div>
      </div>
      
      <div className={styles.actions}>
        <button className={styles.iconButton} aria-label="Perfil">
          <User size={24} strokeWidth={2} />
        </button>
        <button className={styles.iconButton} aria-label="Carrinho">
          <ShoppingCart size={24} strokeWidth={2} />
          <span className={styles.cartBadge}>2</span>
        </button>
      </div>
    </header>
  )
}