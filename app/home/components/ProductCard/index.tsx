import { ShoppingCart } from 'lucide-react'
import { Product } from '@/types'
import styles from './styles.module.css'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className={styles.info}>
        <div className={styles.details}>
          <h3 className={styles.name}>{product.name}</h3>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
        </div>
        
        <button className={styles.addButton} aria-label="Adicionar ao carrinho">
          <ShoppingCart size={20} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  )
}