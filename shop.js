const MARVEL_PRODUCTS = [
  { name: 'Spider-Man Mego Figure Set', store: 'Disney Store', category: 'Figures', hero: 'spiderman.png', href: 'https://www.disneystore.com/spider-man-mego-8-action-figure-set-2-worlds-greatest-super-heroes-850003511702.html', image: 'https://cdn-ssl.s7.shopdisney.com/is/image/DisneyShopping/1814107820402?fmt=webp&qlt=70&wid=773&hei=773' },
  { name: 'Hulk Marvel Toybox Figure', store: 'Disney Store', category: 'Figures', hero: 'hulk.png', href: 'https://www.disneystore.com/hulk-action-figure-marvel-toybox-6-417131541140.html', image: 'https://cdn-ssl.s7.shopdisney.com/is/image/DisneyShopping/1713047621091?fmt=webp&qlt=70&wid=773&hei=773' },
  { name: 'Iron Man Marvel Toybox Figure', store: 'Disney Store', category: 'Figures', hero: 'iron man.png', href: 'https://www.disneystore.com/the-invincible-iron-man-action-figure-marvel-toybox-5-14-417131506903.html', image: 'https://cdn-ssl.s7.shopdisney.com/is/image/DisneyShopping/1713047621087?fmt=webp&qlt=70&wid=773&hei=773' },
  { name: 'Iron Spider Spider-Bot', store: 'Disney Store', category: 'Collectibles', hero: 'spiderman.png', href: 'https://www.disneystore.com/iron-spider-spider-bot-interactive-remote-control-bot-limited-edition-418140474412.html', image: 'https://cdn-ssl.s7.shopdisney.com/is/image/DisneyShopping/1814047620295?fmt=webp&qlt=70&wid=773&hei=773' },
  { name: 'LEGO Fantastic Four H.E.R.B.I.E.', store: 'Disney Store', category: 'Collectibles', hero: 'doctor stranger.png', href: 'https://www.disneystore.com/lego-the-fantastic-four-h.e.r.b.i.e.-76339-673419422604.html', image: 'main.png' },
  { name: 'Doctor Doom Pandora Charm', store: 'Disney Store', category: 'Accessories', hero: 'thonas.png', href: 'https://www.disneystore.com/doctor-doom-charm-by-pandora-marvel-443052171685.html', image: 'main.png' },
  { name: 'Loki Pandora Charm', store: 'Disney Store', category: 'Accessories', hero: 'thor.png', href: 'https://www.disneystore.com/loki-charm-by-pandora-marvel-443052169880.html', image: 'main.png' },
  { name: 'Spider-Man Brand New Day Plush Keychain', store: 'Disney Store', category: 'Accessories', hero: 'spiderman.png', href: 'https://www.disneystore.com/spider-man-brand-new-day-plush-keychain-mystery-figure-by-cosbi-436001760757.html', image: 'main.png' },
  { name: 'Spider-Man Talking Action Figure', store: 'Disney Store', category: 'Figures', hero: 'spiderman.png', href: 'https://www.disneystore.com/franchises/marvel/', image: 'main.png' },
  { name: 'Avengers Battle Arena Play Set', store: 'Disney Store', category: 'Figures', hero: 'captain America.png', href: 'https://www.disneystore.com/franchises/marvel/', image: 'main.png' },
  { name: 'Iron Man Electronic Helmet', store: 'Disney Store', category: 'Collectibles', hero: 'iron man.png', href: 'https://www.disneystore.com/franchises/marvel/', image: 'main.png' },
  { name: 'Marvel Vault Arc Reactor', store: 'Disney Store', category: 'Collectibles', hero: 'iron man.png', href: 'https://www.disneystore.com/franchises/marvel/', image: 'main.png' },

  { name: 'Marvel Legends Spider-Man Figure', store: 'Amazon India', category: 'Figures', hero: 'spiderman.png', query: 'Marvel Legends Spider-Man action figure' },
  { name: 'Marvel Legends Iron Man Figure', store: 'Amazon India', category: 'Figures', hero: 'iron man.png', query: 'Marvel Legends Iron Man action figure' },
  { name: 'Marvel Legends Captain America Figure', store: 'Amazon India', category: 'Figures', hero: 'captain America.png', query: 'Marvel Legends Captain America figure' },
  { name: 'Marvel Legends Hulk Figure', store: 'Amazon India', category: 'Figures', hero: 'hulk.png', query: 'Marvel Legends Hulk action figure' },
  { name: 'Marvel Legends Thor Figure', store: 'Amazon India', category: 'Figures', hero: 'thor.png', query: 'Marvel Legends Thor action figure' },
  { name: 'Marvel Avengers Collectible Figures', store: 'Amazon India', category: 'Collectibles', hero: 'main.png', query: 'Marvel Avengers collectible figures' },
  { name: 'Marvel Graphic Novels', store: 'Amazon India', category: 'Books', hero: 'doctor stranger.png', query: 'Marvel graphic novels collection' },
  { name: 'Marvel Character T-Shirts', store: 'Amazon India', category: 'Apparel', hero: 'spiderman.png', query: 'Marvel official character t shirt' },
  { name: 'Marvel Backpacks & Accessories', store: 'Amazon India', category: 'Accessories', hero: 'captain America.png', query: 'Marvel backpack accessories' },
  { name: 'Marvel LEGO Sets', store: 'Amazon India', category: 'Collectibles', hero: 'hulk.png', query: 'Marvel LEGO sets' },

  { name: 'Marvel Iron Man Mark 50 Figure', store: 'Flipkart', category: 'Figures', hero: 'iron man.png', query: 'MARVEL Iron Man Mark 50 Action Figure' },
  { name: 'Marvel Spider-Man Brand New Day Figure', store: 'Flipkart', category: 'Figures', hero: 'spiderman.png', query: 'MARVEL Spider-Man Brand New Day 7-inch Action Figure' },
  { name: 'Marvel Spider-Man Black & Gold Figure', store: 'Flipkart', category: 'Figures', hero: 'spiderman.png', query: 'MARVEL Spider-Man Black Gold Suit Action Figure' },
  { name: 'Marvel Avengers Captain America Figure', store: 'Flipkart', category: 'Figures', hero: 'captain America.png', query: 'MARVEL Avengers Captain America Figure' },
  { name: 'Marvel Avengers Hulk Figure', store: 'Flipkart', category: 'Figures', hero: 'hulk.png', query: 'MARVEL Avengers Hulk Action Figure' },
  { name: 'Marvel Iron Man Mark III Figure', store: 'Flipkart', category: 'Figures', hero: 'iron man.png', query: 'MARVEL Iron Man Mark III Action Figure' },
  { name: 'Marvel Thor Figure & Keychain', store: 'Flipkart', category: 'Accessories', hero: 'thor.png', query: 'MARVEL Thor 2 in 1 Action Figurine Keychain' },
  { name: 'Marvel Spider-Man vs Venom Playset', store: 'Flipkart', category: 'Collectibles', hero: 'spiderman.png', query: 'MARVEL Stunt Squad Spider-Man vs Venom Playset' },
  { name: 'Marvel Iron Man Repulsor Roleplay Toy', store: 'Flipkart', category: 'Collectibles', hero: 'iron man.png', query: 'MARVEL Iron Man Repulsor Blast Disc Blaster' },
  { name: 'Marvel Wolverine Figure', store: 'Flipkart', category: 'Figures', hero: 'thor.png', query: 'MARVEL Wolverine action figure' }
];

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('productSearch');
const categoryFilter = document.getElementById('categoryFilter');
const catalogCount = document.getElementById('catalogCount');
let selectedStore = 'all';

function retailerUrl(product) {
  if (product.href) return product.href;
  const query = encodeURIComponent(product.query);
  return product.store === 'Amazon India'
    ? `https://www.amazon.in/s?k=${query}`
    : `https://www.flipkart.com/search?q=${query}`;
}

function renderProducts() {
  const term = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const visible = MARVEL_PRODUCTS.filter(product => {
    const matchesStore = selectedStore === 'all' || product.store === selectedStore;
    const matchesCategory = category === 'all' || product.category === category;
    const matchesTerm = `${product.name} ${product.category} ${product.store}`.toLowerCase().includes(term);
    return matchesStore && matchesCategory && matchesTerm;
  });
  productGrid.replaceChildren();
  catalogCount.textContent = `${visible.length} ${visible.length === 1 ? 'product' : 'products'}`;
  visible.forEach((product, index) => {
    const card = document.createElement('article');
    card.className = 'catalog-card';
    const imageWrap = document.createElement('div');
    imageWrap.className = `catalog-art ${product.store === 'Disney Store' && product.image !== 'main.png' ? 'catalog-product-photo' : ''}`;
    const image = document.createElement('img');
    image.src = product.image && product.image !== 'main.png' ? product.image : product.hero;
    image.alt = product.image && product.image !== 'main.png' ? product.name : `${product.name} character artwork`;
    image.loading = index < 8 ? 'eager' : 'lazy';
    imageWrap.appendChild(image);
    const store = document.createElement('span');
    store.className = `catalog-store ${product.store.toLowerCase().replaceAll(' ', '-')}`;
    store.textContent = product.store;
    imageWrap.appendChild(store);
    const info = document.createElement('div');
    info.className = 'catalog-info';
    const categoryLabel = document.createElement('span');
    categoryLabel.className = 'catalog-category';
    categoryLabel.textContent = product.category;
    const title = document.createElement('h3');
    title.textContent = product.name;
    const action = document.createElement('a');
    action.className = 'catalog-action';
    action.href = retailerUrl(product);
    action.target = '_blank';
    action.rel = 'noopener noreferrer';
    action.textContent = `VIEW AT ${product.store.toUpperCase()}  ↗`;
    info.append(categoryLabel, title, action);
    card.append(imageWrap, info);
    productGrid.appendChild(card);
  });
  if (!visible.length) {
    const empty = document.createElement('p');
    empty.className = 'catalog-empty';
    empty.textContent = 'No products match those filters. Try another search.';
    productGrid.appendChild(empty);
  }
}

searchInput.addEventListener('input', renderProducts);
categoryFilter.addEventListener('change', renderProducts);
document.querySelectorAll('[data-store-filter]').forEach(button => button.addEventListener('click', () => {
  selectedStore = button.dataset.storeFilter;
  document.querySelectorAll('[data-store-filter]').forEach(pill => pill.classList.toggle('is-active', pill === button));
  renderProducts();
}));
renderProducts();
