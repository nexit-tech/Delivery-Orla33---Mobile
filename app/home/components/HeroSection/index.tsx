import styles from './styles.module.css'

export default function HeroSection() {
  return (
    <section className={styles.heroWrapper}>
      {/* Faixa de imagem de fundo */}
      <div className={styles.backgroundStrip}>
        <img src="/images/hero-strip.jpg" alt="Food Background" />
      </div>
      
      {/* Card flutuante */}
      <div className={styles.card}>
        {/* Logo do restaurante */}
        <div className={styles.logoContainer}>
          <img 
            src="/images/orla33semfundo.png" 
            alt="Orla 33 Logo" 
            className={styles.logo}
          />
        </div>
        
        <p className={styles.details}>
          Open • 15-20 min delivery • Min order R$ 80,00
        </p>
      </div>
    </section>
  )
}