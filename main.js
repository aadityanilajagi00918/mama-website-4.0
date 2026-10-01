/* ============================================================
   SHARDA DENTAL & HOMOEOPATHY CENTRE — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* --- Utility --- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = () => window.innerWidth <= 1023;
  const qs = (sel, ctx = document) => ctx.querySelector(sel);
  const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  /* ============================================================
     SERVICE DATA (§9)
     ============================================================ */
  const dentalServices = [
    { name: 'Root Canal Treatment', desc: 'Advanced root canal therapy to save damaged teeth and relieve pain with minimal discomfort.', details: 'Our root canal procedures use modern rotary endodontics for faster, more precise treatment. We employ digital imaging for accurate diagnosis and ensure a comfortable experience with local anaesthesia. Single-visit treatment where indicated, using the X-Smart Endomotor (Dentsply), Apex Locator (J. Morita), EndoActivator (Dentsply) and Admetec loupes for magnification.', img: 'svc-s1.jpg' },
    { name: 'Smile Makeover', desc: 'Comprehensive cosmetic dentistry to transform your smile and boost your confidence.', details: 'Smile makeovers combine multiple cosmetic procedures — veneers, whitening, bonding, and contouring — tailored to your facial features and goals. We use digital smile design to preview your results before treatment begins.', img: 'svc-s2.jpg' },
    { name: 'Teeth Filling', desc: 'Durable tooth-coloured fillings to restore teeth damaged by decay or injury.', details: 'We use BPA-free composite resin fillings that match your natural tooth colour. Minimally invasive techniques preserve more healthy tooth structure while providing long-lasting restoration.', img: 'svc-s3.jpg' },
    { name: 'Crown & Bridge Work', desc: 'Custom restorations to replace missing teeth and restore full dental function.', details: 'Precision-crafted crowns and bridges using high-quality ceramic and zirconia materials. Digital impressions ensure exact fit, and our in-house coordination means faster turnaround times.', img: 'svc-s4.jpg' },
    { name: 'Dental Braces', desc: 'Orthodontic solutions for straightening teeth and correcting bite alignment.', details: 'We offer traditional metal braces, ceramic braces, and clear aligner options. Treatment plans are created using 3D scanning and digital planning for predictable, efficient results.', img: 'svc-ss3.jpg' },
    { name: 'Tooth Extraction', desc: 'Gentle extraction services including simple and surgical wisdom tooth removal.', details: 'From simple extractions to complex third molar surgeries, we prioritise your comfort. Sedation options are available for anxious patients, and post-operative care is thoroughly explained.', img: 'svc-s6.jpg' },
    { name: 'Dental Implants', desc: 'Permanent tooth replacement with titanium implants that look and function like natural teeth.', details: 'Implant placement uses 3D CBCT scanning for precise planning. We work with premium-grade titanium implants and coordinate with trusted dental laboratories for custom prosthetics.', img: 'svc-s7.jpg' },
    { name: 'Teeth Cleaning', desc: 'Professional prophylaxis and deep cleaning to maintain optimal oral health.', details: 'Our scaling and polishing procedures remove plaque, tartar, and surface stains. We use ultrasonic scalers for thorough yet gentle cleaning and provide personalised oral hygiene guidance.', img: 'svc-s8.jpg' },
    { name: 'Full Mouth Rehabilitation', desc: 'Comprehensive restoration of all teeth for patients with extensive dental issues.', details: 'A customised treatment plan combining crowns, bridges, implants, and veneers to fully restore function and aesthetics. Each case is meticulously planned using digital smile design and bite analysis.', img: 'svc-s9.jpg' },
    { name: 'Dentures', desc: 'Removable prosthetic solutions for replacing multiple missing teeth comfortably.', details: 'Custom-fitted partial and full dentures using high-quality acrylic and flexible materials. We focus on proper fit, natural appearance, and comfortable bite alignment for everyday function.', img: 'svc-ss4.jpg' },
  ];

  const homoServices = [
    { name: 'Cold', desc: 'Gentle homoeopathic treatment for acute and recurrent cold symptoms.', details: 'Constitutional remedies address the root cause of frequent colds, strengthening your immune response naturally without side effects.', img: 'svc-h1.jpg' },
    { name: 'Cough (Chronic Acute)', desc: 'Effective remedies for both persistent and sudden-onset cough conditions.', details: 'Individualised treatment for dry coughs, wet coughs, and chronic cough patterns. Remedies are selected based on the specific character, timing, and triggers of your cough.', img: 'svc-h2.jpg' },
    { name: 'Asthma', desc: 'Holistic homoeopathic management to reduce frequency and severity of asthma attacks.', details: 'Constitutional homoeopathy aims to address the underlying susceptibility, gradually reducing dependence on acute medications while improving overall respiratory health.', img: 'svc-h3.jpg' },
    { name: 'Skin Diseases', desc: 'Natural treatment for eczema, psoriasis, acne, and other chronic skin conditions.', details: 'We treat skin conditions from the inside out, addressing immune function and individual constitution rather than merely suppressing surface symptoms.', img: 'svc-h4.jpg' },
    { name: 'Arthritis', desc: 'Gentle, side-effect-free homoeopathic care for joint pain and inflammatory conditions.', details: 'Individualised remedies for osteoarthritis, rheumatoid arthritis, and gout. Treatment focuses on reducing inflammation, improving mobility, and enhancing quality of life.', img: 'svc-h5.jpg' },
    { name: 'Mental Health Conditions', desc: 'Supportive homoeopathic care for anxiety, depression, and stress-related conditions.', details: 'Classical homoeopathy offers a gentle, non-habit-forming approach to mental wellness. Treatment considers your emotional, mental, and physical symptoms together for holistic care.', img: 'svc-h6.jpg' },
    { name: 'Renal Stone & Other Issues', desc: 'Natural remedies to support kidney health and manage renal stone conditions.', details: 'Homoeopathic medicines may help reduce the size of small stones and prevent recurrence. Treatment is selected based on the type, location, and associated symptoms of the condition.', img: 'svc-h7.jpg' },
  ];

  /* ============================================================
     FACILITIES DATA (§13) — Updated with real images
     ============================================================ */
  const facilities = [
    { src: 'pic-of-the-building.png', alt: 'Sharda Dental & Homoeopathy Centre building in Ichalkaranji', caption: 'Our clinic' },
    { src: 'pic-of-the-wating-area.png', alt: 'A calm, comfortable waiting area for patients', caption: 'A calm space to wait' },
    { src: 'pic-of-the-dentist-equipment-set-up.png', alt: 'Fully equipped dental treatment room with advanced technology', caption: 'Fully equipped treatment room' },
    { src: 'pic-of-dentist-working-.png', alt: 'Precision in practice — dental procedure in progress', caption: 'Precision, in practice' },
    { src: 'pic-of-reception.png', alt: 'Reception and check-in desk at Sharda clinic', caption: 'Reception & check-in' },
    { src: 'pic-of-homepathic-setup.png', alt: 'Consultation area for homoeopathy treatment', caption: 'Homoeopathy consultation' },
  ];

  /* ============================================================
     DOM READY
     ============================================================ */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    renderServices('dental', dentalServices);
    renderServices('homoeopathy', homoServices);
    renderFacilities();
    initNavigation();
    initServiceTabs();
    initScrollReveal();
    initCountUp();
    initLightbox();
    initAppointmentForm();
    initSmoothScroll();
    initParticles();
    initTilt();
    initMagneticButtons();
    initCardFlip();
    initParallax();
    initHeroCarousel();
    initSectionDividers();
  }

  /* ============================================================
     RENDER SERVICES (§9)
     ============================================================ */
  function renderServices(type, services) {
    const gridId = type === 'dental' ? 'dental-grid' : 'homo-grid';
    const grid = document.getElementById(gridId);
    if (!grid) return;

    grid.innerHTML = services.map((s, i) => `
      <article class="service-card reveal">
        <div class="service-card__img">
          <img src="${s.img}" alt="${s.name} — Sharda Dental & Homoeopathy Centre" loading="lazy" width="400" height="300">
        </div>
        <div class="service-card__body">
          <h3 class="service-card__title">${s.name}</h3>
          <p class="service-card__desc">${s.desc}</p>
          <button class="service-card__cta" aria-expanded="false" aria-controls="details-${type}-${i}">Learn more</button>
          <div class="service-card__details" id="details-${type}-${i}" role="region" aria-label="${s.name} details" hidden>
            <p>${s.details}</p>
          </div>
        </div>
      </article>
    `).join('');

    // Attach expand/collapse
    qsa('.service-card__cta', grid).forEach(btn => {
      btn.addEventListener('click', () => {
        const details = btn.nextElementSibling;
        const isOpen = details.classList.contains('open');
        details.classList.toggle('open');
        details.hidden = isOpen;
        btn.setAttribute('aria-expanded', !isOpen);
        btn.textContent = isOpen ? 'Learn more' : 'Show less';
      });
    });
  }

  /* ============================================================
     RENDER FACILITIES (§13) — Attach event listeners to static HTML
     ============================================================ */
  function renderFacilities() {
    const items = qsa('.facility-item');

    // Click handlers for lightbox
    items.forEach(item => {
      item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index)));
      item.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(parseInt(item.dataset.index));
        }
      });
    });
  }

  /* ============================================================
     NAVIGATION (§8)
     ============================================================ */
  function initNavigation() {
    const header = document.getElementById('site-header');
    const hamburger = document.getElementById('nav-hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = qsa('.mobile-nav__link');
    const navLinks = qsa('.nav__link');
    const backToTop = document.getElementById('back-to-top');

    // Scroll state
    let lastScroll = 0;
    const headerFadeDistance = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 160;
    const fadeHeader = () => {
      const fade = Math.min(window.scrollY / headerFadeDistance, 1);
      header.style.opacity = String(1 - fade);
      if (fade >= 1) {
        header.style.visibility = 'hidden';
        header.style.pointerEvents = 'none';
      } else {
        header.style.visibility = '';
        header.style.pointerEvents = '';
      }
    };
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      fadeHeader();
      if (scrollY > 80) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      // Back to top visibility
      if (backToTop) {
        if (scrollY > 500) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }
      lastScroll = scrollY;
    }, { passive: true });
    fadeHeader();

    // Back to top click
    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
      mobileNav.setAttribute('aria-hidden', expanded);
      document.body.style.overflow = expanded ? '' : 'hidden';
    });

    // Close mobile nav on link click
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      });
    });

    // Active section tracking
    const sections = qsa('section[id]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('nav__link--active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  /* ============================================================
     SERVICE TABS (§9)
     ============================================================ */
  function initServiceTabs() {
    const tabs = qsa('.services__tab');
    const panels = qsa('.services__panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tabs.forEach(t => {
          t.classList.remove('services__tab--active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('services__tab--active');
        tab.setAttribute('aria-selected', 'true');

        panels.forEach(p => {
          const isTarget = p.id === `panel-${target}`;
          p.classList.toggle('services__panel--active', isTarget);
          p.hidden = !isTarget;
        });

        // Re-trigger reveal for newly visible cards
        qsa('.reveal', qs(`#panel-${target}`)).forEach(el => {
          el.classList.remove('visible');
          requestAnimationFrame(() => observeReveal(el));
        });
      });
    });

    // Keyboard navigation for tabs
    tabs.forEach((tab, i) => {
      tab.addEventListener('keydown', e => {
        let idx = i;
        if (e.key === 'ArrowRight') idx = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft') idx = (i - 1 + tabs.length) % tabs.length;
        if (idx !== i) {
          e.preventDefault();
          tabs[idx].focus();
          tabs[idx].click();
        }
      });
    });
  }

  /* ============================================================
     SCROLL REVEAL (§18)
     ============================================================ */
  function initScrollReveal() {
    if (prefersReducedMotion) {
      qsa('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    qsa('.reveal').forEach(el => observer.observe(el));
  }

  function observeReveal(el) {
    if (prefersReducedMotion) {
      el.classList.add('visible');
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    observer.observe(el);
  }

  /* ============================================================
     COUNT-UP ANIMATION (§11)
     ============================================================ */
  function initCountUp() {
    const counters = qsa('.trust-bar__number[data-target]');
    if (!counters.length) return;

    const animate = (el) => {
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const duration = prefersReducedMotion ? 0 : 1800;
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = current.toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }

      if (duration === 0) {
        el.textContent = target.toLocaleString() + suffix;
      } else {
        requestAnimationFrame(update);
      }
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(c => observer.observe(c));
  }

  /* ============================================================
     LIGHTBOX (§13)
     ============================================================ */
  let currentLightboxIndex = 0;
  let lightboxFocusTrap = null;

  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = qs('.lightbox__close');
    const prevBtn = qs('.lightbox__prev');
    const nextBtn = qs('.lightbox__next');

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', () => navigateLightbox(-1));
    nextBtn.addEventListener('click', () => navigateLightbox(1));

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', e => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    });
  }

  function openLightbox(index) {
    currentLightboxIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const f = facilities[index];

    img.src = f.src;
    img.alt = f.alt;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';

    // Focus trap
    lightboxFocusTrap = trapFocus(qs('.lightbox__close'));

    if (!prefersReducedMotion) {
      qs('.lightbox__img').style.opacity = '0';
      qs('.lightbox__img').style.transform = 'scale(0.95)';
      requestAnimationFrame(() => {
        qs('.lightbox__img').style.transition = 'opacity 300ms ease, transform 300ms ease';
        qs('.lightbox__img').style.opacity = '1';
        qs('.lightbox__img').style.transform = 'scale(1)';
      });
    }
  }

  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.hidden = true;
    document.body.style.overflow = '';
    if (lightboxFocusTrap) lightboxFocusTrap();
  }

  function navigateLightbox(dir) {
    currentLightboxIndex = (currentLightboxIndex + dir + facilities.length) % facilities.length;
    const f = facilities[currentLightboxIndex];
    const img = document.getElementById('lightbox-img');
    img.src = f.src;
    img.alt = f.alt;
  }

  function trapFocus(element) {
    const focusable = [element];
    const handler = e => {
      if (e.key !== 'Tab') return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', handler);
    element.focus();
    return () => document.removeEventListener('keydown', handler);
  }

  /* ============================================================
     APPOINTMENT FORM (§12)
     ============================================================ */
  function initAppointmentForm() {
    const form = document.getElementById('appointment-form');
    if (!form) return;

    const specialistSelect = document.getElementById('form-specialist');

    // Pre-fill specialist from team "Book with" buttons
    qsa('.team__book').forEach(btn => {
      btn.addEventListener('click', e => {
        // Let the hash navigation happen, then set the specialist
        setTimeout(() => {
          specialistSelect.value = btn.dataset.specialist === 'dental' ? 'Root Canal Treatment' : 'Cold';
          specialistSelect.focus();
        }, 400);
      });
    });

    // Set minimum date to today
    const dateInput = document.getElementById('form-date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.setAttribute('min', today);
    }

    form.addEventListener('submit', handleSubmit);

    // Live validation
    qsa('.form-input', form).forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) validateField(input);
      });
    });
  }

  function validateField(input) {
    const errorEl = document.getElementById(`${input.id}-error`);
    if (!errorEl) return true;

    let valid = true;
    let message = '';

    if (input.required && !input.value.trim()) {
      valid = false;
      message = 'This field is required';
    } else if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
      valid = false;
      message = 'Please enter a valid email address';
    } else if (input.name === 'mobile' && input.value && !/^[0-9]{10}$/.test(input.value.replace(/\D/g, ''))) {
      valid = false;
      message = 'Please enter a valid 10-digit mobile number';
    }

    input.classList.toggle('error', !valid);
    errorEl.textContent = message;
    errorEl.classList.toggle('visible', !valid);
    input.setAttribute('aria-invalid', !valid);

    return valid;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = document.getElementById('form-submit');
    const successEl = document.getElementById('form-success');
    const errorGlobalEl = document.getElementById('form-error-global');

    // Validate all fields
    let allValid = true;
    qsa('.form-input', form).forEach(input => {
      if (!validateField(input)) allValid = false;
    });

    if (!allValid) {
      // Focus first invalid field
      const firstInvalid = qs('.form-input.error', form);
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Simulate submission (replace with real endpoint)
    submitBtn.classList.add('btn--loading');
    submitBtn.disabled = true;
    successEl.hidden = true;
    errorGlobalEl.hidden = true;

    // Submit via WhatsApp
    const specialist = form.querySelector('[name="specialist"]').value;
    const name = form.querySelector('[name="name"]').value;
    const mobile = form.querySelector('[name="mobile"]').value;
    const email = form.querySelector('[name="email"]').value;
    const dateRaw = form.querySelector('[name="date"]').value;
    const timeRaw = form.querySelector('[name="time"]').value;
    const message = form.querySelector('[name="message"]').value;

    // Date: YYYY-MM-DD -> DD-MM-YYYY
    const date = dateRaw
      ? `${dateRaw.slice(8, 10)}-${dateRaw.slice(5, 7)}-${dateRaw.slice(0, 4)}`
      : '';
    // Time: HH:MM -> h:mm AM/PM
    let time = '';
    if (timeRaw) {
      const [hourStr, minute] = timeRaw.split(':');
      const hour = Number(hourStr);
      const hour12 = hour % 12 || 12;
      time = `${hour12}:${minute} ${hour >= 12 ? 'PM' : 'AM'}`;
    }

    const waMessage = encodeURIComponent(
      `*New Appointment Request*\n\n` +
      `*Specialist:* ${specialist}\n` +
      `*Name:* ${name}\n` +
      `*Mobile:* ${mobile}\n` +
      `*Email:* ${email || 'Not provided'}\n` +
      `*Preferred Date:* ${date}\n` +
      `*Preferred Time:* ${time}\n` +
      `*Message:* ${message || 'None'}`
    );

    // Open WhatsApp in a new tab (noopener); fall back to this tab if popup is blocked
    const url = `https://wa.me/919823192716?text=${waMessage}`;
    const popup = window.open('', '_blank');
    if (popup) {
      popup.opener = null;
      popup.location.href = url;
    } else {
      location.href = url;
    }

    // Show success
    submitBtn.classList.remove('btn--loading');
    submitBtn.disabled = false;
    form.reset();
    successEl.hidden = false;
    errorGlobalEl.hidden = true;
    successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => { successEl.hidden = true; }, 8000);
  }

  /* ============================================================
     SMOOTH SCROLL
     ============================================================ */
  function initSmoothScroll() {
    qsa('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
        }
      });
    });
  }

  /* ============================================================
     LIVING GRID PARTICLES (§16)
     ============================================================ */
  function initParticles() {
    const canvas = document.getElementById('hero-particles');
    if (!canvas || prefersReducedMotion || isMobile()) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrame;
    let mouseX = 0, mouseY = 0;
    let heroVisible = true;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Create particles — grid-aligned near top, organic scatter below
    const count = Math.min(90, Math.floor(canvas.width * canvas.height / 15000));
    for (let i = 0; i < count; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const gridBias = y / canvas.height; // 0 = top, 1 = bottom

      // Near top: snap to grid. Near bottom: free scatter
      let px, py;
      if (gridBias < 0.4) {
        const gridSize = 60;
        const row = Math.floor(y / gridSize);
        const col = Math.floor(x / gridSize);
        px = col * gridSize + gridSize / 2 + (Math.random() - 0.5) * 20;
        py = row * gridSize + gridSize / 2 + (Math.random() - 0.5) * 20;
      } else {
        px = x;
        py = y;
      }

      particles.push({
        x: px,
        y: py,
        baseX: px,
        baseY: py,
        size: 1 + Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: 0.15 + Math.random() * 0.25,
      });
    }

    // Mouse parallax (capped at 8px)
    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    });

    // Pause when hero scrolls out of view
    const heroObserver = new IntersectionObserver(entries => {
      heroVisible = entries[0].isIntersecting;
      if (heroVisible && !animFrame) animate();
    }, { threshold: 0 });
    heroObserver.observe(document.getElementById('hero'));

    function animate() {
      if (!heroVisible) {
        animFrame = null;
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Drift back toward base position
        p.x += (p.baseX - p.x) * 0.002;
        p.y += (p.baseY - p.y) * 0.002;

        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const drawX = p.x + mouseX;
        const drawY = p.y + mouseY;

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
      });

      // Draw subtle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x + mouseX, particles[i].y + mouseY);
            ctx.lineTo(particles[j].x + mouseX, particles[j].y + mouseY);
            ctx.strokeStyle = `rgba(255,255,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrame = requestAnimationFrame(animate);
    }

    animate();
  }

  /* ============================================================
     PHASE 1: 3D MICRO-INTERACTIONS
     ============================================================ */

  /* --- Cursor-tilt cards --- */
  function initTilt() {
    if (!window.matchMedia('(pointer: fine)').matches || prefersReducedMotion) return;
    const selectors = ['.team__card', '.service-card', '.affiliations__item'];
    selectors.forEach(sel => {
      qsa(sel).forEach(card => {
        card.style.transition = 'transform 0.15s ease-out';
        card.addEventListener('mousemove', e => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(800px) rotateY(${px * 14}deg) rotateX(${-py * 14}deg)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    });
  }

  /* --- Magnetic CTA buttons --- */
  function initMagneticButtons() {
    if (!window.matchMedia('(pointer: fine)').matches || prefersReducedMotion) return;
    qsa('.btn--primary, .btn--lg').forEach(btn => {
      btn.style.transition = 'transform 0.3s ease-out';
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        btn.style.transform = `translate(${px * 12}px, ${py * 12}px)`;
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  /* --- 3D flip on service card "Learn more" --- */
  function initCardFlip() {
    if (!window.matchMedia('(pointer: fine)').matches || prefersReducedMotion) return;

    // Add .card-inner wrapper and .service-card--flip class to service cards
    qsa('.service-card').forEach(card => {
      const body = card.querySelector('.service-card__body');
      const title = body.querySelector('.service-card__title');
      const desc = body.querySelector('.service-card__desc');
      const cta = body.querySelector('.service-card__cta');
      const details = body.querySelector('.service-card__details');

      if (!details) return;

      // Create inner wrapper
      const inner = document.createElement('div');
      inner.className = 'card-inner';

      // Create front face
      const front = document.createElement('div');
      front.className = 'card-front';
      front.appendChild(title.cloneNode(true));
      front.appendChild(desc.cloneNode(true));
      front.appendChild(cta.cloneNode(true));

      // Create back face
      const back = document.createElement('div');
      back.className = 'card-back';
      back.innerHTML = `<h3 class="card-back__title">${title.textContent}</h3><div class="card-back__content">${details.innerHTML}</div><button class="card-back__close" aria-label="Close details">&times;</button>`;

      inner.appendChild(front);
      inner.appendChild(back);

      // Replace body content
      body.innerHTML = '';
      body.appendChild(inner);

      // Add flip class to card
      card.classList.add('service-card--flip');

      // Flip on "Learn more" click
      const flipCta = front.querySelector('.service-card__cta');
      flipCta.addEventListener('click', (e) => {
        e.preventDefault();
        card.classList.add('flipped');
        back.setAttribute('aria-hidden', 'false');
        front.setAttribute('aria-hidden', 'true');
        back.querySelector('.card-back__close').focus();
      });

      // Unflip on close
      back.querySelector('.card-back__close').addEventListener('click', () => {
        card.classList.remove('flipped');
        front.setAttribute('aria-hidden', 'false');
        back.setAttribute('aria-hidden', 'true');
        flipCta.focus();
      });

      // Unflip on Escape
      back.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          card.classList.remove('flipped');
          front.setAttribute('aria-hidden', 'false');
          back.setAttribute('aria-hidden', 'true');
          flipCta.focus();
        }
      });

      // Initial a11y state
      front.setAttribute('aria-hidden', 'false');
      back.setAttribute('aria-hidden', 'true');
    });
  }

  /* ============================================================
     PHASE 2: SCROLL-DRIVEN DEPTH
     ============================================================ */

  /* --- Parallax hero image --- */
  function initParallax() {
    if (prefersReducedMotion) return;
    const heroSlides = document.querySelector('.hero__slides');
    const hero = document.getElementById('hero');
    if (!heroSlides || !hero) return;

    let ticking = false;
    let active = true;

    function onScroll() {
      if (!active) return;
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = window.innerHeight;
          if (scrollY < maxScroll) {
            heroSlides.style.transform = `translateY(${scrollY * 0.15}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Pause when hero scrolls out of view (same pattern as initParticles)
    const heroObserver = new IntersectionObserver(entries => {
      active = entries[0].isIntersecting;
      if (active) onScroll();
    }, { threshold: 0 });
    heroObserver.observe(hero);
  }

  /* --- Hero carousel --- */
  function initHeroCarousel() {
    const region = qs('#hero-slides');
    const hero = qs('#hero');
    if (!region || !hero) return;

    const slides = qsa('.hero__slide', region);
    if (slides.length < 2) return;

    const prevBtn = qs('[data-hero="prev"]', hero);
    const nextBtn = qs('[data-hero="next"]', hero);
    const toggleBtn = qs('[data-hero="toggle"]', hero);
    const dots = qsa('[data-hero="dot"]', hero);
    const caption = qs('.hero__caption');
    const INTERVAL = 5000;

    let index = 0;
    let timer = null;
    let hiddenPaused = document.hidden;
    let offscreenPaused = false;
    let userPaused = prefersReducedMotion;
    let swipeStart = null;

    const autoplayAllowed = () =>
      !prefersReducedMotion && !userPaused && !hiddenPaused && !offscreenPaused;

    function start() {
      stop();
      timer = window.setInterval(() => goTo(index + 1), INTERVAL);
    }

    function stop() {
      if (timer !== null) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function sync() {
      if (toggleBtn && !prefersReducedMotion) {
        toggleBtn.classList.toggle('is-paused', userPaused);
        toggleBtn.setAttribute('aria-label', userPaused ? 'Play slideshow' : 'Pause slideshow');
      }
      region.setAttribute('aria-live', autoplayAllowed() ? 'off' : 'polite');
      if (autoplayAllowed()) start();
      else stop();
    }

    function goTo(next) {
      const target = (next + slides.length) % slides.length;
      if (target === index) return;
      slides[index].classList.remove('is-active');
      slides[index].setAttribute('aria-hidden', 'true');
      index = target;
      slides[index].classList.add('is-active');
      slides[index].setAttribute('aria-hidden', 'false');
      dots.forEach((d, i) => d.setAttribute('aria-current', i === index ? 'true' : 'false'));
      if (caption) {
        const show = caption.dataset.slide === String(index);
        caption.classList.toggle('is-visible', show);
        caption.setAttribute('aria-hidden', show ? 'false' : 'true');
      }
      if (autoplayAllowed()) start();
    }

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(index - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(index + 1));
    if (toggleBtn) {
      toggleBtn.hidden = prefersReducedMotion;
      toggleBtn.addEventListener('click', () => {
        userPaused = !userPaused;
        sync();
      });
    }
    dots.forEach(d => d.addEventListener('click', () => goTo(Number(d.dataset.index))));

    document.addEventListener('visibilitychange', () => {
      hiddenPaused = document.hidden;
      sync();
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        offscreenPaused = !entries[0].isIntersecting;
        sync();
      }, { threshold: 0 });
      observer.observe(hero);
    }

    hero.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
    });

    hero.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse') return;
      if (e.target.closest('a, button')) return;
      swipeStart = { x: e.clientX, y: e.clientY };
    });
    hero.addEventListener('pointerup', e => {
      if (!swipeStart) return;
      const dx = e.clientX - swipeStart.x;
      const dy = e.clientY - swipeStart.y;
      swipeStart = null;
      if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy)) {
        goTo(dx < 0 ? index + 1 : index - 1);
      }
    });
    hero.addEventListener('pointercancel', () => { swipeStart = null; });

    sync();
  }

  /* --- Section dividers --- */
  function initSectionDividers() {
    const dividerSVG = `<svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--canvas)"/></svg>`;
    const dividerDarkSVG = `<svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--ember)"/></svg>`;
    const dividerTeintSVG = `<svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--brand-teal-tint)"/></svg>`;

    // Add dividers between hero and trust-bar
    const trustBar = document.querySelector('.trust-bar');
    if (trustBar) {
      const d = document.createElement('div');
      d.className = 'section-divider section-divider--bottom';
      d.innerHTML = dividerSVG;
      trustBar.prepend(d);
    }

    // Add divider before team section (teal bg)
    const team = document.querySelector('.team');
    if (team) {
      const d = document.createElement('div');
      d.className = 'section-divider section-divider--top';
      d.innerHTML = dividerTeintSVG;
      team.prepend(d);
    }

    // Add divider after team section
    if (team) {
      const d = document.createElement('div');
      d.className = 'section-divider section-divider--bottom';
      d.innerHTML = dividerTeintSVG;
      team.appendChild(d);
    }

    // Add divider before emergency section (dark bg)
    const emergency = document.querySelector('.emergency');
    if (emergency) {
      const d = document.createElement('div');
      d.className = 'section-divider section-divider--top';
      d.innerHTML = dividerDarkSVG;
      emergency.prepend(d);
    }

    // Add divider after emergency section
    if (emergency) {
      const d = document.createElement('div');
      d.className = 'section-divider section-divider--bottom';
      d.innerHTML = dividerDarkSVG;
      emergency.appendChild(d);
    }

    // Add divider before affiliations (teal bg)
    const affiliations = document.querySelector('.affiliations');
    if (affiliations) {
      const d = document.createElement('div');
      d.className = 'section-divider section-divider--top';
      d.innerHTML = dividerTeintSVG;
      affiliations.prepend(d);
    }
  }

})();
