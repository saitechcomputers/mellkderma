// --- MELLKDERMA OFFICIAL PHARMACEUTICAL & DERMATOLOGY DATA ENGINE ---
// Exact Product Catalogue Data extracted from "Mellkderma Product Catalogue-4_261009_141014.pdf"
// Mellkderma Skincare Private Limited

const PRODUCTS = [
  {
    id: "vitamin-c-serum",
    name: "Mellkderma Vitamin C Serum",
    subname: "Mw Azeglemq V-C Serum • Brightening & Depigmenting",
    price: 2499,
    category: "Serums",
    skinType: "All Skin Types, Sensitive & Post-Procedure Skin",
    concern: "Uneven Skin Tone, Dullness, Pigmentation & Dermal Barrier",
    dosageForm: "Multifunctional Active Serum",
    volume: "30ml (1.01 FL. OZ.)",
    badge: "Paraben Free • Mineral Oil Free",
    cataloguePage: 4,
    description: "A cutting-edge, multifunctional serum formulated to address uneven skin tone, dullness, and pigmentation texture. This serum combines advanced brightening agents with potent hydrators to restore clarity and luminosity while reinforcing the skin's barrier and moisture balance.",
    formulatedWith: [
      {
        ingredient: "3-O-Ethyl Ascorbic Acid (Most Stable Version of Vitamin C)",
        details: "Helps brighten skin tone, gives a radiant glow, fades hyperpigmentation, powerful antioxidant protection, and acts as an anti-ageing wonder with protection against UV-induced immunosuppression."
      },
      {
        ingredient: "Aquaxyl™",
        details: "A patented complex of natural sugars which provides immediate moisturization after one single application and long-term restructuring effects."
      },
      {
        ingredient: "Hyaluronic Acid",
        details: "Intensely hydrates and plumps skin from the surface to deeper layers. Helps maintain skin elasticity, smoothness, and provides an optimal base for active absorption."
      }
    ],
    dermatologicalBenefits: [
      "Visibly reduces dark spots and discolouration",
      "Enhances overall skin brightness and clarity",
      "Deeply hydrates and supports the skin barrier",
      "Suitable for all skin types, including sensitive & post-procedure skin",
      "Paraben Free • Hypoallergenic • Mineral Oil Free"
    ],
    usage: "Dispense 3-4 drops on cleansed skin morning and evening. Gently press into face and neck before applying moisturizers. Follow with daily broad-spectrum sun protection.",
    storage: "Store below 25°C in a cool, dry place away from direct sunlight.",
    caution: "For external dermatological use only. Avoid contact with eyes. As directed by Physician/Dermatologist.",
    image: "public/images/products/vitamin_c_serum.png",
    featured: true
  },
  {
    id: "night-care",
    name: "Mellkderma Night Care",
    subname: "Mw Azeglemq Night Care • Anti-Wrinkle, Lifting & Firming Night Cream",
    price: 3200,
    category: "Anti-Aging",
    skinType: "Mature, Aging, Lax & Fine-Lined Skin",
    concern: "Fine Lines, Deep Wrinkles, Loss of Firmness & Skin Laxity",
    dosageForm: "Advanced Nighttime Cellular Renewal Formula",
    volume: "50g (1.76 OZ.)",
    badge: "Encapsulated Retinol • Matrixyl 3000",
    cataloguePage: 5,
    description: "A high-performance night cream specially formulated to address signs of aging, including fine lines, wrinkles, loss of firmness, and skin laxity. This powerful yet gentle formulation combines time-released encapsulated retinol with advanced biomimetic peptides to stimulate collagen production, visibly smooth skin, and restore youthful contour while minimizing irritation.",
    formulatedWith: [
      {
        ingredient: "Encapsulated Retinol (Stabilized, Time-Release Technology)",
        details: "Promotes epidermal cell turnover, smoothing rough texture and uneven tone. Stimulates dermal collagen synthesis, reducing the appearance of fine lines. Time-release encapsulation minimizes dryness, peeling, and redness without barrier disruption."
      },
      {
        ingredient: "Matrixyl 3000 (Palmitoyl Tripeptide-1 & Palmitoyl Tetrapeptide-7)",
        details: "Mimics natural skin repair messengers to rebuild the dermal matrix. Enhances skin elasticity and density over sustained use. Supports extracellular matrix (ECM) remodelling and visible skin thickening."
      },
      {
        ingredient: "Argireline Peptide Solution C (Acetyl Hexapeptide-8)",
        details: "Botox-like action that softens expression lines, especially around the eyes and forehead. Helps prevent the formation of new wrinkles with long-term use. Safe, non-invasive alternative to injectables."
      }
    ],
    dermatologicalBenefits: [
      "Visibly reduces fine lines, deep wrinkles and crow's feet",
      "Restores structural dermal density, skin elasticity and firmness",
      "Improves clarity and boosts overnight skin renewal without barrier peeling",
      "Time-released delivery ensures maximum clinical tolerance"
    ],
    usage: "Apply at night to cleansed face and neck. Smooth gently until absorbed. Begin with alternate-night application for the initial 2 weeks, then advance to nightly use.",
    storage: "Store in a cool, dark place below 25°C. Keep jar tightly closed.",
    caution: "For nocturnal topical application only. Daytime broad-spectrum sunscreen use is mandatory during retinol regimens. Not recommended for pregnant women.",
    image: "public/images/products/night_care.png",
    featured: true
  },
  {
    id: "brightening-complex-day",
    name: "Mellkderma Brightening Complex SPF 15+ Day Cream",
    subname: "Mw Azeglemq Eday • Brightening Complex SPF-15+",
    price: 3200,
    category: "Day Creams",
    skinType: "Normal to Dry, Melasma & Hyperpigmented Skin",
    concern: "Multimodal Depigmenting, Photo-Aging & Oxidative Protection",
    dosageForm: "Protective Day Cream with SPF 15",
    volume: "50g (1.76 OZ.)",
    badge: "Clair Blanche III™ (Japan)",
    cataloguePage: 6,
    description: "A scientifically advanced day cream combining multimodal brightening agents, photo-protection, and intense hydration. Formulated with Clair Blanche III™, a patented Japanese depigmenting complex, paired with stabilized vitamin C (3-O-Ethyl Ascorbic Acid) and hyaluronic acid to provide round-the-clock correction and protection.",
    formulatedWith: [
      {
        ingredient: "Clair Blanche III™ (Patented Japanese Brightening Complex)",
        details: "A clinically tested depigmenting system composed of multiple synergistic actives that target melanogenesis at several levels: reduces pigmentation intensity and spot size, inhibits tyrosinase and peroxidase enzymes involved in melanin production, and blocks melanosome maturation and transfer."
      },
      {
        ingredient: "3-O-Ethyl Ascorbic Acid",
        details: "Offers high penetration and oxidative stability. Blocks melanin synthesis at the cellular level, restoring daytime skin luminosity."
      },
      {
        ingredient: "Hyaluronic Acid",
        details: "Binds water at multiple layers of the skin for long-lasting hydration, enhancing skin plumpness, softness, and moisture cushion."
      },
      {
        ingredient: "Broad-Spectrum UV Protection (SPF 15)",
        details: "Guards against UVA and UVB-induced pigmentation flare-ups, preventing photo-aging, solar lentigines, and environmental oxidative damage."
      }
    ],
    dermatologicalBenefits: [
      "Depigmenting, protective and deeply hydrating multifunctional action",
      "Clair Blanche III™ Japanese bio-tech actively blocks melanosome transfer",
      "Built-in SPF 15 shields against UV-induced pigmentation rebound",
      "Delivers intense multi-layer epidermal hydration throughout the day"
    ],
    usage: "Apply evenly every morning to cleansed face and neck as part of the daily morning regimen. Ideal under makeup.",
    storage: "Store in a cool, dry place away from direct heat and light.",
    caution: "For external dermatological use only. Hypoallergenic formula.",
    image: "public/images/products/brightening_complex_day.png",
    featured: true
  },
  {
    id: "skinoshell-spray",
    name: "Mellkderma Sunscreen Spray SPF 50",
    subname: "Skinoshell Spray Sunscreen SPF50 • Defend & Nourish Formula",
    price: 1599,
    category: "Sun Care",
    skinType: "All Skin Types, Sensitive & Pediatric Skin",
    concern: "Broad-Spectrum UVA/UVB & HEV High Energy Visible Light Defense",
    dosageForm: "Water-Light Non-Greasy Spray Mist",
    volume: "100ml (3.38 FL. OZ.)",
    badge: "SUNCAT DE 15% • SPF 50 PA+++",
    cataloguePage: 7,
    description: "A clinically formulated, water-light sunscreen spray offering broad-spectrum protection against harmful UVA and UVB rays. This fast-absorbing, non-greasy mist is powered by next-generation photostable UV filters, making it ideal for both everyday use and outdoor exposure. Enhanced with SUNCAT DE™, this sunscreen provides immediate and sustained photoprotection.",
    formulatedWith: [
      {
        ingredient: "SUNCAT DE™ (Encapsulated UV Filter System)",
        details: "A patented delivery system combining both chemical and physical UV filters. Encapsulation enhances photostability, reduces irritation, and improves absorption while providing long-lasting protection with reduced need for frequent reapplications."
      },
      {
        ingredient: "Uvinul® A Plus (Diethylamino Hydroxybenzoyl Hexyl Benzoate)",
        details: "Protects against long-wave UVA rays (up to 400 nm) which cause deep cellular skin aging. Prevents collagen degradation, solar pigmentation, and oxidative damage. Safe and well-tolerated, suitable for sensitive skin."
      },
      {
        ingredient: "Octocrylene",
        details: "Broad-spectrum UVB absorber that enhances SPF performance. Adds water resistance and increases product longevity during active outdoor movement."
      }
    ],
    dermatologicalBenefits: [
      "Broad-spectrum UVA/UVB & HEV High Energy Visible light protection",
      "Ultra-lightweight spray form with rapid absorption and zero white residue",
      "SUNCAT DE™ micro-encapsulated technology prevents chemical filter direct skin penetration",
      "Water-resistant and photostable defense suitable for face and body"
    ],
    usage: "Shake well before use. Spray liberally from a distance of 15 cm onto exposed skin 15 minutes before sun exposure. Reapply every 2 hours or post swimming/sweating.",
    storage: "Store below 25°C in a dry place. Protect from heat and direct sunlight.",
    caution: "For external dermatological use only. Do not spray directly into eyes.",
    image: "public/images/products/skinoshell_spray.png",
    featured: true
  },
  {
    id: "moisturizer-dry",
    name: "Mellkderma Moisturizer for Dry Skin",
    subname: "Dryomin P Intensive Creme • 48 HR Continuous Hydration",
    price: 590,
    category: "Moisturizers",
    skinType: "Dry, Extremely Dry, Flaky, Sensitive & Atopic Skin",
    concern: "Severe Xerosis, Transepidermal Water Loss (TEWL) & Barrier Breakdown",
    dosageForm: "Rich Ultra-Nourishing Barrier Cream",
    volume: "200ml (6.76 FL. OZ.)",
    badge: "48 HR Hydration • Aquaxyl™",
    cataloguePage: 8,
    description: "Give your skin the care it deserves with Mellkderma Dryomin P intensive cream - a dermatologically advanced moisturizer formulated to deliver up to 48 hours of continuous hydration. Powered by Aquaxyl™, shea butter, and olive oil, this rich cream deeply nourishes, soothes, and restores the skin barrier, leaving your skin visibly soft, smooth, and healthy.",
    formulatedWith: [
      {
        ingredient: "Aquaxyl™",
        details: "A cutting-edge hydration booster that optimizes the skin's water reserves. Reinforces the skin's natural barrier function to dramatically reduce transepidermal water loss (TEWL)."
      },
      {
        ingredient: "Shea Butter",
        details: "A luxurious emollient rich in essential fatty acids and vitamins A, E, and F. Deeply hydrates, softens, and soothes dry, irritated, or flaky epidermal skin."
      },
      {
        ingredient: "Olive Oil Extract",
        details: "Rich in squalene and natural polyphenols, providing lasting lipid nourishment. Helps strengthen the skin's lipid matrix for long-term moisture retention."
      }
    ],
    dermatologicalBenefits: [
      "Deep nourishment, lasting comfort, and advanced continuous 48-hour hydration",
      "Restores compromised epidermal barrier and prevents moisture evaporation",
      "Fragrance Free • Paraben Free • Hypoallergenic • Non-Comedogenic",
      "Suitable for all skin types including pediatric, atopic, and sensitive dry skin"
    ],
    usage: "Apply generously to dry areas of face and body as often as required, especially after bathing or cleansing to seal in hydration.",
    storage: "Store below 25°C. Keep dispenser nozzle clean.",
    caution: "For external dermatological use only. Hypoallergenic, fragrance-free formula.",
    image: "public/images/products/moisturizer_dry.png",
    featured: true
  },
  {
    id: "liposomal-serum",
    name: "Mellkderma Liposomal Serum",
    subname: "Mw Azeglemq Liposomal Serum • Targeted Depigmenting Concentrate",
    price: 2499,
    category: "Serums",
    skinType: "Melasma, Post-Inflammatory Hyperpigmentation (PIH) & Sensitive Skin",
    concern: "Resistant Epidermal & Dermal Melasma, PIH & Stubborn Dark Spots",
    dosageForm: "High-Efficacy Liposome-Encapsulated Serum",
    volume: "30ml (1.01 FL. OZ.)",
    badge: "Liposomal Azelaic • 4-Butylresorcinol",
    cataloguePage: 9,
    description: "A high-efficacy depigmenting serum formulated with liposome-encapsulated actives to deliver powerful pigment-reducing agents deep into the skin with minimal irritation. This next-generation formulation combines liposomal azelaic acid, known for its anti-inflammatory and tyrosinase-inhibiting properties, with 4-butylresorcinol, a gold-standard brightening agent clinically proven to reduce stubborn pigmentation.",
    formulatedWith: [
      {
        ingredient: "Liposomal Azelaic Acid (Encapsulated Form)",
        details: "Reduces melanin production by inhibiting tyrosinase and mitochondrial enzymes. Encapsulation improves skin penetration, bioavailability, and tolerability while fighting inflammation in pigment-prone skin (e.g. acne, rosacea-related PIH)."
      },
      {
        ingredient: "4-Butylresorcinol",
        details: "One of the most potent tyrosinase inhibitors available for topical use. Clinically shown to be superior to kojic acid, hydroquinone, and arbutin in clinical studies. Targets deep epidermal and dermal pigmentation including resistant melasma."
      },
      {
        ingredient: "Liposomal Delivery System",
        details: "Enhances dermal delivery of actives without disrupting the barrier. Allows for sustained, controlled release. Improves skin compatibility and reduces surface irritation, supporting better treatment adherence with minimal stinging or redness."
      }
    ],
    dermatologicalBenefits: [
      "Superior tyrosinase inhibition targeting recalcitrant melasma and dermal pigmentation",
      "Liposomal micro-encapsulation eliminates burning, redness, and peeling",
      "Ideal for melasma, post-inflammatory hyperpigmentation (PIH), and post-acne dark marks",
      "Highly recommended in combination with in-clinic dermatological procedures"
    ],
    usage: "Apply 2-3 drops directly onto areas of hyperpigmentation or full face twice daily after cleansing. Gently massage until absorbed.",
    storage: "Store in a cool, dry place between 15°C and 25°C. Avoid exposure to light.",
    caution: "For external dermatological use only. Formulated for clinical physician recommendation.",
    image: "public/images/products/liposomal_serum.png",
    featured: false
  },
  {
    id: "moisturizer-acne",
    name: "Mellkderma Moisturizer for Acne Prone Skin",
    subname: "Csebderm Hydra Moisturizer • Ultra Moisturizing Acne-Prone Skin SPF 15",
    price: 1112,
    category: "Moisturizers",
    skinType: "Acne-Prone, Oily, Sensitized & Retinoid-Treated Skin",
    concern: "Acne Dehydration, Barrier Recovery & 72-Hour Sebum Balance",
    dosageForm: "Oil-Free Lightweight Barrier Support Cream with SPF 15",
    volume: "50g (1.76 OZ.)",
    badge: "Pentavitin® (72H) • Hyaluronic Acid",
    cataloguePage: 10,
    description: "A lightweight, non-greasy moisturizer specifically formulated for acne-prone, oily, and sensitized skin. This barrier-support formulation combines multi-molecular weight hyaluronic acid with Pentavitin® (Saccharide Isomerate), a clinically proven sugar-based humectant that delivers 72-hour moisture retention. Designed to maintain optimal skin hydration without clogging pores or triggering breakouts.",
    formulatedWith: [
      {
        ingredient: "Hyaluronic Acid (Multi-Molecular Weight)",
        details: "Delivers deep and surface-level hydration. Helps soothe flaking or dryness caused by acne treatments (e.g., retinoids, benzoyl peroxide). Supports wound healing and skin barrier repair, especially post-acne, instantly plumping without adding oil."
      },
      {
        ingredient: "Pentavitin® (Saccharide Isomerate)",
        details: "A 100% natural plant-derived humectant that binds to the skin like a magnet. Reinforces the skin barrier and improves moisture retention for up to 72 hours. Reduces tightness, itchiness, and sensitivity in dehydrated or compromised acne skin."
      },
      {
        ingredient: "Broad-Spectrum SPF 15",
        details: "Shields sensitized acne skin from UV-aggravated post-inflammatory hyperpigmentation (PIH) and solar erythema."
      }
    ],
    dermatologicalBenefits: [
      "100% Oil-Free, non-comedogenic formulation that will not clog pores",
      "Pentavitin® creates a 72-hour moisture reservoir to counter retinoid peeling",
      "Soothes erythema, flaking, and inflammation associated with active acne lesions",
      "Hydrating, skin barrier support with built-in daily SPF 15 photoprotection"
    ],
    usage: "Smooth a thin, even layer across cleansed skin twice daily. Suitable during medical anti-acne therapy.",
    storage: "Store below 30°C in a dry place. Keep tube capped.",
    caution: "For external dermatological use only. Non-comedogenic.",
    image: "public/images/products/moisturizer_acne.png",
    featured: false
  },
  {
    id: "hskinoshell-max",
    name: "Mellkderma Hskinoshell Max Sunscreen SPF50",
    subname: "Hskinoshell Max Sunscreen SPF50 • Defend & Nourish Formula",
    price: 1220,
    category: "Sun Care",
    skinType: "Combination, Oily, Sensitive & Photo-Aging Prone Skin",
    concern: "UVA/UVB Broad-Spectrum Protection & HEV Device Light Shielding",
    dosageForm: "Matte Ultra-Defense Gel-Cream",
    volume: "50g (1.76 OZ.)",
    badge: "OMC • Uvinul A Plus • Titanium Dioxide",
    cataloguePage: 11,
    description: "Mellkderma Hskinoshell Max Sunscreen SPF50 is expertly formulated to provide broad-spectrum protection against environmental aggressors like UV rays and high-energy visible (HEV) light from devices. Powered by OMC, Uvinul A Plus, Titanium Dioxide, and Vitamin E, this powerful yet gentle sunscreen not only shields your skin from sun damage but also delivers essential nourishment to maintain a healthy, radiant complexion.",
    formulatedWith: [
      {
        ingredient: "OMC (Octyl Methoxycinnamate)",
        details: "Provides effective protection against UVB rays, preventing sunburn and surface epidermal skin damage."
      },
      {
        ingredient: "Uvinul® A Plus",
        details: "Shields against long UVA rays that cause premature aging, helping maintain structural skin firmness and elasticity."
      },
      {
        ingredient: "Titanium Dioxide (Physical Mineral Shield)",
        details: "Reflects both UVA and UVB rays for physical broad-spectrum protection. Gentle on sensitive skin and suitable for daily clinical use."
      },
      {
        ingredient: "Vitamin E (Tocopheryl Acetate)",
        details: "Acts as a powerful antioxidant to fight free radicals, soothes and nourishes skin, and reduces UV-induced inflammation and dryness."
      }
    ],
    dermatologicalBenefits: [
      "Broad-Spectrum UVA/UVB Protection with SPF 50 PA+++ certification",
      "Defends against High Energy Visible (HEV) blue light from digital devices",
      "Non-greasy, elegant matte finish suitable for humid climates and oily skin",
      "Vitamin E antioxidant infusion protects against environmental ROS generation"
    ],
    usage: "Apply uniformly over face and neck 15 minutes before stepping outdoors. Reapply every 2 hours during continuous sun exposure.",
    storage: "Store in a cool and dry place away from heat and light.",
    caution: "For external dermatological application only. Dermatologist tested.",
    image: "public/images/products/hskinoshell_max.png",
    featured: true
  }
];

const CLINICAL_INGREDIENTS = [
  {
    name: "SUNCAT DE™ (Encapsulated Matrix)",
    role: "Photostable Broad-Spectrum Shield",
    description: "Patented micro-encapsulation combining physical and chemical UV filters that remain on the skin surface, eliminating systemic chemical absorption while ensuring prolonged UVA/UVB/HEV defense."
  },
  {
    name: "Clair Blanche III™ (Japan)",
    role: "Multimodal Melanosome Down-Regulator",
    description: "Biotechnological brightening complex formulated in Japan that inhibits tyrosinase and peroxidase enzymes, actively blocking melanosome maturation and transfer in persistent melasma."
  },
  {
    name: "Matrixyl 3000 & Argireline® C",
    role: "Extracellular Matrix Remodelling Peptides",
    description: "Dual Matrikine peptide complex (Pal-GHK & Pal-GQPR) paired with neuromuscular Argireline C to stimulate collagen synthesis, restore dermal density, and visibly soften expression lines."
  },
  {
    name: "Pentavitin® & Aquaxyl™",
    role: "Biomimetic 72-Hour Moisture Magnet",
    description: "100% plant-derived carbohydrate fractions that bond irreversibly with stratum corneum keratin, creating an enduring epidermal moisture reservoir for severe xerosis and post-retinoid peeling."
  }
];

// State Management
const state = {
  products: PRODUCTS,
  filteredProducts: PRODUCTS,
  category: 'All',
  concern: 'All',
  sort: 'featured',
  searchQuery: '',
  theme: localStorage.getItem('mellkderma_theme') || 'rose-gold'
};

// DOM Selectors
let productGrid, categoryTabs, concernSelect, sortSelect, globalSearchInput, scienceGrid, themeSelector;
let quickViewOverlay, quickViewModal, quickViewBody, closeModalBtn;
let policyOverlay, policyModal, policyModalBody, closePolicyModalBtn;
let inquiryOverlay, inquiryModal, closeInquiryModalBtn, inquiryForm;
let mobileToggleBtn, navMenu;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  initDOM();
  initTheme();
  renderProductsGrid(state.filteredProducts);
  renderScience();
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

  quickViewOverlay = document.getElementById('quick-view-overlay');
  quickViewModal = document.getElementById('quick-view-modal');
  quickViewBody = document.getElementById('quick-view-body');
  closeModalBtn = document.getElementById('close-modal-btn');

  policyOverlay = document.getElementById('policy-overlay');
  policyModal = document.getElementById('policy-modal');
  policyModalBody = document.getElementById('policy-modal-body');
  closePolicyModalBtn = document.getElementById('close-policy-modal-btn');

  inquiryOverlay = document.getElementById('inquiry-overlay');
  inquiryModal = document.getElementById('inquiry-modal');
  closeInquiryModalBtn = document.getElementById('close-inquiry-modal-btn');
  inquiryForm = document.getElementById('inquiry-form');

  mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  navMenu = document.getElementById('nav-menu');
}

// Theme Handling
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
  showToast(`Active Theme: ${getThemeLabel(themeName)}`);
}

function getThemeLabel(t) {
  switch (t) {
    case 'royal-sapphire': return 'Royal Sapphire & Medical Cyan';
    case 'sage-botanical': return 'Sage Botanical & Warm Sand';
    case 'lavender-glow': return 'Pearl Lavender & Silver Glow';
    default: return 'Rose Gold & Champagne';
  }
}

// Setup Event Listeners
function setupEventListeners() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  mobileToggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu?.classList.toggle('active');
  });

  navMenu?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('active');
    });
  });

  document.addEventListener('click', (e) => {
    if (navMenu?.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggleBtn?.contains(e.target)) {
      navMenu.classList.remove('active');
    }
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

  closeModalBtn?.addEventListener('click', closeQuickView);
  quickViewOverlay?.addEventListener('click', closeQuickView);

  closePolicyModalBtn?.addEventListener('click', closePolicyModal);
  policyOverlay?.addEventListener('click', closePolicyModal);

  closeInquiryModalBtn?.addEventListener('click', closeInquiryModal);
  inquiryOverlay?.addEventListener('click', closeInquiryModal);

  inquiryForm?.addEventListener('submit', handleInquirySubmit);
}

// Product Filtering
function applyFilters() {
  let list = [...state.products];

  if (state.category !== 'All') {
    list = list.filter(p => p.category === state.category);
  }

  if (state.concern !== 'All') {
    list = list.filter(p => 
      p.concern.toLowerCase().includes(state.concern.toLowerCase()) || 
      p.skinType.toLowerCase().includes(state.concern.toLowerCase())
    );
  }

  if (state.searchQuery) {
    list = list.filter(p => 
      p.name.toLowerCase().includes(state.searchQuery) ||
      p.subname.toLowerCase().includes(state.searchQuery) ||
      p.formulatedWith.some(f => f.ingredient.toLowerCase().includes(state.searchQuery)) ||
      p.concern.toLowerCase().includes(state.searchQuery)
    );
  }

  if (state.sort === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sort === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sort === 'name-az') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  state.filteredProducts = list;
  renderProductsGrid(list);
}

// Render Products Grid
function renderProductsGrid(productsList) {
  if (!productGrid) return;
  
  if (productsList.length === 0) {
    productGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 16px; border: 1px solid var(--border-light);">
        <i class="fa-solid fa-flask" style="font-size: 3rem; color: #cbd5e1; margin-bottom: 16px;"></i>
        <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--slate-dark);">No Formulations Found</h3>
        <p style="color: var(--slate-muted); margin-top: 8px;">Please adjust your search criteria or select 'All Formulations'.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = productsList.map(p => `
    <div class="product-card">
      <span class="product-badge gold">${p.badge}</span>

      <div class="product-image-box tint-${p.id}" onclick="openQuickView('${p.id}')" style="cursor: pointer;" title="Click to view full clinical monograph">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <button class="quick-view-trigger" onclick="event.stopPropagation(); openQuickView('${p.id}')">
          <i class="fa-solid fa-file-medical"></i> View Monograph
        </button>
      </div>

      <div class="product-content">
        <div class="product-cat-row">
          <span class="product-cat">${p.category}</span>
          <span class="product-vol-pill"><i class="fa-solid fa-box-archive"></i> ${p.volume}</span>
        </div>

        <h3 class="product-title" onclick="openQuickView('${p.id}')" style="cursor: pointer;">${p.name}</h3>
        <p class="product-subname">${p.subname}</p>

        <div class="product-meta-row">
          <span class="clinical-indication-badge"><i class="fa-solid fa-notes-medical"></i> ${p.concern.split(',')[0].trim()}</span>
        </div>

        <div class="product-actives-block">
          <div class="actives-heading">Formulated With:</div>
          <div class="product-actives">
            ${p.formulatedWith.map(f => `<span class="active-tag">${f.ingredient.split('(')[0].trim()}</span>`).join('')}
          </div>
        </div>

        <div class="product-footer manufacturer-footer">
          <div class="mrp-box">
            <span class="mrp-label">M.R.P. (Incl. of all taxes)</span>
            <span class="current-price">₹${p.price.toLocaleString('en-IN')}</span>
          </div>
          <button class="view-details-btn" onclick="openQuickView('${p.id}')" title="Read Full Medicine Information">
            <i class="fa-solid fa-file-waveform"></i> Monograph
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Render Science Grid
function renderScience() {
  if (!scienceGrid) return;
  scienceGrid.innerHTML = CLINICAL_INGREDIENTS.map(ing => `
    <div class="science-card">
      <div class="science-icon"><i class="fa-solid fa-flask-vial"></i></div>
      <h3>${ing.name}</h3>
      <span class="science-role">${ing.role}</span>
      <p>${ing.description}</p>
    </div>
  `).join('');
}

// Open Product Monograph / Full Clinical Specification Modal
window.openQuickView = function(productId) {
  const p = state.products.find(item => item.id === productId);
  if (!p || !quickViewBody) return;

  quickViewBody.innerHTML = `
    <div class="quick-view-grid monograph-modal-grid">
      <div class="quick-view-image tint-${p.id}">
        <img src="${p.bottleImage || p.image}" alt="${p.name}">
        <div class="packaging-spec-pill">
          <i class="fa-solid fa-prescription-bottle-medical"></i> ${p.dosageForm} &bull; ${p.volume}
        </div>
      </div>

      <div class="quick-view-details">
        <div class="monograph-header-top">
          <span class="monograph-badge"><i class="fa-solid fa-certificate"></i> Catalogue Page ${p.cataloguePage} &bull; Official Formulation</span>
          <span class="product-cat">${p.category}</span>
        </div>

        <h2>${p.name}</h2>
        <p class="subname">${p.subname}</p>
        
        <div class="monograph-price-bar">
          <div>
            <span class="mrp-subtext">Maximum Retail Price (M.R.P.)</span>
            <div class="quick-view-price">₹${p.price.toLocaleString('en-IN')}</div>
            <small style="color: var(--slate-muted); font-size: 0.8rem;">Inclusive of all taxes &bull; Net Qty: ${p.volume}</small>
          </div>
          <div class="manufacturer-seal">
            <i class="fa-solid fa-shield-halved text-gold"></i>
            <div>
              <strong>GMP QUALITY COMPLIANT</strong>
              <small>Mellkderma Skincare Pvt. Ltd.</small>
            </div>
          </div>
        </div>

        <p class="quick-view-description">${p.description}</p>

        <div class="quick-view-tabs">
          <button class="tab-btn active" onclick="switchModalTab(this, 'actives-tab', '${p.id}')">
            <i class="fa-solid fa-vials"></i> Formulated With
          </button>
          <button class="tab-btn" onclick="switchModalTab(this, 'benefits-tab', '${p.id}')">
            <i class="fa-solid fa-clipboard-check"></i> Clinical Benefits
          </button>
          <button class="tab-btn" onclick="switchModalTab(this, 'dosage-tab', '${p.id}')">
            <i class="fa-solid fa-hand-holding-medical"></i> Administration & Use
          </button>
          <button class="tab-btn" onclick="switchModalTab(this, 'storage-tab', '${p.id}')">
            <i class="fa-solid fa-triangle-exclamation"></i> Storage & Caution
          </button>
        </div>

        <div class="tab-panel monograph-panel" id="modal-tab-content">
          <div class="panel-section">
            <strong style="color: var(--slate-dark); font-size: 1rem; display: block; margin-bottom: 8px;">Key Active Ingredients:</strong>
            ${p.formulatedWith.map(f => `
              <div style="margin-bottom: 10px;">
                <strong style="color: var(--gold-dark);"><i class="fa-solid fa-flask"></i> ${f.ingredient}:</strong>
                <span style="display: block; margin-top: 3px; font-size: 0.92rem; color: var(--slate-body);">${f.details}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="monograph-actions-row">
          <button type="button" class="btn btn-gold btn-lg" onclick="openInquiryModal('${p.id}')">
            <i class="fa-solid fa-file-signature"></i> Inquire Availability & Institutional Supply
          </button>
          <a href="mailto:care@mellkderma.com?subject=Inquiry%20for%20${encodeURIComponent(p.name)}" class="btn btn-outline btn-lg">
            <i class="fa-solid fa-envelope"></i> Email Medical Desk
          </a>
        </div>

        <div class="monograph-regulatory-note">
          <i class="fa-solid fa-circle-exclamation"></i>
          <span><strong>Medical Notice:</strong> This product monograph is published for healthcare professionals and medical reference. Not for self-medication. As recommended by Dermatologists.</span>
        </div>

      </div>
    </div>
  `;

  quickViewOverlay?.classList.add('active');
  quickViewModal?.classList.add('active');
  if (quickViewModal) quickViewModal.scrollTop = 0;
};

window.switchModalTab = function(btn, tabType, productId) {
  document.querySelectorAll('.quick-view-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  
  const contentEl = document.getElementById('modal-tab-content');
  const p = state.products.find(item => item.id === productId);
  if (!contentEl || !p) return;

  if (tabType === 'actives-tab') {
    contentEl.innerHTML = `
      <div class="panel-section">
        <strong style="color: var(--slate-dark); font-size: 1rem; display: block; margin-bottom: 8px;">Key Active Ingredients:</strong>
        ${p.formulatedWith.map(f => `
          <div style="margin-bottom: 10px;">
            <strong style="color: var(--gold-dark);"><i class="fa-solid fa-flask"></i> ${f.ingredient}:</strong>
            <span style="display: block; margin-top: 3px; font-size: 0.92rem; color: var(--slate-body);">${f.details}</span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (tabType === 'benefits-tab') {
    contentEl.innerHTML = `
      <div class="panel-section">
        <strong style="color: var(--slate-dark); font-size: 1rem; display: block; margin-bottom: 8px;">Dermatological & Clinical Benefits:</strong>
        <ul style="padding-left: 20px; line-height: 1.7; margin-top: 6px; color: var(--slate-body);">
          ${p.dermatologicalBenefits.map(b => `<li>${b}</li>`).join('')}
        </ul>
        <div style="margin-top: 14px; padding-top: 10px; border-top: 1px dashed var(--border-light); font-size: 0.88rem; color: var(--slate-muted);">
          Therapeutic Target: <strong>${p.concern}</strong> &bull; Recommended Skin Profile: <strong>${p.skinType}</strong>
        </div>
      </div>
    `;
  } else if (tabType === 'dosage-tab') {
    contentEl.innerHTML = `
      <div class="panel-section">
        <strong style="color: var(--slate-dark); font-size: 1rem; display: block; margin-bottom: 8px;">Administration & Clinical Directions:</strong>
        <p style="margin-top: 6px; line-height: 1.65; color: var(--slate-body);">${p.usage}</p>
        <div style="margin-top: 14px; padding-top: 10px; border-top: 1px dashed var(--border-light); font-size: 0.88rem;">
          Presentation: <strong>${p.volume}</strong> &bull; Dosage Form: <strong>${p.dosageForm}</strong>
        </div>
      </div>
    `;
  } else {
    contentEl.innerHTML = `
      <div class="panel-section">
        <strong style="color: var(--slate-dark); font-size: 1rem; display: block; margin-bottom: 8px;">Storage Instructions:</strong>
        <p style="margin-top: 4px; color: var(--slate-body);">${p.storage}</p>
        <strong style="color: var(--slate-dark); font-size: 1rem; display: block; margin-top: 12px; margin-bottom: 6px;">Precautionary Guidance:</strong>
        <p style="margin-top: 4px; line-height: 1.65; color: var(--slate-body);">${p.caution}</p>
      </div>
    `;
  }
};

function closeQuickView() {
  quickViewOverlay?.classList.remove('active');
  quickViewModal?.classList.remove('active');
}

// --- AM / PM Clinical Regimen Protocol (Physician Reference) ---
const REGIMEN_PROTOCOLS = {
  am: {
    title: "Morning Defense & Cellular Shield Protocol (AM)",
    subtitle: "Recommended sequence for daytime barrier protection against UV/HEV radiation, oxidative stress, and hyperpigmentation.",
    steps: [
      { step: "PHASE 01 • ANTIOXIDANT", productId: "vitamin-c-serum", note: "Apply 3–4 drops to neutralize free radicals, suppress melanogenesis, and support cellular defense." },
      { step: "PHASE 02 • HYDRATE & DEFEND", productId: "brightening-complex-day", note: "Lock in multi-depth moisture with Japanese Clair Blanche III™ while providing baseline SPF 15+ shielding." },
      { step: "PHASE 03 • PHOTOPROTECT", productId: "skinoshell-spray", note: "Seal with broad-spectrum SPF 50 PA+++ encapsulated SUNCAT DE™ filters for complete UVA/UVB/HEV defense." }
    ]
  },
  pm: {
    title: "Nocturnal Repair & Dermal Renewal Protocol (PM)",
    subtitle: "Recommended sequence for nighttime cellular turnover, epidermal barrier restoration, and targeted depigmentation.",
    steps: [
      { step: "PHASE 01 • TARGETED ACTIVES", productId: "liposomal-serum", note: "Deliver micro-encapsulated liposomal Azelaic Acid & 4-Butylresorcinol deep into basal epidermal layers." },
      { step: "PHASE 02 • COLLAGEN SYNTHESIS", productId: "night-care", note: "Promote nighttime matrix synthesis and epidermal firming with encapsulated Retinol & Matrixyl 3000." },
      { step: "PHASE 03 • BARRIER SEAL", productId: "moisturizer-dry", note: "Seal stratum corneum lipid barrier with 48-hour continuous Aquaxyl™ moisture lock." }
    ]
  }
};

function renderRegimen(mode = 'am') {
  const stepsGrid = document.getElementById('regimen-steps-grid');
  const bundleBar = document.getElementById('regimen-bundle-bar');
  if (!stepsGrid || !bundleBar) return;

  const protocol = REGIMEN_PROTOCOLS[mode] || REGIMEN_PROTOCOLS.am;

  stepsGrid.innerHTML = protocol.steps.map(item => {
    const p = state.products.find(prod => prod.id === item.productId);
    if (!p) return '';
    return `
      <div class="regimen-step-card">
        <span class="regimen-step-num">${item.step}</span>
        <div class="regimen-step-img tint-${p.id}" onclick="openQuickView('${p.id}')">
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="regimen-step-body">
          <span class="product-cat">${p.category} &bull; ${p.volume}</span>
          <h4 onclick="openQuickView('${p.id}')">${p.name}</h4>
          <p>${item.note}</p>
          <div class="regimen-step-footer">
            <span class="regimen-mrp">M.R.P. ₹${p.price.toLocaleString('en-IN')}</span>
            <button type="button" class="btn btn-outline btn-sm" onclick="openQuickView('${p.id}')">
              <i class="fa-solid fa-file-medical"></i> View Monograph
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  bundleBar.innerHTML = `
    <div class="regimen-protocol-box">
      <div class="protocol-info">
        <span class="protocol-badge"><i class="fa-solid fa-user-doctor"></i> Clinical Protocol Reference</span>
        <h4>${protocol.title}</h4>
        <p>${protocol.subtitle}</p>
      </div>
      <div class="protocol-disclaimer">
        <i class="fa-solid fa-circle-info"></i>
        <span><strong>Physician Guidance:</strong> Formulation sequencing, concentration, and frequency should be determined according to the individual patient's skin condition by the prescribing Dermatologist.</span>
      </div>
    </div>
  `;
}

window.switchRegimen = function(mode) {
  document.getElementById('am-regimen-btn')?.classList.toggle('active', mode === 'am');
  document.getElementById('pm-regimen-btn')?.classList.toggle('active', mode === 'pm');
  renderRegimen(mode);
};

// Filter by Category Quick Jump
window.filterByCategory = function(categoryName) {
  state.category = categoryName;
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.category === categoryName);
  });
  applyFilters();
  document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
};

// Trade & Doctor Inquiry Modal
window.openInquiryModal = function(productId = '') {
  const medSelect = document.getElementById('inquiry-medicine');
  if (medSelect && productId) {
    medSelect.value = productId;
  }
  inquiryOverlay?.classList.add('active');
  inquiryModal?.classList.add('active');
};

function closeInquiryModal() {
  inquiryOverlay?.classList.remove('active');
  inquiryModal?.classList.remove('active');
}

function handleInquirySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('inq-name')?.value || '';
  const role = document.getElementById('inq-role')?.value || '';
  const org = document.getElementById('inq-org')?.value || '';
  const phone = document.getElementById('inq-phone')?.value || '';
  const medId = document.getElementById('inquiry-medicine')?.value || '';
  const med = state.products.find(p => p.id === medId);
  const medName = med ? med.name : 'All Mellkderma Formulations';

  closeInquiryModal();
  showToast(`Thank you, ${name}. Your trade inquiry for "${medName}" has been submitted to Mellkderma Skincare Private Limited.`);
  inquiryForm?.reset();
}

// Policy Modal
const POLICY_CONTENT = {
  manufacturing: {
    title: "Pharmaceutical Quality & Manufacturing Standards",
    icon: "fa-certificate",
    body: `
      <p><strong>Mellkderma Skincare Private Limited</strong> operates under rigorous pharmaceutical-grade quality management and cosmetic GMP protocols.</p>
      <ul style="margin: 16px 0; padding-left: 20px; line-height: 1.8; color: var(--slate-body);">
        <li><strong>Cleanroom Formulation:</strong> Manufactured under controlled Class 100,000 cleanroom environments to maintain sterile purity and prevent contamination.</li>
        <li><strong>Bio-Active Validation:</strong> Every active component (SUNCAT DE, Retinol, Aquaxyl, Clair Blanche III) is verified via HPLC and analytical assay prior to batch compounding.</li>
        <li><strong>Stability & Accelerated Testing:</strong> Formulations undergo standard accelerated stability testing at 40°C / 75% RH to verify shelf-life integrity and active potency.</li>
      </ul>
    `
  },
  disclaimer: {
    title: "Official Medical & Prescribing Disclaimer",
    icon: "fa-user-doctor",
    body: `
      <p>All content published on <strong>www.mellkderma.com</strong> is strictly intended for educational, professional reference, and product information purposes for healthcare practitioners, clinics, and informed patients.</p>
      <div style="background: #f8fafc; border-left: 4px solid var(--gold-primary); padding: 16px; margin: 16px 0;">
        <p style="margin: 0; font-size: 0.92rem; color: var(--slate-dark);">
          <strong>Notice:</strong> Mellkderma products are formulated for clinical efficacy under professional supervision. Nothing on this website constitutes direct medical advice, diagnosis, or prescription. Patients must consult a qualified dermatologist or registered medical practitioner for tailored diagnosis and treatment.
        </p>
      </div>
    `
  },
  distribution: {
    title: "Institutional Supply & Distribution Network",
    icon: "fa-truck-medical",
    body: `
      <p>Mellkderma Skincare Private Limited partners with licensed pharmaceutical distributors, hospital pharmacies, and dermatology clinics across India.</p>
      <ul style="margin: 16px 0; padding-left: 20px; line-height: 1.8; color: var(--slate-body);">
        <li><strong>Corporate Office:</strong> #155/1, Adarsh Nagar, New Rly Road, Gurugram, Haryana.</li>
        <li><strong>Trade Desk Email:</strong> care@mellkderma.com</li>
        <li><strong>Supply Channels:</strong> Direct hospital orders, institutional tenders, and regional stockist networks.</li>
      </ul>
    `
  }
};

window.openPolicyModal = function(type) {
  if (!policyModalBody) return;
  const info = POLICY_CONTENT[type] || POLICY_CONTENT.disclaimer;

  policyModalBody.innerHTML = `
    <div>
      <div style="width: 56px; height: 56px; border-radius: 16px; background: rgba(212, 175, 55, 0.15); color: var(--gold-dark); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; margin-bottom: 18px;">
        <i class="fa-solid ${info.icon}"></i>
      </div>
      <h3 class="quiz-step-title" style="text-align: left; font-size: 1.65rem; margin-bottom: 14px;">${info.title}</h3>
      <div style="font-size: 0.96rem; color: var(--slate-body); line-height: 1.75;">
        ${info.body}
      </div>
    </div>
  `;

  policyOverlay?.classList.add('active');
  policyModal?.classList.add('active');
};

function closePolicyModal() {
  policyOverlay?.classList.remove('active');
  policyModal?.classList.remove('active');
}

// Toast Helper
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
