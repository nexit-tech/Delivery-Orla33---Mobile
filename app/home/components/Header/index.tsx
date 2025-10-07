'use client'
import { useState } from 'react'
import { Menu, User, ShoppingCart, Package, X } from 'lucide-react'
import styles from './styles.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Header fixo */}
      <header className={`${styles.header} ${isMenuOpen ? styles.headerOpen : ''}`}>
        <button 
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <div className={styles.menuIconWrapper}>
            <Menu 
              size={28} 
              strokeWidth={2} 
              className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconHidden : ''}`}
            />
            <X 
              size={28} 
              strokeWidth={2} 
              className={`${styles.closeIcon} ${isMenuOpen ? styles.closeIconVisible : ''}`}
            />
          </div>
        </button>
        
        <div className={`${styles.actions} ${isMenuOpen ? styles.actionsHidden : ''}`}>
          <button className={styles.iconButton} aria-label="Perfil">
            <User size={24} strokeWidth={2} />
          </button>
          <button className={styles.iconButton} aria-label="Carrinho">
            <ShoppingCart size={24} strokeWidth={2} />
            <span className={styles.cartBadge}>2</span>
          </button>
        </div>
      </header>

      {/* Overlay - fundo escurecido */}
      {isMenuOpen && (
        <div 
          className={styles.overlay}
          onClick={closeMenu}
        />
      )}

      {/* Menu dropdown - desce de cima */}
      <div className={`${styles.menuDropdown} ${isMenuOpen ? styles.menuOpen : ''}`}>
        {/* Logo animada no topo */}
        <div className={styles.menuHeader}>
          <img 
            src="/images/orla33semfundo.png" 
            alt="Orla 33" 
            className={styles.menuLogo}
          />
        </div>

        {/* Itens do menu */}
        <div className={styles.menuItems}>
          <button className={styles.menuItem} onClick={closeMenu}>
            <div className={styles.menuItemIcon}>
              <ShoppingCart size={24} strokeWidth={2.5} />
            </div>
            <span className={styles.menuItemText}>Carrinho</span>
            <span className={styles.menuBadge}>2</span>
          </button>

          <button className={styles.menuItem} onClick={closeMenu}>
            <div className={styles.menuItemIcon}>
              <Package size={24} strokeWidth={2.5} />
            </div>
            <span className={styles.menuItemText}>Acompanhar Pedido</span>
          </button>

          <button className={styles.menuItem} onClick={closeMenu}>
            <div className={styles.menuItemIcon}>
              <User size={24} strokeWidth={2.5} />
            </div>
            <span className={styles.menuItemText}>Perfil</span>
          </button>
        </div>
      </div>
    </>
  )
}