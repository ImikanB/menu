import React, { useState } from 'react'

import { names } from './data'

function App() {
  const [detail, setDetail] = useState(names)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
    if (category === 'all') {
      setDetail(names)
    } else {
      const filteredItems = names.filter((item) => item.category === category)
      setDetail(filteredItems)
    }
  }

  return (
    <main>
      <section className='container'>
        <div className='main-header'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>

        <div className='btn-container'>
          <button
            type='button'
            className={`btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('all')}
          >
            all
          </button>
          <button
            type='button'
            className={`btn ${
              selectedCategory === 'breakfast' ? 'active' : ''
            }`}
            onClick={() => handleCategoryClick('breakfast')}
          >
            breakfast
          </button>
          <button
            type='button'
            className={`btn ${selectedCategory === 'lunch' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('lunch')}
          >
            lunch
          </button>
          <button
            type='button'
            className={`btn ${selectedCategory === 'shakes' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('shakes')}
          >
            shakes
          </button>
        </div>

        <div className='section-container'>
          {detail.map((data) => {
            const { name, price, about, img, index } = data
            return (
              <article key={index} className='menu-items'>
                <img className='img' alt='' src={img} />
                <div className='item-info'>
                  <header>
                    <h5>{name}</h5>
                    <span className='item-price'>{price}</span>
                  </header>
                  <p className='about-item'>{about}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App
