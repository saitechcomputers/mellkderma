// --- MELLKDERMA STANDALONE DATA & APP ENGINE ---
// Works on both file:// (double-clicking index.html) & http:// servers

const PRODUCTS = [
  {
    id: "skinoshell-spray",
    name: "Mellkderma Skinoshell Spray Sunscreen SPF50",
    subname: "Broad Spectrum UVA/UVB & HEV Protection",
    price: 1599,
    originalPrice: 1999,
    rating: 4.9,
    reviewsCount: 142,
    category: "Sun Care",
    skinType: "All Skin Types / Sensitive",
    concern: "Sun Protection & HEV Blue Light",
    activeIngredients: ["SUNCAT DE 15%", "UVINUL A PLUS", "OCTOCRYLENE"],
    description: "Advanced spray-on broad-spectrum sunscreen that provides maximum protection against UVA/UVB rays and High Energy Visible (HEV) blue light. Formulated with Defend & Nourish technology.",
    usage: "Shake well before use. Spray liberally 15 minutes before sun exposure onto face and body. Reapply every 2 hours or after swimming/sweating.",
    volume: "100ml / 3.38 FL OZ",
    image: "public/images/products/skinoshell_spray.png",
    badge: "SPF 50 PA+++",
    featured: true
  },
  {
    id: "hskinoshell-max",
    name: "Mellkderma Hskinoshell Max Sunscreen SPF50",
    subname: "Ultra Matte Defend & Nourish Formula",
    price: 1220,
    originalPrice: 1500,
    rating: 4.8,
    reviewsCount: 98,
    category: "Sun Care",
    skinType: "Combination & Oily Skin",
    concern: "Sun Protection & Photo-Aging",
    activeIngredients: ["OMC", "UVINUL A PLUS", "Titanium Dioxide", "Vitamin E"],
    description: "Ultra-light matte sunscreen gel-cream delivering broad-spectrum SPF 50 PA+++. Infused with antioxidant Vitamin E to defend against urban pollution and sun spots.",
    usage: "Apply evenly to clean face and neck 15 minutes before stepping outdoors. Non-greasy finish makes it an ideal base for makeup.",
    volume: "50g",
    image: "public/images/products/hskinoshell_max.png",
    badge: "Ultra Matte SPF 50",
    featured: true
  },
  {
    id: "vitamin-c-serum",
    name: "Mellkderma Vitamin C Serum",
    subname: "Mw Azeglemq V-C Brightening & Depigmenting",
    price: 2499,
    originalPrice: 2999,
    rating: 4.95,
    reviewsCount: 215,
    category: "Serums",
    skinType: "All Skin Types",
    concern: "Dullness & Hyperpigmentation",
    activeIngredients: ["3-O-Ethyl Ascorbic Acid", "Aquaxyl", "Hyaluronic Acid"],
    description: "Potent brightening and depigmenting serum containing stable 3-O-Ethyl Ascorbic Acid paired with multi-depth hydration boosters to restore youthful luminosity.",
    usage: "Apply 3-4 drops morning and night on cleansed skin before moisturizers. Follow with sunscreen during daytime.",
    volume: "30ml / 1.01 FL OZ",
    image: "public/images/products/vitamin_c_serum.png",
    badge: "Bestseller Glow",
    featured: true
  },
  {
    id: "brightening-complex-day",
    name: "Mellkderma Brightening Complex SPF 15+ Day Cream",
    subname: "Mw Azeglemq Eday Brightening Complex",
    price: 3200,
    originalPrice: 3800,
    rating: 4.9,
    reviewsCount: 178,
    category: "Day Creams",
    skinType: "Normal to Dry Skin",
    concern: "Uneven Tone & Dark Spots",
    activeIngredients: ["Oler Blend-II (Japan)", "Hyaluronic Acid", "Vitamin-C"],
    description: "Clinical day complex formulated with Japanese bio-tech Oler Blend-II. Fades persistent pigmentation while offering daily SPF 15+ environmental defense.",
    usage: "Smooth over face and neck every morning as the final step of your skincare routine.",
    volume: "50g / 1.76 OZ",
    image: "public/images/products/brightening_complex_day.png",
    badge: "Japanese Bio-Tech",
    featured: true
  },
  {
    id: "moisturizer-acne",
    name: "Mellkderma Moisturizer for Acne Prone Skin",
    subname: "Osebderm Hydra Ultra Moisturizing",
    price: 1112,
    originalPrice: 1350,
    rating: 4.85,
    reviewsCount: 164,
    category: "Moisturizers",
    skinType: "Acne-Prone & Oily Skin",
    concern: "Acne Breakouts & Sebum Control",
    activeIngredients: ["Hyaluronic Acid", "Pentavitin", "SPF 15"],
    description: "Non-comedogenic oil-free moisturizer formulated specifically for acne-prone skin. Strengthens barrier function with 72-hour moisture lock Pentavitin.",
    usage: "Apply twice daily after cleansing. Gently massage until fully absorbed.",
    volume: "50g / 1.76 OZ",
    image: "public/images/products/moisturizer_acne.png",
    badge: "Non-Comedogenic",
    featured: false
  },
  {
    id: "liposomal-serum",
    name: "Mellkderma Liposomal Serum",
    subname: "Mw Azeglemq Depigmenting Serum",
    price: 2499,
    originalPrice: 3100,
    rating: 4.92,
    reviewsCount: 189,
    category: "Serums",
    skinType: "Hyperpigmented & Sensitive Skin",
    concern: "Melasma & Deep Pigmentation",
    activeIngredients: ["Encapsulated Liposomes", "Depigmenting Actives", "Hyaluronic Acid"],
    description: "Advanced micro-encapsulated liposomal delivery system targeting deep dermal pigment cells. Reduces stubborn dark spots without causing surface irritation.",
    usage: "Dispense 2-3 drops directly onto dark spots or entire face. Use twice daily.",
    volume: "30ml / 1.01 FL OZ",
    image: "public/images/products/liposomal_serum.png",
    badge: "Advanced Liposomal",
    featured: false
  },
  {
    id: "night-care",
    name: "Mellkderma Night Care",
    subname: "Mw Azeglemq Anti-Wrinkle, Lifting & Firming",
    price: 3200,
    originalPrice: 4000,
    rating: 4.98,
    reviewsCount: 230,
    category: "Anti-Aging",
    skinType: "Mature & Aging Skin",
    concern: "Fine Lines, Wrinkles & Sagging",
    activeIngredients: ["Encapsulated Retinol", "Matrixyl 3000", "Argireline Peptide C"],
    description: "Luxury nocturnal repair treatment featuring encapsulated retinol and clinical peptides to visibly lift, firm, and diminish fine lines while you sleep.",
    usage: "Apply at night to face and neck after cleansing. Use 2-3 times per week initially, building to nightly use.",
    volume: "50g / 1.76 OZ",
    image: "public/images/products/night_care.png",
    badge: "Retinol & Peptides",
    featured: true
  },
  {
    id: "moisturizer-dry",
    name: "Mellkderma Moisturizer for Dry Skin",
    subname: "Dryomin P Intensive Creme 48 HR Hydration",
    price: 590,
    originalPrice: 750,
    rating: 4.88,
    reviewsCount: 310,
    category: "Moisturizers",
    skinType: "Dry to Extra Dry Skin",
    concern: "Extreme Dryness & Barrier Repair",
    activeIngredients: ["Aquaxyl", "Shea Butter", "Olive Oil"],
    description: "Ultra-nourishing intensive cream providing guaranteed 48-hour continuous hydration. Fragrance-free formula ideal for sensitive and eczema-prone skin.",
    usage: "Apply generously over dry patches, face, and body as needed throughout the day.",
    volume: "200ml / 6.76 FL OZ",
    image: "public/images/products/moisturizer_dry.png",
    badge: "48 HR Hydration",
    featured: true
  }
];

const CLINICAL_INGREDIENTS = [
  {
    name: "SUNCAT DE 15%",
    role: "Encapsulated Sun Filters",
    description: "Delivers non-irritating, long-lasting broad-spectrum UVA & UVB shielding with zero white cast."
  },
  {
    name: "Matrixyl 3000",
    role: "Peptide Complex",
    description: "Stimulates collagen synthesis and extracellular matrix repair to visibly reverse deep facial wrinkles."
  },
  {
    name: "3-O-Ethyl Ascorbic Acid",
    role: "Next-Gen Vitamin C",
    description: "Highly stable derivative that penetrates deep into dermal layers to inhibit melanin and hyperpigmentation."
  },
  {
    name: "Aquaxyl & Pentavitin",
    role: "3D Hydration Matrix",
    description: "Locks moisture into deep skin layers for up to 72 hours while repairing the natural lipid barrier."
  },
  {
    name: "Encapsulated Retinol",
    role: "Cellular Renewal",
    description: "Time-released retinol that accelerates skin turnover with minimal redness or peeling."
  }
];

// Global State
let state = {
  products: PRODUCTS,
  filteredProducts: PRODUCTS,
  cart: JSON.parse(localStorage.getItem('mellkderma_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('mellkderma_wishlist') || '[]'),
  theme: localStorage.getItem('mellkderma_theme') || 'rose-gold',
  category: 'All',
  concern: 'All',
  sort: 'featured',
  searchQuery: '',
  appliedCoupon: null,
  quizAnswers: { skinType: '', concern: '' }
};

// DOM Selectors
let productGrid, categoryTabs, concernSelect, sortSelect, globalSearchInput, scienceGrid, themeSelector;
let cartDrawer, cartOverlay, openCartBtn, closeCartBtn, cartItemsBody, cartCount, cartItemCount;
let cartSubtotal, cartDiscount, discountRow, cartShipping, cartGrandTotal, shippingMsg, shippingProgress;
let couponInput, applyCouponBtn, couponTag, removeCouponBtn, checkoutBtn;
let wishlistCount, openWishlistBtn;
let quickViewOverlay, quickViewModal, quickViewBody, closeModalBtn;
let quizOverlay, quizModal, quizModalBody, openQuizModalBtn, startQuizBtn, closeQuizModalBtn;
let checkoutOverlay, checkoutModal, checkoutBody, closeCheckoutModalBtn;
let mobileToggleBtn, navMenu;

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initDOM();
  initTheme();
  renderProducts();
  renderScience();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
});

function initDOM() {
  productGrid = document.getElementById('product-grid');
  categoryTabs = document.getElementById('category-tabs');
  concernSelect = document.getElementById('concern-select');
  sortSelect = document.getElementById('sort-select');
  globalSearchInput = document.getElementById('global-search-input');
  scienceGrid = document.getElementById('science-grid');
  themeSelector = document.getElementById('theme-selector');

  cartDrawer = document.getElementById('cart-drawer');
  cartOverlay = document.getElementById('cart-overlay');
  openCartBtn = document.getElementById('open-cart-btn');
  closeCartBtn = document.getElementById('close-cart-btn');
  cartItemsBody = document.getElementById('cart-items-body');
  cartCount = document.getElementById('cart-count');
  cartItemCount = document.getElementById('cart-item-count');
  cartSubtotal = document.getElementById('cart-subtotal');
  cartDiscount = document.getElementById('cart-discount');
  discountRow = document.getElementById('discount-row');
  cartShipping = document.getElementById('cart-shipping');
  cartGrandTotal = document.getElementById('cart-grand-total');
  shippingMsg = document.getElementById('shipping-msg');
  shippingProgress = document.getElementById('shipping-progress');
  couponInput = document.getElementById('coupon-input');
  applyCouponBtn = document.getElementById('apply-coupon-btn');
  couponTag = document.getElementById('coupon-tag');
  removeCouponBtn = document.getElementById('remove-coupon-btn');
  checkoutBtn = document.getElementById('checkout-btn');

  wishlistCount = document.getElementById('wishlist-count');
  openWishlistBtn = document.getElementById('open-wishlist-btn');

  quickViewOverlay = document.getElementById('quick-view-overlay');
  quickViewModal = document.getElementById('quick-view-modal');
  quickViewBody = document.getElementById('quick-view-body');
  closeModalBtn = document.getElementById('close-modal-btn');

  quizOverlay = document.getElementById('quiz-overlay');
  quizModal = document.getElementById('quiz-modal');
  quizModalBody = document.getElementById('quiz-modal-body');
  openQuizModalBtn = document.getElementById('open-quiz-modal-btn');
  startQuizBtn = document.getElementById('start-quiz-btn');
  closeQuizModalBtn = document.getElementById('close-quiz-modal-btn');

  checkoutOverlay = document.getElementById('checkout-overlay');
  checkoutModal = document.getElementById('checkout-modal');
  checkoutBody = document.getElementById('checkout-body');
  closeCheckoutModalBtn = document.getElementById('close-checkout-modal-btn');

  mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  navMenu = document.getElementById('nav-menu');
}

// Theme Management
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  if (themeSelector) {
    themeSelector.value = state.theme;
  }
}

function setTheme(themeName) {
  state.theme = themeName;
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('mellkderma_theme', themeName);
  showToast(`Theme changed to ${getThemeLabel(themeName)}`);
}

function getThemeLabel(t) {
  switch (t) {
    case 'royal-sapphire': return 'Royal Sapphire & Medical Cyan';
    case 'sage-botanical': return 'Sage Botanical & Warm Sand';
    case 'lavender-glow': return 'Pearl Lavender & Silver Glow';
    default: return 'Rose Gold & Champagne';
  }
}

// Setup All Event Listeners
function setupEventListeners() {
  themeSelector?.addEventListener('change', (e) => {
    setTheme(e.target.value);
  });

  mobileToggleBtn?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
  });

  categoryTabs?.addEventListener('click', (e) => {
    const tab = e.target.closest('.cat-tab');
    if (!tab) return;
    document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    state.category = tab.dataset.category;
    applyFilters();
  });

  concernSelect?.addEventListener('change', (e) => {
    state.concern = e.target.value;
    applyFilters();
  });

  sortSelect?.addEventListener('change', (e) => {
    state.sort = e.target.value;
    applyFilters();
  });

  globalSearchInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    applyFilters();
  });

  openCartBtn?.addEventListener('click', openCart);
  closeCartBtn?.addEventListener('click', closeCart);
  cartOverlay?.addEventListener('click', closeCart);

  applyCouponBtn?.addEventListener('click', () => {
    const code = couponInput.value.trim().toUpperCase();
    if (code === 'MELLK10') {
      state.appliedCoupon = { code: 'MELLK10', discount: 0.10 };
      couponInput.value = '';
      showToast('10% Discount Code MELLK10 Applied!');
      updateCartUI();
    } else {
      showToast('Invalid Coupon Code. Try MELLK10');
    }
  });

  removeCouponBtn?.addEventListener('click', () => {
    state.appliedCoupon = null;
    showToast('Coupon removed');
    updateCartUI();
  });

  checkoutBtn?.addEventListener('click', () => {
    if (state.cart.length === 0) {
      showToast('Your cart is empty');
      return;
    }
    closeCart();
    openCheckoutModal();
  });

  closeModalBtn?.addEventListener('click', closeQuickView);
  quickViewOverlay?.addEventListener('click', closeQuickView);

  closeQuizModalBtn?.addEventListener('click', closeQuiz);
  quizOverlay?.addEventListener('click', closeQuiz);

  closeCheckoutModalBtn?.addEventListener('click', closeCheckout);
  checkoutOverlay?.addEventListener('click', closeCheckout);

  openQuizModalBtn?.addEventListener('click', openQuiz);
  startQuizBtn?.addEventListener('click', openQuiz);

  openWishlistBtn?.addEventListener('click', () => {
    state.category = 'All';
    state.filteredProducts = state.products.filter(p => state.wishlist.includes(p.id));
    renderProductsGrid(state.filteredProducts);
    document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
    showToast(`Showing ${state.wishlist.length} wishlist items`);
  });
}

// --- Product Filtering & Rendering ---
function applyFilters() {
  let list = [...state.products];

  if (state.category !== 'All') {
    list = list.filter(p => p.category === state.category);
  }

  if (state.concern !== 'All') {
    list = list.filter(p => p.concern.includes(state.concern));
  }

  if (state.searchQuery) {
    list = list.filter(p => 
      p.name.toLowerCase().includes(state.searchQuery) ||
      p.subname.toLowerCase().includes(state.searchQuery) ||
      p.activeIngredients.some(ing => ing.toLowerCase().includes(state.searchQuery))
    );
  }

  if (state.sort === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sort === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sort === 'rating') {
    list.sort((a, b) => b.rating - a.rating);
  }

  state.filteredProducts = list;
  renderProductsGrid(list);
}

function renderProducts() {
  renderProductsGrid(state.products);
}

function renderProductsGrid(productsList) {
  if (!productGrid) return;
  
  if (productsList.length === 0) {
    productGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 16px;">
        <i class="fa-solid fa-flask" style="font-size: 3rem; color: #cbd5e1; margin-bottom: 16px;"></i>
        <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--slate-dark);">No Products Found</h3>
        <p style="color: var(--slate-muted); margin-top: 8px;">Try clearing your filters or adjusting your search query.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = productsList.map(p => {
    const isWishlisted = state.wishlist.includes(p.id);
    return `
      <div class="product-card">
        <span class="product-badge ${p.badge.includes('SPF') || p.badge.includes('Glow') ? 'gold' : ''}">${p.badge}</span>
        
        <button class="product-wishlist-toggle ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${p.id}')">
          <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>

        <div class="product-image-box">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <button class="quick-view-trigger" onclick="openQuickView('${p.id}')">
            <i class="fa-regular fa-eye"></i> Quick View
          </button>
        </div>

        <div class="product-content">
          <span class="product-cat">${p.category}</span>
          <h3 class="product-title">${p.name}</h3>
          <p class="product-subname">${p.subname}</p>

          <div class="product-rating">
            <i class="fa-solid fa-star"></i>
            <strong>${p.rating}</strong>
            <span class="rating-count">(${p.reviewsCount})</span>
          </div>

          <div class="product-actives">
            ${p.activeIngredients.map(ing => `<span class="active-tag">${ing}</span>`).join('')}
          </div>

          <div class="product-footer">
            <div class="price-box">
              <span class="current-price">₹${p.price.toLocaleString('en-IN')}</span>
              <span class="original-price">₹${p.originalPrice.toLocaleString('en-IN')}</span>
            </div>
            <button class="add-cart-btn" onclick="addToCart('${p.id}')">
              <i class="fa-solid fa-bag-shopping"></i> Add
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- Science Section ---
function renderScience() {
  if (!scienceGrid) return;
  scienceGrid.innerHTML = CLINICAL_INGREDIENTS.map(ing => `
    <div class="science-card">
      <div class="science-icon"><i class="fa-solid fa-vial-circle-check"></i></div>
      <h3>${ing.name}</h3>
      <span class="science-role">${ing.role}</span>
      <p>${ing.description}</p>
    </div>
  `).join('');
}

// --- Cart Actions & UI ---
window.addToCart = function(productId, qty = 1) {
  const product = state.products.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += qty;
  } else {
    state.cart.push({ ...product, quantity: qty });
  }

  saveCart();
  updateCartUI();
  openCart();
  showToast(`Added ${product.name} to cart!`);
};

window.updateQty = function(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }

  saveCart();
  updateCartUI();
};

window.removeFromCart = function(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  showToast('Item removed from cart');
};

function saveCart() {
  localStorage.setItem('mellkderma_cart', JSON.stringify(state.cart));
}

function updateCartUI() {
  if (!cartCount || !cartItemCount) return;

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalCount;
  cartItemCount.textContent = totalCount;

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const freeThreshold = 999;
  if (shippingMsg && shippingProgress) {
    if (subtotal >= freeThreshold || totalCount === 0) {
      shippingMsg.innerHTML = `<i class="fa-solid fa-circle-check"></i> You have unlocked <strong>FREE Express Shipping</strong>!`;
      shippingProgress.style.width = '100%';
    } else {
      const diff = freeThreshold - subtotal;
      shippingMsg.innerHTML = `Add <strong>₹${diff.toLocaleString('en-IN')}</strong> more for FREE Shipping!`;
      shippingProgress.style.width = `${(subtotal / freeThreshold) * 100}%`;
    }
  }

  if (cartItemsBody) {
    if (state.cart.length === 0) {
      cartItemsBody.innerHTML = `
        <div class="empty-cart-view">
          <i class="fa-solid fa-bag-shopping"></i>
          <h4>Your Shopping Cart is Empty</h4>
          <p>Explore our clinical skincare range and add items to your cart.</p>
        </div>
      `;
    } else {
      cartItemsBody.innerHTML = state.cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h4 class="cart-item-name">${item.name}</h4>
            <div class="cart-item-price">₹${(item.price * item.quantity).toLocaleString('en-IN')}</div>
            <div class="cart-qty-ctrl">
              <button onclick="updateQty('${item.id}', -1)">-</button>
              <span>${item.quantity}</span>
              <button onclick="updateQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `).join('');
    }
  }

  if (cartSubtotal) cartSubtotal.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  
  let discountAmount = 0;
  if (state.appliedCoupon) {
    discountAmount = subtotal * state.appliedCoupon.discount;
    if (discountRow) discountRow.style.display = 'flex';
    if (cartDiscount) cartDiscount.textContent = `-₹${discountAmount.toLocaleString('en-IN')}`;
    if (couponTag) couponTag.style.display = 'flex';
  } else {
    if (discountRow) discountRow.style.display = 'none';
    if (couponTag) couponTag.style.display = 'none';
  }

  const shippingCost = (subtotal >= freeThreshold || totalCount === 0) ? 0 : 99;
  if (cartShipping) cartShipping.textContent = shippingCost === 0 ? 'FREE' : `₹${shippingCost}`;

  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);
  if (cartGrandTotal) cartGrandTotal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
}

function openCart() {
  cartDrawer?.classList.add('active');
  cartOverlay?.classList.add('active');
}

function closeCart() {
  cartDrawer?.classList.remove('active');
  cartOverlay?.classList.remove('active');
}

// --- Wishlist ---
window.toggleWishlist = function(productId) {
  if (state.wishlist.includes(productId)) {
    state.wishlist = state.wishlist.filter(id => id !== productId);
    showToast('Removed from Wishlist');
  } else {
    state.wishlist.push(productId);
    showToast('Added to Wishlist!');
  }
  localStorage.setItem('mellkderma_wishlist', JSON.stringify(state.wishlist));
  updateWishlistUI();
  renderProductsGrid(state.filteredProducts);
};

function updateWishlistUI() {
  if (wishlistCount) wishlistCount.textContent = state.wishlist.length;
}

// --- Quick View Modal ---
window.openQuickView = function(productId) {
  const p = state.products.find(item => item.id === productId);
  if (!p || !quickViewBody) return;

  quickViewBody.innerHTML = `
    <div class="quick-view-grid">
      <div class="quick-view-image">
        <img src="${p.bottleImage || p.image}" alt="${p.name}">
      </div>
      <div class="quick-view-details">
        <span class="product-cat">${p.category}</span>
        <h2>${p.name}</h2>
        <p class="subname">${p.subname} (${p.volume})</p>
        
        <div class="quick-view-price">
          ₹${p.price.toLocaleString('en-IN')} <del>₹${p.originalPrice.toLocaleString('en-IN')}</del>
        </div>

        <p class="quick-view-description">${p.description}</p>

        <div class="quick-view-tabs">
          <button class="tab-btn active" onclick="switchModalTab(this, 'overview-tab')">Key Actives</button>
          <button class="tab-btn" onclick="switchModalTab(this, 'usage-tab')">How To Use</button>
          <button class="tab-btn" onclick="switchModalTab(this, 'skin-tab')">Skin Concerns</button>
        </div>

        <div class="tab-panel" id="modal-tab-content">
          <strong>Active Formulations:</strong> ${p.activeIngredients.join(', ')}
        </div>

        <div style="display: flex; gap: 14px; margin-top: 24px;">
          <button class="btn btn-gold btn-lg" style="flex: 1;" onclick="addToCart('${p.id}'); closeQuickView();">
            <i class="fa-solid fa-bag-shopping"></i> Add To Cart
          </button>
        </div>
      </div>
    </div>
  `;

  quickViewOverlay?.classList.add('active');
  quickViewModal?.classList.add('active');
};

window.switchModalTab = function(btn, tabType) {
  document.querySelectorAll('.quick-view-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  const contentEl = document.getElementById('modal-tab-content');
  if (!contentEl) return;

  if (tabType === 'overview-tab') {
    contentEl.innerHTML = `<strong>Active Formulations:</strong> Key bio-actives formulated in high concentration for maximal dermal absorption.`;
  } else if (tabType === 'usage-tab') {
    contentEl.innerHTML = `<strong>Dermatologist Instructions:</strong> Apply onto cleansed skin. Gently massaged until fully absorbed into cellular layers.`;
  } else {
    contentEl.innerHTML = `<strong>Recommended Skin Profile:</strong> Ideal for daily defense, barrier restoration, and soothing inflammation.`;
  }
};

function closeQuickView() {
  quickViewOverlay?.classList.remove('active');
  quickViewModal?.classList.remove('active');
}

// --- Interactive Skin Routine Quiz ---
function openQuiz() {
  renderQuizStep(1);
  quizOverlay?.classList.add('active');
  quizModal?.classList.add('active');
}

function closeQuiz() {
  quizOverlay?.classList.remove('active');
  quizModal?.classList.remove('active');
}

function renderQuizStep(step) {
  if (!quizModalBody) return;

  if (step === 1) {
    quizModalBody.innerHTML = `
      <h3 class="quiz-step-title">Step 1: Select Your Primary Skin Type</h3>
      <p class="quiz-step-subtitle">How does your skin usually feel during the day?</p>
      
      <div class="quiz-options-grid">
        <div class="quiz-option-card" onclick="selectQuizOption('skinType', 'Oily / Acne Prone', 2)">
          <i class="fa-solid fa-droplet-slash"></i>
          <div>
            <h4>Oily / Acne Prone</h4>
            <small>Frequent breakouts, shine, enlarged pores</small>
          </div>
        </div>
        <div class="quiz-option-card" onclick="selectQuizOption('skinType', 'Dry / Dehydrated', 2)">
          <i class="fa-solid fa-sun-plant-wilt"></i>
          <div>
            <h4>Dry / Dehydrated</h4>
            <small>Tightness, flakiness, rough texture</small>
          </div>
        </div>
        <div class="quiz-option-card" onclick="selectQuizOption('skinType', 'Normal / Combination', 2)">
          <i class="fa-solid fa-face-smile"></i>
          <div>
            <h4>Normal / Combination</h4>
            <small>Oily T-zone, normal cheeks</small>
          </div>
        </div>
        <div class="quiz-option-card" onclick="selectQuizOption('skinType', 'Sensitive / Reactive', 2)">
          <i class="fa-solid fa-shield-cat"></i>
          <div>
            <h4>Sensitive / Reactive</h4>
            <small>Redness, easily irritated by products</small>
          </div>
        </div>
      </div>
    `;
  } else if (step === 2) {
    quizModalBody.innerHTML = `
      <h3 class="quiz-step-title">Step 2: What is Your Main Skin Concern?</h3>
      <p class="quiz-step-subtitle">Select the goal you want to achieve most.</p>
      
      <div class="quiz-options-grid">
        <div class="quiz-option-card" onclick="selectQuizOption('concern', 'Sun Damage & HEV Light', 3)">
          <i class="fa-solid fa-sun"></i>
          <div>
            <h4>Sun & Blue Light Defense</h4>
            <small>Prevent tan, sunspots & HEV light damage</small>
          </div>
        </div>
        <div class="quiz-option-card" onclick="selectQuizOption('concern', 'Dullness & Hyperpigmentation', 3)">
          <i class="fa-solid fa-wand-magic-sparkles"></i>
          <div>
            <h4>Hyperpigmentation & Glow</h4>
            <small>Fade dark spots & uneven skin tone</small>
          </div>
        </div>
        <div class="quiz-option-card" onclick="selectQuizOption('concern', 'Fine Lines & Anti-Aging', 3)">
          <i class="fa-solid fa-hourglass-half"></i>
          <div>
            <h4>Anti-Aging & Firming</h4>
            <small>Reduce wrinkles, lift & tighten skin</small>
          </div>
        </div>
        <div class="quiz-option-card" onclick="selectQuizOption('concern', 'Barrier Repair & Hydration', 3)">
          <i class="fa-solid fa-water"></i>
          <div>
            <h4>Intense Hydration</h4>
            <small>Restore compromised skin moisture barrier</small>
          </div>
        </div>
      </div>
    `;
  } else if (step === 3) {
    const matches = state.products.filter(p => 
      p.skinType.toLowerCase().includes(state.quizAnswers.skinType.split(' ')[0].toLowerCase()) ||
      p.concern.toLowerCase().includes(state.quizAnswers.concern.split(' ')[0].toLowerCase())
    ).slice(0, 2);

    const recs = matches.length > 0 ? matches : state.products.slice(0, 2);

    quizModalBody.innerHTML = `
      <div style="text-align: center;">
        <i class="fa-solid fa-circle-check" style="font-size: 3rem; color: var(--clinical-teal); margin-bottom: 12px;"></i>
        <h3 class="quiz-step-title">Your Customized Mellkderma Regimen</h3>
        <p class="quiz-step-subtitle">Based on your selection (${state.quizAnswers.skinType} + ${state.quizAnswers.concern})</p>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 28px 0;">
          ${recs.map(p => `
            <div style="border: 1px solid var(--border-light); padding: 20px; border-radius: 12px; text-align: left; background: #fafafa;">
              <img src="${p.image}" alt="${p.name}" style="height: 120px; object-fit: contain; margin: 0 auto 12px auto;">
              <h4 style="font-family: var(--font-serif); font-size: 1rem;">${p.name}</h4>
              <p style="font-size: 0.8rem; color: var(--slate-muted); margin-bottom: 10px;">${p.subname}</p>
              <strong style="color: var(--gold-dark);">₹${p.price.toLocaleString('en-IN')}</strong>
              <button class="btn btn-dark btn-block" style="margin-top: 12px;" onclick="addToCart('${p.id}'); closeQuiz();">
                Add Regimen Item
              </button>
            </div>
          `).join('')}
        </div>

        <button class="btn btn-outline" onclick="closeQuiz()">Close Analysis</button>
      </div>
    `;
  }
}

window.selectQuizOption = function(key, val, nextStep) {
  state.quizAnswers[key] = val;
  renderQuizStep(nextStep);
};

// --- Checkout Modal ---
function openCheckoutModal() {
  if (!checkoutBody) return;

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discountAmount = state.appliedCoupon ? subtotal * state.appliedCoupon.discount : 0;
  const shipping = subtotal >= 999 ? 0 : 99;
  const grandTotal = subtotal - discountAmount + shipping;

  checkoutBody.innerHTML = `
    <div style="padding: 36px;">
      <h2 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--slate-dark); margin-bottom: 6px;">Secure Clinical Checkout</h2>
      <p style="color: var(--slate-muted); font-size: 0.9rem; margin-bottom: 28px;">Complete your delivery & payment details below.</p>

      <form id="checkout-form" onsubmit="handleOrderSubmit(event)">
        <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 32px;">
          
          <div>
            <h4 style="margin-bottom: 14px; font-size: 1rem; color: var(--slate-dark);"><i class="fa-solid fa-location-dot text-gold"></i> Shipping Address</h4>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
              <input type="text" placeholder="Full Name *" required style="padding: 10px 14px; border: 1px solid var(--border-light); border-radius: 8px;">
              <input type="tel" placeholder="Mobile Phone *" required style="padding: 10px 14px; border: 1px solid var(--border-light); border-radius: 8px;">
            </div>

            <input type="email" placeholder="Email Address *" required style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: 8px; margin-bottom: 12px;">
            
            <textarea placeholder="Street Address, Flat/House No. *" required rows="3" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: 8px; margin-bottom: 12px; font-family: inherit;"></textarea>

            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-bottom: 24px;">
              <input type="text" placeholder="City *" required style="padding: 10px 14px; border: 1px solid var(--border-light); border-radius: 8px;">
              <input type="text" placeholder="State *" required style="padding: 10px 14px; border: 1px solid var(--border-light); border-radius: 8px;">
              <input type="text" placeholder="PIN Code *" required style="padding: 10px 14px; border: 1px solid var(--border-light); border-radius: 8px;">
            </div>

            <h4 style="margin-bottom: 14px; font-size: 1rem; color: var(--slate-dark);"><i class="fa-solid fa-credit-card text-gold"></i> Payment Method</h4>
            
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <label style="border: 1px solid var(--border-light); padding: 12px 16px; border-radius: 8px; display: flex; align-items: center; gap: 12px; cursor: pointer;">
                <input type="radio" name="payment" value="upi" checked>
                <i class="fa-solid fa-qrcode text-teal" style="font-size: 1.2rem;"></i>
                <div>
                  <strong>Instant UPI Payment</strong>
                  <small style="display: block; color: var(--slate-muted);">Google Pay, PhonePe, Paytm, BHIM</small>
                </div>
              </label>

              <label style="border: 1px solid var(--border-light); padding: 12px 16px; border-radius: 8px; display: flex; align-items: center; gap: 12px; cursor: pointer;">
                <input type="radio" name="payment" value="card">
                <i class="fa-solid fa-credit-card text-gold" style="font-size: 1.2rem;"></i>
                <div>
                  <strong>Credit / Debit Card</strong>
                  <small style="display: block; color: var(--slate-muted);">Visa, MasterCard, RuPay</small>
                </div>
              </label>

              <label style="border: 1px solid var(--border-light); padding: 12px 16px; border-radius: 8px; display: flex; align-items: center; gap: 12px; cursor: pointer;">
                <input type="radio" name="payment" value="cod">
                <i class="fa-solid fa-hand-holding-dollar text-slate" style="font-size: 1.2rem;"></i>
                <div>
                  <strong>Cash on Delivery (COD)</strong>
                  <small style="display: block; color: var(--slate-muted);">Pay upon delivery at your doorstep</small>
                </div>
              </label>
            </div>
          </div>

          <!-- Order Summary Card -->
          <div style="background: #f8fafc; border-radius: 14px; padding: 24px; border: 1px solid var(--border-light); height: fit-content;">
            <h4 style="font-family: var(--font-serif); font-size: 1.15rem; margin-bottom: 16px; color: var(--slate-dark);">Order Summary</h4>
            
            <div style="max-height: 200px; overflow-y: auto; margin-bottom: 16px;">
              ${state.cart.map(item => `
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 8px;">
                  <span>${item.name} (x${item.quantity})</span>
                  <strong>₹${(item.price * item.quantity).toLocaleString('en-IN')}</strong>
                </div>
              `).join('')}
            </div>

            <div style="border-top: 1px solid var(--border-light); padding-top: 12px; display: flex; flex-direction: column; gap: 6px; font-size: 0.88rem;">
              <div style="display: flex; justify-content: space-between;">
                <span>Subtotal</span>
                <span>₹${subtotal.toLocaleString('en-IN')}</span>
              </div>
              ${discountAmount > 0 ? `
                <div style="display: flex; justify-content: space-between; color: var(--clinical-teal-dark);">
                  <span>Discount (10%)</span>
                  <span>-₹${discountAmount.toLocaleString('en-IN')}</span>
                </div>
              ` : ''}
              <div style="display: flex; justify-content: space-between;">
                <span>Shipping</span>
                <span>${shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 700; color: var(--slate-dark); border-top: 1px solid var(--border-light); padding-top: 10px; margin-top: 4px;">
                <span>Total Amount</span>
                <span>₹${grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button type="submit" class="btn btn-gold btn-block btn-lg" style="margin-top: 24px;">
              <i class="fa-solid fa-check"></i> Complete Order
            </button>
          </div>

        </div>
      </form>
    </div>
  `;

  checkoutOverlay?.classList.add('active');
  checkoutModal?.classList.add('active');
}

window.handleOrderSubmit = function(e) {
  e.preventDefault();
  
  if (checkoutBody) {
    checkoutBody.innerHTML = `
      <div style="text-align: center; padding: 60px 40px;">
        <div style="width: 80px; height: 80px; background: #dcfce7; color: #16a34a; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 20px auto;">
          <i class="fa-solid fa-check"></i>
        </div>
        <h2 style="font-family: var(--font-serif); font-size: 2.2rem; color: var(--slate-dark); margin-bottom: 10px;">Order Placed Successfully!</h2>
        <p style="color: var(--slate-muted); font-size: 1.05rem; margin-bottom: 24px;">Thank you for choosing Mellkderma Skincare. Your Order ID is <strong>#MKD-${Math.floor(100000 + Math.random() * 900000)}</strong>.</p>
        <p style="font-size: 0.9rem; color: var(--slate-body); margin-bottom: 32px;">A confirmation receipt and tracking link have been dispatched to your email.</p>

        <button class="btn btn-primary btn-lg" onclick="finishOrderFlow()">Continue Shopping</button>
      </div>
    `;
  }
};

window.finishOrderFlow = function() {
  state.cart = [];
  saveCart();
  updateCartUI();
  closeCheckout();
  showToast('Order confirmed! Welcome to Mellkderma.');
};

function closeCheckout() {
  checkoutOverlay?.classList.remove('active');
  checkoutModal?.classList.remove('active');
}

// --- Toast Notification Helper ---
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-gold"></i> <span>${message}</span>`;
  
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}
