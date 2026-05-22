/* ==========================================================================
   ELEVATOR CONCEPT UNISEX SALOON - INTERACTIVE FRONTEND ENGINE (SPA)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DATA STORES (SERVICES & BUNDLES)
  // ==========================================

  // Confirmed safe grooming services
  const SERVICES = [
    {
      id: 'srv-sig-cut',
      category: 'barbing',
      name: 'Signature Haircut',
      desc: 'Precision bespoke haircut tailored to your unique head structure, profile, and hairline style.',
      duration: '30-45 mins',
      priceText: 'Confirm with salon'
    },
    {
      id: 'srv-clean-fade',
      category: 'barbing',
      name: 'Clean Fade',
      desc: 'Expertly blended skin fade, mid fade, shadow fade, or classic taper fade using hygienic premium tools.',
      duration: '40-50 mins',
      priceText: 'Confirm with salon'
    },
    {
      id: 'srv-beard-trim',
      category: 'barbing',
      name: 'Beard Trim & Care',
      desc: 'Careful shaping, razor alignment, hot towel prep, and organic beard oil care for styling.',
      duration: '20-30 mins',
      priceText: 'Confirm with salon'
    },
    {
      id: 'srv-braids-cornrows',
      category: 'styling',
      name: 'Braids & Cornrows',
      desc: 'Expertly woven traditional or contemporary unisex braids, custom patterns, and clean parting.',
      duration: '90-180 mins',
      priceText: 'Confirm with salon'
    },
    {
      id: 'srv-natural-styling',
      category: 'styling',
      name: 'Natural Hair Styling',
      desc: 'Hydrating wash, deep conditioning, detangling, and moisture-locking styling for natural curls.',
      duration: '60-90 mins',
      priceText: 'Confirm with salon'
    },
    {
      id: 'srv-nail-care',
      category: 'nails',
      name: 'Nail Care & Trim',
      desc: 'Gentle cuticle care, nail shaping, cleaning, hand massage, and optional premium polish.',
      duration: '30-45 mins',
      priceText: 'Confirm with salon'
    },
    {
      id: 'srv-facial-care',
      category: 'facial',
      name: 'Facial Care Session',
      desc: 'Gentle hydrating exfoliation, face wash, oil control, and refreshing herbal facial self-care.',
      duration: '40 mins',
      priceText: 'Confirm with salon'
    },
    {
      id: 'srv-face-steaming',
      category: 'facial',
      name: 'Face Steaming & Refresh',
      desc: 'Deep warm face steaming to unclog skin pores, hydrate the face, and provide a refreshing facial experience.',
      duration: '30 mins',
      priceText: 'Confirm with salon'
    },
    {
      id: 'srv-beauty-grooming',
      category: 'beauty',
      name: 'Beauty Grooming Session',
      desc: 'Detailed hairline lining, eyebrow clean-ups, beard hydration, and quick refreshing styling details.',
      duration: '20-30 mins',
      priceText: 'Confirm with salon'
    }
  ];

  // Premium package bundles
  const PACKAGES = [
    {
      id: 'pkg-fresh-look',
      name: 'Fresh Look Package',
      features: ['Signature Haircut', 'Beard Trim & Care', 'Refreshing Face Steaming'],
      duration: '75 mins',
      priceText: 'Confirm with salon'
    },
    {
      id: 'pkg-beauty-refresh',
      name: 'Beauty Refresh Package',
      features: ['Natural Hair Styling / Braids', 'Nail Care & Trim', 'Facial Care Session'],
      duration: '150 mins',
      priceText: 'Confirm with salon',
      popular: true
    },
    {
      id: 'pkg-full-elevation',
      name: 'Full Elevation Package',
      features: ['Signature Haircut / Styling', 'Beard Trim', 'Face Steaming & Refresh', 'Nail Care & Trim', 'Beauty Grooming Session'],
      duration: '180 mins',
      priceText: 'Confirm with salon'
    },
    {
      id: 'pkg-student-freshup',
      name: 'Student Fresh-Up Package',
      features: ['Clean Fade / Signature Haircut', 'Beard Trim & Clean Lining', 'Student Value Grooming Discount'],
      duration: '50 mins',
      priceText: 'Confirm with salon'
    }
  ];

  // Bento transformation wall database
  const GALLERY_ITEMS = [
    { cat: 'barbing', title: 'Sharp Skin Fade', tag: 'Fade Work', size: 'col-2' },
    { cat: 'braids', title: 'Intricate Geometric Cornrows', tag: 'Braids & Styling', size: 'row-2' },
    { cat: 'facial', title: 'Face Steaming Session', tag: 'Facial Care', size: 'normal' },
    { cat: 'nails', title: 'Clean Nail Grooming', tag: 'Nail Care', size: 'normal' },
    { cat: 'interior', title: 'Premium Comfort Seats', tag: 'Studio Interior', size: 'col-2' },
    { cat: 'barbing', title: 'Classic Trim & Lineup', tag: 'Barbing Results', size: 'normal' },
    { cat: 'braids', title: 'Natural Twist Styling', tag: 'Styling Work', size: 'normal' },
    { cat: 'interior', title: 'Hygienic Hair Sanitizers', tag: 'Inside the Studio', size: 'col-2' }
  ];

  // Default simulated local bookings database
  const DEFAULT_BOOKINGS = [
    {
      code: 'ELV-4821',
      name: 'Samuel Adebayo',
      phone: '08012345678',
      services: ['Signature Haircut', 'Face Steaming & Refresh'],
      date: '2026-05-23',
      time: '10:30 AM',
      notes: 'Loves precise lineup, sensitive skin around neck.',
      status: 'Confirmation Pending',
      timestamp: Date.now() - 3600000 * 4
    },
    {
      code: 'ELV-9872',
      name: 'Blessing Chioma',
      phone: '08122334455',
      services: ['Braids & Cornrows', 'Nail Care & Trim'],
      date: '2026-05-24',
      time: '01:30 PM',
      notes: 'Standard grid pattern, no extension extensions.',
      status: 'Appointment Confirmed',
      timestamp: Date.now() - 3600000 * 24
    },
    {
      code: 'ELV-1105',
      name: 'Tobi Alao',
      phone: '09088776655',
      services: ['Student Fresh-Up Package'],
      date: '2026-05-22',
      time: '04:30 PM',
      notes: 'FUTA student discount verification.',
      status: 'Service Completed',
      timestamp: Date.now() - 3600000 * 48
    }
  ];

  // WhatsApp Support Number Placeholder (Owner updates this)
  const WHATSAPP_PHONE = '2348000000000'; // Default safe coordinate number placeholder

  // ==========================================
  // 2. STATE INITIALIZATION (LOBAL STORAGE)
  // ==========================================
  
  // Load or setup bookings database
  let bookings = JSON.parse(localStorage.getItem('elevator_bookings'));
  if (!bookings || bookings.length === 0) {
    bookings = DEFAULT_BOOKINGS;
    localStorage.setItem('elevator_bookings', JSON.stringify(bookings));
  }

  // Session Cart (selected services builder)
  let sessionCart = [];

  // Active Multi-step booking modal tracking
  let currentStep = 1;
  let preSelectedServices = [];

  // ==========================================
  // 3. UI VIEW ROUTER / SPA SWITCHING
  // ==========================================

  const views = {
    home: document.getElementById('homeView'),
    services: document.getElementById('servicesView'),
    packages: document.getElementById('packagesView'),
    gallery: document.getElementById('galleryView'),
    tracker: document.getElementById('trackerView'),
    admin: document.getElementById('adminView')
  };

  const navLinks = document.querySelectorAll('[data-view-target]');
  const navMenu = document.getElementById('navMenu');
  const menuToggle = document.getElementById('menuToggle');

  // Toggle View Handler
  function navigateToView(viewId) {
    // Hide all views, activate target
    Object.keys(views).forEach(key => {
      if (views[key]) {
        views[key].classList.remove('active-view');
      }
    });

    if (views[viewId]) {
      views[viewId].classList.add('active-view');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update Nav bar highlights
    navLinks.forEach(link => {
      if (link.getAttribute('data-view-target') === viewId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile drawer if open
    navMenu.classList.remove('open');

    // Extra View-Specific Triggers
    if (viewId === 'admin') {
      renderAdminDashboard();
    }
  }

  // Add click listeners to nav routing
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('data-view-target');
      navigateToView(target);
    });
  });

  // Mobile Menu Hamburger Toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Hero CTAs Routing
  const heroBookCTA = document.getElementById('heroBookCTA');
  const heroCatalogCTA = document.getElementById('heroCatalogCTA');
  const headerBookBtn = document.getElementById('headerBookBtn');

  if (heroBookCTA) heroBookCTA.addEventListener('click', () => openBookingModal());
  if (headerBookBtn) headerBookBtn.addEventListener('click', () => openBookingModal());
  if (heroCatalogCTA) heroCatalogCTA.addEventListener('click', () => navigateToView('services'));

  const footerBrandLogo = document.querySelector('footer .logo-wrap');
  if (footerBrandLogo) {
    footerBrandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToView('home');
    });
  }

  // ==========================================
  // 4. RENDER CATALOGS (SERVICES & PACKAGES)
  // ==========================================

  const servicesGrid = document.getElementById('servicesGrid');
  const serviceTabs = document.getElementById('serviceTabs');

  // Render Service cards based on filter category
  function renderServices(categoryFilter = 'all') {
    if (!servicesGrid) return;
    servicesGrid.innerHTML = '';

    const filtered = categoryFilter === 'all' 
      ? SERVICES 
      : SERVICES.filter(s => s.category === categoryFilter);

    filtered.forEach(srv => {
      const isAdded = sessionCart.includes(srv.id);
      const card = document.createElement('div');
      card.className = 'glass-panel service-card';
      
      card.innerHTML = `
        <div class="service-header-wrap">
          <div>
            <h3 class="service-title">${srv.name}</h3>
            <span class="service-tag">${srv.category}</span>
          </div>
          <span class="service-price">${srv.priceText}</span>
        </div>
        <p class="service-desc">${srv.desc}</p>
        <div class="service-meta">
          <div class="service-meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>${srv.duration}</span>
          </div>
          <div class="service-meta-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            <span>Hygienic Standard</span>
          </div>
        </div>
        <div class="service-actions">
          <button class="btn btn-gold service-btn-full" data-book-direct="${srv.id}">Book Now</button>
          <button class="btn btn-outline btn-sm ${isAdded ? 'btn-gold' : ''}" data-plan-toggle="${srv.id}">
            ${isAdded ? 'Added to Plan' : 'Add to Plan'}
          </button>
          <a href="https://wa.me/${WHATSAPP_PHONE}?text=Hello%20Elevator%20Concepts%20Saloon,%20I%20have%20a%20question%20about%20your%20${encodeURIComponent(srv.name)}%20service." target="_blank" class="btn btn-outline btn-sm" style="display:inline-flex; gap:6px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.736.001-2.599-1.01-5.048-2.847-6.886-1.837-1.837-4.29-2.85-6.891-2.851-5.438 0-9.862 4.37-9.865 9.734-.001 1.757.48 3.472 1.393 4.997l-.994 3.633 3.72-.969zm11.387-5.477c-.328-.164-1.939-.956-2.239-1.065-.301-.108-.519-.163-.739.164-.219.328-.849 1.065-1.039 1.284-.19.219-.379.245-.708.081-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.147-.147.328-.382.492-.573.164-.19.219-.327.328-.546.109-.219.055-.409-.027-.573-.082-.164-.739-1.777-1.012-2.433-.266-.64-.539-.553-.739-.563-.19-.009-.409-.011-.627-.011-.219 0-.573.082-.874.409-.301.328-1.147 1.119-1.147 2.727 0 1.608 1.172 3.16 1.336 3.379.164.22 2.307 3.522 5.589 4.939.78.337 1.39.539 1.86.688.784.248 1.497.213 2.06.129.627-.093 1.939-.792 2.213-1.556.274-.764.274-1.419.192-1.556-.081-.137-.301-.219-.628-.383z"/></svg>
            Ask WA
          </a>
        </div>
      `;
      servicesGrid.appendChild(card);
    });

    // Add Direct Book handlers
    document.querySelectorAll('[data-book-direct]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.getAttribute('data-book-direct');
        const srv = SERVICES.find(s => s.id === id);
        if (srv) {
          openBookingModal([srv.name]);
        }
      });
    });

    // Add Plan Toggle handlers
    document.querySelectorAll('[data-plan-toggle]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.getAttribute('data-plan-toggle');
        toggleServiceInCart(id);
      });
    });
  }

  // Filter service tab toggling
  if (serviceTabs) {
    serviceTabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab-btn')) {
        serviceTabs.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        const cat = e.target.getAttribute('data-category');
        renderServices(cat);
      }
    });
  }

  // Render Package list
  const packagesGrid = document.getElementById('packagesGrid');
  function renderPackages() {
    if (!packagesGrid) return;
    packagesGrid.innerHTML = '';

    PACKAGES.forEach(pkg => {
      const card = document.createElement('div');
      card.className = `glass-panel package-card ${pkg.popular ? 'popular' : ''}`;
      
      const featuresHTML = pkg.features.map(feat => `
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
          <span>${feat}</span>
        </li>
      `).join('');

      card.innerHTML = `
        ${pkg.popular ? '<span class="popular-badge">Highly Requested</span>' : ''}
        <h3 class="package-title">${pkg.name}</h3>
        <span style="font-size: 0.8rem; color: var(--text-secondary);">Curated Styling Plan</span>
        <div class="package-price-wrap">
          <span class="package-price">${pkg.priceText}</span>
          <span class="package-duration">/ ${pkg.duration}</span>
        </div>
        <ul class="package-features">
          ${featuresHTML}
        </ul>
        <button class="btn btn-gold" data-book-package="${pkg.name}" style="width: 100%; margin-top: auto;">Book Package CTA</button>
      `;
      packagesGrid.appendChild(card);
    });

    // Add click listeners to book packages
    document.querySelectorAll('[data-book-package]').forEach(btn => {
      btn.addEventListener('click', () => {
        const pkgName = btn.getAttribute('data-book-package');
        openBookingModal([pkgName]);
      });
    });
  }

  // ==========================================
  // 5. SESSION CART & STICKY CTA MANAGEMENT
  // ==========================================

  const mobileStickyCTA = document.getElementById('mobileStickyCTA');
  const stickyCount = document.getElementById('stickyCount');
  const stickyBookBtn = document.getElementById('stickyBookBtn');

  function toggleServiceInCart(srvId) {
    const idx = sessionCart.indexOf(srvId);
    if (idx > -1) {
      sessionCart.splice(idx, 1);
    } else {
      sessionCart.push(srvId);
    }
    
    // Rerender services to update button styles
    const activeTab = serviceTabs ? serviceTabs.querySelector('.tab-btn.active').getAttribute('data-category') : 'all';
    renderServices(activeTab);
    
    // Update sticky cta
    updateStickyCTA();
  }

  function updateStickyCTA() {
    if (!mobileStickyCTA || !stickyCount) return;

    if (sessionCart.length > 0) {
      stickyCount.textContent = `${sessionCart.length} Service${sessionCart.length > 1 ? 's' : ''} in Plan`;
      mobileStickyCTA.classList.add('visible');
    } else {
      mobileStickyCTA.classList.remove('visible');
    }
  }

  if (stickyBookBtn) {
    stickyBookBtn.addEventListener('click', () => {
      // Maps selected session ids to their service names
      const selectedNames = sessionCart.map(id => {
        const srv = SERVICES.find(s => s.id === id);
        return srv ? srv.name : null;
      }).filter(Boolean);

      openBookingModal(selectedNames);
    });
  }

  // ==========================================
  // 6. RENDER GALLERY BENTO GRID
  // ==========================================

  const galleryGrid = document.getElementById('galleryGrid');
  const galleryTabs = document.getElementById('galleryTabs');

  function renderGallery(catFilter = 'all') {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';

    const filtered = catFilter === 'all' 
      ? GALLERY_ITEMS 
      : GALLERY_ITEMS.filter(item => item.cat === catFilter);

    filtered.forEach(item => {
      const gridCard = document.createElement('div');
      gridCard.className = `gallery-item ${item.size === 'col-2' ? 'col-2' : ''} ${item.size === 'row-2' ? 'row-2' : ''}`;
      
      gridCard.innerHTML = `
        <div class="gallery-placeholder-media">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
          <span>Real Media Vault</span>
          <span style="font-size:0.6rem; color:var(--text-muted); opacity: 0.8;">[Placeholder Ready]</span>
        </div>
        <div class="gallery-overlay">
          <span class="gallery-item-cat">${item.tag}</span>
          <h4 class="gallery-item-title">${item.title}</h4>
        </div>
      `;
      galleryGrid.appendChild(gridCard);
    });
  }

  // Gallery tabs filtering listener
  if (galleryTabs) {
    galleryTabs.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab-btn')) {
        galleryTabs.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        const cat = e.target.getAttribute('data-gallery-cat');
        renderGallery(cat);
      }
    });
  }

  // ==========================================
  // 7. MULTI-STEP BOOKING WIZARD CONTROL
  // ==========================================

  const bookingModalOverlay = document.getElementById('bookingModalOverlay');
  const closeBookingModalBtn = document.getElementById('closeBookingModal');
  const prevStepBtn = document.getElementById('prevStepBtn');
  const nextStepBtn = document.getElementById('nextStepBtn');
  
  const stepIndicators = document.querySelectorAll('.step-indicator');
  const stepPanels = document.querySelectorAll('.booking-panel');
  const modalServicePicker = document.getElementById('modalServicePicker');
  const modalTimePicker = document.getElementById('modalTimePicker');

  let selectedTimeSlot = '';

  function openBookingModal(initialServiceNames = []) {
    currentStep = 1;
    preSelectedServices = initialServiceNames;
    selectedTimeSlot = '';

    // Reset Form Fields
    document.getElementById('bookingDate').value = '';
    document.getElementById('clientName').value = '';
    document.getElementById('clientPhone').value = '';
    document.getElementById('clientNotes').value = '';
    
    // Clear time slots highlights
    if (modalTimePicker) {
      modalTimePicker.querySelectorAll('.time-slot-btn').forEach(btn => btn.classList.remove('selected'));
    }

    // Reset step states
    resetModalVisualState();

    // Populate service checkboxes in Step 1
    populateModalServices();

    // Open Modal overlay
    if (bookingModalOverlay) {
      bookingModalOverlay.classList.add('open');
    }
  }

  function closeBookingModal() {
    if (bookingModalOverlay) {
      bookingModalOverlay.classList.remove('open');
    }
    // Clear session cart once booking completes
    sessionCart = [];
    updateStickyCTA();
    renderServices();
  }

  if (closeBookingModalBtn) {
    closeBookingModalBtn.addEventListener('click', closeBookingModal);
  }

  // Render checkboxes inside modal services step
  function populateModalServices() {
    if (!modalServicePicker) return;
    modalServicePicker.innerHTML = '';

    SERVICES.forEach(srv => {
      // Checked if it was preselected (clicked direct book) or present in session plan
      const isSelected = preSelectedServices.includes(srv.name) || sessionCart.includes(srv.id);
      
      const item = document.createElement('div');
      item.className = `picker-item ${isSelected ? 'selected' : ''}`;
      item.setAttribute('data-picker-service-name', srv.name);
      
      item.innerHTML = `
        <div class="picker-checkbox">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <div class="picker-details">
          <div class="picker-name">${srv.name}</div>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top:2px;">${srv.desc}</div>
        </div>
        <span class="picker-price">${srv.priceText}</span>
      `;

      item.addEventListener('click', () => {
        item.classList.toggle('selected');
      });

      modalServicePicker.appendChild(item);
    });

    // Also offer packages as custom selectables if they chose one
    PACKAGES.forEach(pkg => {
      if (preSelectedServices.includes(pkg.name)) {
        const item = document.createElement('div');
        item.className = 'picker-item selected';
        item.setAttribute('data-picker-service-name', pkg.name);
        
        item.innerHTML = `
          <div class="picker-checkbox">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="picker-details">
            <div class="picker-name">${pkg.name} (Curated Bundle)</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top:2px;">Includes: ${pkg.features.join(', ')}</div>
          </div>
          <span class="picker-price">${pkg.priceText}</span>
        `;

        item.addEventListener('click', () => {
          item.classList.toggle('selected');
        });

        modalServicePicker.prepend(item);
      }
    });
  }

  // Time slot buttons handler
  if (modalTimePicker) {
    modalTimePicker.addEventListener('click', (e) => {
      if (e.target.classList.contains('time-slot-btn')) {
        modalTimePicker.querySelectorAll('.time-slot-btn').forEach(btn => btn.classList.remove('selected'));
        e.target.classList.add('selected');
        selectedTimeSlot = e.target.getAttribute('data-time');
      }
    });
  }

  // Get selected services from Step 1 modal view
  function getModalSelectedServices() {
    const list = [];
    if (!modalServicePicker) return list;
    modalServicePicker.querySelectorAll('.picker-item.selected').forEach(item => {
      list.push(item.getAttribute('data-picker-service-name'));
    });
    return list;
  }

  // Reset modal screens to standard step 1
  function resetModalVisualState() {
    // Show back buttons, change next text
    if (prevStepBtn) prevStepBtn.style.visibility = 'hidden';
    if (nextStepBtn) {
      nextStepBtn.textContent = 'Next Step';
      nextStepBtn.className = 'btn btn-gold btn-sm';
    }

    // Toggle panels
    stepPanels.forEach(panel => {
      panel.classList.remove('active');
      if (parseInt(panel.getAttribute('data-step-panel')) === 1) {
        panel.classList.add('active');
      }
    });

    // Toggle indicator dots
    stepIndicators.forEach(ind => {
      ind.classList.remove('active', 'completed');
      const stepVal = parseInt(ind.getAttribute('data-step'));
      if (stepVal === 1) {
        ind.classList.add('active');
      }
    });

    // Hide success sections, show confirm summary block
    document.getElementById('bookingConfirmSummary').style.display = 'block';
    document.getElementById('bookingSuccessSection').style.display = 'none';
    document.getElementById('bookingNavButtons').style.display = 'flex';
    document.getElementById('panel4Title').style.display = 'block';
  }

  // Stepper forward navigation
  function handleNextStep() {
    const selectedSrvs = getModalSelectedServices();

    if (currentStep === 1) {
      if (selectedSrvs.length === 0) {
        alert('Please select at least one beauty or grooming service to proceed.');
        return;
      }
      currentStep = 2;
    } else if (currentStep === 2) {
      const bDate = document.getElementById('bookingDate').value;
      if (!bDate) {
        alert('Please choose a preferred grooming date.');
        return;
      }
      if (!selectedTimeSlot) {
        alert('Please select an available booking time slot.');
        return;
      }
      currentStep = 3;
    } else if (currentStep === 3) {
      const clientName = document.getElementById('clientName').value.trim();
      const clientPhone = document.getElementById('clientPhone').value.trim();
      if (!clientName || !clientPhone) {
        alert('Name and WhatsApp phone number are required for booking coordination.');
        return;
      }
      currentStep = 4;
      prepareConfirmationSummary(selectedSrvs);
    } else if (currentStep === 4) {
      executeFinalSimulatedBooking(selectedSrvs);
      return;
    }

    updateStepVisuals();
  }

  // Stepper backward navigation
  function handlePrevStep() {
    if (currentStep > 1) {
      currentStep--;
      updateStepVisuals();
    }
  }

  function updateStepVisuals() {
    // Show/hide prev button
    if (prevStepBtn) {
      prevStepBtn.style.visibility = currentStep === 1 ? 'hidden' : 'visible';
    }

    // Next button label
    if (nextStepBtn) {
      nextStepBtn.textContent = currentStep === 4 ? 'Generate Preview Slot' : 'Next Step';
    }

    // Toggle panels active classes
    stepPanels.forEach(panel => {
      if (parseInt(panel.getAttribute('data-step-panel')) === currentStep) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });

    // Toggle step header status circles
    stepIndicators.forEach(ind => {
      const stepVal = parseInt(ind.getAttribute('data-step'));
      ind.classList.remove('active', 'completed');
      if (stepVal === currentStep) {
        ind.classList.add('active');
      } else if (stepVal < currentStep) {
        ind.classList.add('completed');
      }
    });
  }

  // Populate Step 4 Review summary fields
  function prepareConfirmationSummary(selectedSrvs) {
    const clientName = document.getElementById('clientName').value.trim();
    const clientPhone = document.getElementById('clientPhone').value.trim();
    const bDate = document.getElementById('bookingDate').value;

    document.getElementById('confirmServices').textContent = selectedSrvs.join(', ');
    document.getElementById('confirmDateTime').textContent = `${bDate} at ${selectedTimeSlot}`;
    document.getElementById('confirmClient').textContent = `${clientName} (${clientPhone})`;
  }

  // Create booking object, write to localStorage, show code
  function executeFinalSimulatedBooking(selectedSrvs) {
    const clientName = document.getElementById('clientName').value.trim();
    const clientPhone = document.getElementById('clientPhone').value.trim();
    const bDate = document.getElementById('bookingDate').value;
    const clientNotes = document.getElementById('clientNotes').value.trim();

    // Generate unique code ELV-XXXX
    const code = `ELV-${Math.floor(1000 + Math.random() * 9000)}`;

    const newBooking = {
      code: code,
      name: clientName,
      phone: clientPhone,
      services: selectedSrvs,
      date: bDate,
      time: selectedTimeSlot,
      notes: clientNotes,
      status: 'Booking Requested',
      timestamp: Date.now()
    };

    // Save database
    bookings.unshift(newBooking);
    localStorage.setItem('elevator_bookings', JSON.stringify(bookings));

    // Show Success block inside modal
    document.getElementById('bookingConfirmSummary').style.display = 'none';
    document.getElementById('panel4Title').style.display = 'none';
    document.getElementById('bookingNavButtons').style.display = 'none';
    
    document.getElementById('successCodeDisplay').textContent = code;
    
    // Compile WhatsApp Message URL
    const waText = `Hello Elevator Concept Unisex Saloon, I just created a preview booking slot! 💇‍♂️✨

*Booking Details:*
• *Code:* ${code}
• *Name:* ${clientName}
• *Phone:* ${clientPhone}
• *Services:* ${selectedSrvs.join(', ')}
• *Schedule:* ${bDate} at ${selectedTimeSlot}
${clientNotes ? `• *Notes:* ${clientNotes}\n` : ''}
Please verify the current pricing sheets and confirm my booking slot. Thank you!`;

    const waLink = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waText)}`;
    
    const waBtn = document.getElementById('modalWhatsAppSendBtn');
    if (waBtn) {
      waBtn.href = waLink;
    }

    document.getElementById('bookingSuccessSection').style.display = 'block';

    // Hook up modal direct track button
    const trackDirectBtn = document.getElementById('modalTrackDirectBtn');
    if (trackDirectBtn) {
      trackDirectBtn.onclick = () => {
        closeBookingModal();
        navigateToView('tracker');
        const trackInput = document.getElementById('trackerCodeInput');
        if (trackInput) {
          trackInput.value = code;
          handleTrackerSearch(code);
        }
      };
    }
  }

  // Stepper Listeners
  if (nextStepBtn) nextStepBtn.addEventListener('click', handleNextStep);
  if (prevStepBtn) prevStepBtn.addEventListener('click', handlePrevStep);

  // ==========================================
  // 8. LIVE PREVIEW TRACKER INTERACTION
  // ==========================================

  const searchTrackerBtn = document.getElementById('searchTrackerBtn');
  const trackerCodeInput = document.getElementById('trackerCodeInput');
  const trackerEmptyState = document.getElementById('trackerEmptyState');
  const trackerResultCard = document.getElementById('trackerResultCard');

  function handleTrackerSearch(codeStr) {
    if (!codeStr) {
      codeStr = trackerCodeInput.value.trim().toUpperCase();
    }
    
    if (!codeStr) {
      alert('Please enter a valid booking code.');
      return;
    }

    const found = bookings.find(b => b.code.toUpperCase() === codeStr.toUpperCase());
    
    if (!found) {
      alert(`Booking code "${codeStr}" was not found on this device database register. Please ensure the code is correct.`);
      return;
    }

    // Populate Results
    if (trackerEmptyState) trackerEmptyState.style.display = 'none';
    if (trackerResultCard) trackerResultCard.style.display = 'block';

    document.getElementById('trackCodeDisplay').textContent = found.code;
    document.getElementById('trackNameDisplay').textContent = found.name;
    document.getElementById('trackServicesDisplay').textContent = found.services.join(', ');
    document.getElementById('trackTimeDisplay').textContent = `${found.date} at ${found.time}`;
    document.getElementById('trackStatusDisplay').textContent = found.status;

    // Direct WA re-send
    const waText = `Hello Elevator Concept Unisex Saloon, checking status for my booking:
• *Code:* ${found.code}
• *Name:* ${found.name}
• *Schedule:* ${found.date} at ${found.time}
• *Current Device Status:* ${found.status}`;
    
    document.getElementById('trackWhatsAppBtn').href = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(waText)}`;

    // Handle progress steps timeline highlights
    const stepsHierarchy = [
      'Booking Requested',
      'Confirmation Pending',
      'Appointment Confirmed',
      'Service Completed',
      'Review Requested'
    ];

    const currentStatusIdx = stepsHierarchy.indexOf(found.status);

    const stepElements = {
      'Booking Requested': document.getElementById('step-requested'),
      'Confirmation Pending': document.getElementById('step-pending'),
      'Appointment Confirmed': document.getElementById('step-confirmed'),
      'Service Completed': document.getElementById('step-completed'),
      'Review Requested': document.getElementById('step-review')
    };

    // Style step nodes
    stepsHierarchy.forEach((stepName, index) => {
      const el = stepElements[stepName];
      if (!el) return;

      el.classList.remove('completed', 'active');
      
      if (index < currentStatusIdx) {
        el.classList.add('completed');
      } else if (index === currentStatusIdx) {
        el.classList.add('active');
      }
    });
  }

  if (searchTrackerBtn) {
    searchTrackerBtn.addEventListener('click', () => handleTrackerSearch());
  }

  if (trackerCodeInput) {
    trackerCodeInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleTrackerSearch();
      }
    });
  }

  // ==========================================
  // 9. CLIENT-SIDE ADMIN PREVIEW DASHBOARD
  // ==========================================

  const adminBookingsBody = document.getElementById('adminBookingsBody');
  const adminTotalBookings = document.getElementById('adminTotalBookings');
  const adminPendingBookings = document.getElementById('adminPendingBookings');
  const adminConfirmedBookings = document.getElementById('adminConfirmedBookings');
  const adminPreviewValue = document.getElementById('adminPreviewValue');
  const adminPerfBars = document.getElementById('adminPerfBars');

  function renderAdminDashboard() {
    if (!adminBookingsBody) return;
    
    // Refresh database array
    bookings = JSON.parse(localStorage.getItem('elevator_bookings')) || DEFAULT_BOOKINGS;

    // 1. Calculate and update stats counters
    adminTotalBookings.textContent = bookings.length;
    
    const pendingCount = bookings.filter(b => b.status === 'Booking Requested' || b.status === 'Confirmation Pending').length;
    adminPendingBookings.textContent = pendingCount;

    const confirmedCount = bookings.filter(b => b.status === 'Appointment Confirmed').length;
    adminConfirmedBookings.textContent = confirmedCount;

    // Total Services Booked (Preview Value estimator counts services)
    let totalServicesCount = 0;
    bookings.forEach(b => {
      totalServicesCount += b.services.length;
    });
    adminPreviewValue.innerHTML = `<span style="font-size:0.8rem; font-weight:normal; display:block; color:var(--text-secondary)">Services Booked</span>${totalServicesCount}`;

    // 2. Render booking table rows
    adminBookingsBody.innerHTML = '';
    
    if (bookings.length === 0) {
      adminBookingsBody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 32px 0;">No active device bookings. Simulate a booking using the "Book Now" CTA!</td>
        </tr>
      `;
      return;
    }

    bookings.forEach(b => {
      const tr = document.createElement('tr');
      
      const selectHTML = `
        <select class="admin-action-select" data-admin-update-code="${b.code}">
          <option value="Booking Requested" ${b.status === 'Booking Requested' ? 'selected' : ''}>1. Booking Requested</option>
          <option value="Confirmation Pending" ${b.status === 'Confirmation Pending' ? 'selected' : ''}>2. Confirmation Pending</option>
          <option value="Appointment Confirmed" ${b.status === 'Appointment Confirmed' ? 'selected' : ''}>3. Appointment Confirmed</option>
          <option value="Service Completed" ${b.status === 'Service Completed' ? 'selected' : ''}>4. Service Completed</option>
          <option value="Review Requested" ${b.status === 'Review Requested' ? 'selected' : ''}>5. Review Requested</option>
        </select>
      `;

      tr.innerHTML = `
        <td><strong style="color:var(--gold-primary); font-family:var(--font-sans); letter-spacing:0.05em;">${b.code}</strong></td>
        <td>
          <div style="font-weight:600; color:var(--text-light);">${b.name}</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${b.phone}</div>
        </td>
        <td>
          <div style="max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${b.services.join(', ')}">
            ${b.services.join(', ')}
          </div>
          ${b.notes ? `<div style="font-size:0.7rem; color:var(--gold-light); font-style:italic; max-width: 200px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Note: "${b.notes}"</div>` : ''}
        </td>
        <td>
          <div style="font-weight:500;">${b.date}</div>
          <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${b.time}</div>
        </td>
        <td>
          ${selectHTML}
        </td>
      `;
      adminBookingsBody.appendChild(tr);
    });

    // Attach Status Update Change listeners to select lists
    document.querySelectorAll('[data-admin-update-code]').forEach(select => {
      select.addEventListener('change', (e) => {
        const code = select.getAttribute('data-admin-update-code');
        const newStatus = e.target.value;
        updateBookingStatusInDashboard(code, newStatus);
      });
    });

    // 3. Render service performance chart
    renderPerformanceChart();
  }

  // Update status in array, save to storage, and live update tracker if open
  function updateBookingStatusInDashboard(code, newStatus) {
    const idx = bookings.findIndex(b => b.code === code);
    if (idx > -1) {
      bookings[idx].status = newStatus;
      localStorage.setItem('elevator_bookings', JSON.stringify(bookings));
      
      // Re-trigger dashboard calculations
      renderAdminDashboard();

      // IF the tracker is currently showing this code, update its visual nodes instantly!
      const currentTrackCode = document.getElementById('trackCodeDisplay').textContent;
      if (currentTrackCode === code) {
        handleTrackerSearch(code);
      }
    }
  }

  // Render simulated charts using flex container width percentages
  function renderPerformanceChart() {
    if (!adminPerfBars) return;
    adminPerfBars.innerHTML = '';

    // Count how many times each category/service gets booked across all registers
    const stats = {};
    SERVICES.forEach(s => {
      stats[s.name] = 0;
    });
    // Add default counters
    stats['Student Fresh-Up Package'] = 0;

    bookings.forEach(b => {
      b.services.forEach(name => {
        if (stats[name] !== undefined) {
          stats[name]++;
        } else {
          stats[name] = 1;
        }
      });
    });

    // Convert to array and sort
    const sortedStats = Object.keys(stats).map(name => {
      return { name: name, count: stats[name] };
    }).sort((a, b) => b.count - a.count);

    // Get max bookings to scale percentages
    const maxVal = Math.max(...sortedStats.map(o => o.count)) || 1;

    // Render bars
    sortedStats.slice(0, 5).forEach(item => {
      const barItem = document.createElement('div');
      barItem.className = 'perf-bar-item';
      
      const widthPct = Math.round((item.count / maxVal) * 100);

      barItem.innerHTML = `
        <div class="perf-bar-info">
          <span class="perf-bar-label">${item.name}</span>
          <span class="perf-bar-val">${item.count} slot${item.count !== 1 ? 's' : ''}</span>
        </div>
        <div class="perf-bar-track">
          <div class="perf-bar-fill" style="width: ${widthPct}%"></div>
        </div>
      `;
      adminPerfBars.appendChild(barItem);
    });
  }

  // ==========================================
  // 10. INITIALIZATION BOOTSTRAP
  // ==========================================

  // Populate active grids
  renderServices();
  renderPackages();
  renderGallery();
  
  // Update sticky cart
  updateStickyCTA();

  // Simple Hash Router for QA & presentation navigation
  function handleHashRoute() {
    const hash = window.location.hash.substring(1);
    if (!hash) return;
    
    if (views[hash]) {
      navigateToView(hash);
    } else if (hash === 'booking-wizard') {
      openBookingModal();
    } else if (hash === 'booking-success') {
      // Pre-seed and complete simulated booking for screenshot
      openBookingModal(['Signature Haircut']);
      executeFinalSimulatedBooking(['Signature Haircut']);
    } else if (hash === 'mobile-sticky') {
      // Simulate service selected in plan
      toggleServiceInCart('srv-sig-cut');
    }
  }

  // Run on load
  handleHashRoute();
  window.addEventListener('hashchange', handleHashRoute);

});
