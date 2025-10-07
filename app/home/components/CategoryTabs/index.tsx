'use client'
import { useState } from 'react'
import styles from './styles.module.css'

const categories = [
  'Steak Cuts',
  'Appetizers',
  'Salads',
  'Pasta',
  'Cocktails'
]

export default function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState('Steak Cuts')

  return (
    <div className={styles.container}>
      <div className={styles.tabsScroll}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.tab} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}