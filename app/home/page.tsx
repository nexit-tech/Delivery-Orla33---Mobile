import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CategoryTabs from './components/CategoryTabs'
import ProductCard from './components/ProductCard'
import { Product } from '@/types'
import styles from './styles.module.css'

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Ribeyee Prime',
    description: '300g aged prime beef',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=400&fit=crop',
    category: 'Steak Cuts'
  },
  {
    id: '2',
    name: 'Curled',
    description: '300g aged prime beef',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=400&fit=crop',
    category: 'Steak Cuts'
  },
  {
    id: '3',
    name: 'Garlic Butter Lobster',
    description: '300g aged prime garlic butter',
    price: 15.00,
    image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&h=400&fit=crop',
    category: 'Steak Cuts'
  },
  {
    id: '4',
    name: 'Grilled Salmon',
    description: '350g fresh atlantic salmon',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop',
    category: 'Steak Cuts'
  },
  {
    id: '5',
    name: 'Tomahawk Steak',
    description: '800g premium tomahawk cut',
    price: 45.00,
    image: 'https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?w=400&h=400&fit=crop',
    category: 'Steak Cuts'
  }
]

export default function HomePage() {
  return (
    <main className={styles.container}>
      <Header />
      <HeroSection />
      <CategoryTabs />
      
      <div className={styles.productsGrid}>
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}