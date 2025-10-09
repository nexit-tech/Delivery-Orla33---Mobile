'use client'
import { useState, useEffect, useContext } from 'react'
import { Menu, User, ShoppingCart, Package, X, Sun, Moon } from 'lucide-react'
import styles from './styles.module.css'
import { ThemeContext } from '@/context/ThemeContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const themeContext = useContext(ThemeContext)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true)
      else setIsScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  if (!themeContext) return null

  const { theme, toggleTheme } = themeContext

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${
          isMenuOpen ? styles.headerOpen : ''
        }`}
      >
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <div className={styles.menuIconWrapper}>
            <Menu size={24} strokeWidth={2.5} className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconHidden : ''}`} />
            <X size={24} strokeWidth={2.5} className={`${styles.closeIcon} ${isMenuOpen ? styles.closeIconVisible : ''}`} />
          </div>
        </button>

        {/* --- CONTÊINER DOS ÍCONES DA DIREITA --- */}
        <div className={styles.actionsContainer}>
          {/* Botão de Carrinho (visível quando o menu está FECHADO) */}
          <button
            className={`${styles.iconButton} ${isMenuOpen ? styles.iconHidden : styles.iconVisible}`}
            aria-label="Carrinho"
          >
            <ShoppingCart size={22} strokeWidth={2.5} />
            <span className={styles.cartBadge}>2</span>
          </button>

          {/* Botão de Tema (visível quando o menu está ABERTO) */}
          <button
            className={`${styles.iconButton} ${isMenuOpen ? styles.iconVisible : styles.iconHidden}`}
            onClick={toggleTheme}
            aria-label="Mudar tema"
          >
            {theme === 'light' ? (
              <Moon size={22} strokeWidth={2.5} />
            ) : (
              <Sun size={22} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </header>

      {/* O resto do componente continua igual */}
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu} />}
      <div
        className={`${styles.menuDropdown} ${isMenuOpen ? styles.menuOpen : ''}`}
      >
        <div className={styles.menuHeader}>
          <img
            src="/images/orla33semfundo.png"
            alt="Orla 33"
            className={styles.menuLogo}
          />
        </div>
        <div className={styles.menuItems}>
          <button className={styles.menuItem} onClick={closeMenu}>
            <div className={styles.menuItemIcon}><ShoppingCart size={24} strokeWidth={2.5} /></div>
            <span className={styles.menuItemText}>Carrinho</span>
            <span className={styles.menuBadge}>2</span>
          </button>
          <button className={styles.menuItem} onClick={closeMenu}>
            <div className={styles.menuItemIcon}><Package size={24} strokeWidth={2.5} /></div>
            <span className={styles.menuItemText}>Acompanhar Pedido</span>
          </button>
          <button className={styles.menuItem} onClick={closeMenu}>
            <div className={styles.menuItemIcon}><User size={24} strokeWidth={2.5} /></div>
            <span className={styles.menuItemText}>Perfil</span>
          </button>
        </div>
      </div>
    </>
  )
}