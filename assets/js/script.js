/* ========================================================
   BIRTHDAY POSTER & CARD GENERATOR — SCRIPT.JS
   Vanilla JS (ES6) · Premium UI/UX & Motion
   Connected to Random Shayari System (shayari.js)
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── DOM References ──────────────────────────────────── */
  const form                 = document.getElementById('birthday-form');
  const loginPage            = document.getElementById('login-page');
  const resultsPage          = document.getElementById('results-page');
  const cardsGrid            = document.getElementById('cards-grid');
  const chipsGroup           = document.getElementById('chips-group');
  const cardCountInput       = document.getElementById('card-count');
  const toast                = document.getElementById('toast');
  const toastMessage         = document.getElementById('toast-message');
  const loadingOverlay       = document.getElementById('loading-overlay');
  const btnCopyLink          = document.getElementById('btn-copy-link');
  const btnNewCard           = document.getElementById('btn-new-card');
  const btnRandomizeShayari  = document.getElementById('btn-randomize-shayari');

  // Display fields
  const recipientDisplay = document.getElementById('recipient-display');
  const ageDisplay       = document.getElementById('age-display');
  const dateDisplay      = document.getElementById('date-display');

  /* ========================================================
     BACKGROUND PARTICLES CANVAS (Layer 4)
     ======================================================== */
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.color = ['#38BDF8', '#A78BFA', '#F472B6', '#FBBF24'][Math.floor(Math.random() * 4)];
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.color;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    }
  }

  const particleCount = Math.min(Math.floor(window.innerWidth / 20), 50);
  const particles = Array.from({ length: particleCount }, () => new Particle());

  function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  /* ========================================================
     CONFETTI ENGINE (30-50 Particles)
     ======================================================== */
  function triggerConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    const colors = ['#38BDF8', '#A78BFA', '#F472B6', '#FBBF24', '#34D399', '#F97316'];
    const count = 40;

    for (let i = 0; i < count; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.width = `${Math.random() * 8 + 6}px`;
      piece.style.height = `${Math.random() * 8 + 6}px`;
      piece.style.animationDuration = `${Math.random() * 2 + 2.5}s`;
      piece.style.animationDelay = `${Math.random() * 0.4}s`;
      container.appendChild(piece);
    }

    setTimeout(() => {
      container.innerHTML = '';
    }, 5000);
  }

  /* ========================================================
     SELECTABLE CHIPS
     ======================================================== */
  chipsGroup.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chipsGroup.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      cardCountInput.value = chip.getAttribute('data-value');
    });
  });

  /* ========================================================
     TOAST SYSTEM
     ======================================================== */
  let toastTimer;
  function showToast(msg) {
    toastMessage.textContent = msg;
    toast.classList.add('visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 3000);
  }

  /* ========================================================
     CARD TEMPLATES DEFINITION (8 Luxury Metallic Cards)
     ======================================================== */
  const cardTemplates = [
    {
      id: 1,
      type: 'hero',
      tag: 'Card 1 · Hero Poster',
      tagClass: 'card-tag--hero',
      stripeClass: 'card-accent-stripe--cyan',
      svgIcon: 'assets/svg/crown.svg',
      category: 'Dua',
      getFrontTitle: (name, age) => `${name} turns ${age}!`,
      getFrontSubtitle: (name, age, date) => `Celebrating an extraordinary milestone on ${date}. A legacy of excellence, style, and unmatched brilliance.`,
      getBackTitle: () => `The Milestone Legacy`,
    },
    {
      id: 2,
      type: 'heartfelt',
      tag: 'Card 2 · Heartfelt Wishes',
      tagClass: 'card-tag--heart',
      stripeClass: 'card-accent-stripe--pink',
      svgIcon: 'assets/svg/heart.svg',
      category: 'Mohabbat',
      getFrontTitle: (name) => `Warmest Wishes for ${name}`,
      getFrontSubtitle: () => `May your day be filled with quiet joy, genuine laughter, and the warmth of those who cherish you most.`,
      getBackTitle: () => `A Heartfelt Note`,
    },
    {
      id: 3,
      type: 'hindi',
      tag: 'Card 3 · Hindi Shayari',
      tagClass: 'card-tag--hindi',
      stripeClass: 'card-accent-stripe--gold',
      svgIcon: 'assets/svg/feather.svg',
      category: 'Dosti',
      getFrontTitle: (name) => `जन्मदिन मुबारक ${name}`,
      getFrontSubtitle: () => `दुआ है कि कामयाबी आपके कदम चूमे और खुशियां सदा आपके आंगन में रहे।`,
      getBackTitle: () => `विशेष हिंदी शायरी`,
    },
    {
      id: 4,
      type: 'hinglish',
      tag: 'Card 4 · Hinglish Shayari',
      tagClass: 'card-tag--hinglish',
      stripeClass: 'card-accent-stripe--purple',
      svgIcon: 'assets/svg/sparkle.svg',
      category: 'Special',
      getFrontTitle: (name) => `Happy B'day ${name}!`,
      getFrontSubtitle: () => `Khushiyon ka fever, success ka dose — May your year be completely epic!`,
      getBackTitle: () => `Special Vibes For You`,
    },
    {
      id: 5,
      type: 'funny',
      tag: 'Card 5 · Funny Birthday',
      tagClass: 'card-tag--funny',
      stripeClass: 'card-accent-stripe--green',
      svgIcon: 'assets/svg/laughing.svg',
      category: 'Mazaak',
      getFrontTitle: (name, age) => `${name} is ${age} & Vintage!`,
      getFrontSubtitle: () => `Another year older, wiser... or at least better at pretending to be an adult.`,
      getBackTitle: () => `Official Age Notice`,
    },
    {
      id: 6,
      type: 'motivational',
      tag: 'Card 6 · Motivational',
      tagClass: 'card-tag--motivational',
      stripeClass: 'card-accent-stripe--cyan',
      svgIcon: 'assets/svg/rocket.svg',
      category: 'Blessings',
      getFrontTitle: (name) => `Rise & Conquer, ${name}`,
      getFrontSubtitle: (name, age) => `Year ${age} is not just another year—it is your next massive launchpad.`,
      getBackTitle: () => `The Horizon Awaits`,
    },
    {
      id: 7,
      type: 'royal',
      tag: 'Card 7 · Royal Theme',
      tagClass: 'card-tag--royal',
      stripeClass: 'card-accent-stripe--gold',
      svgIcon: 'assets/svg/royal-crest.svg',
      category: 'Dua',
      getFrontTitle: (name) => `Royal Salute to ${name}`,
      getFrontSubtitle: () => `Commanding respect, grace, and elegance in every endeavor.`,
      getBackTitle: () => `By Royal Decree`,
    },
    {
      id: 8,
      type: 'luxury',
      tag: 'Card 8 · Luxury Theme',
      tagClass: 'card-tag--luxury',
      stripeClass: 'card-accent-stripe--pink',
      svgIcon: 'assets/svg/diamond.svg',
      category: 'Special',
      getFrontTitle: (name) => `${name} · Rare & Luminous`,
      getFrontSubtitle: () => `Crafted like fine diamond cut work—unrivaled, timeless, and pristine.`,
      getBackTitle: () => `Exquisite Celebration`,
    }
  ];

  /* ========================================================
     DATE FORMATTER
     ======================================================== */
  function formatDate(dateStr) {
    if (!dateStr) return 'Today';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
    if (isNaN(dateObj.getTime())) return dateStr;
    return dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  }

  /* ========================================================
     RENDER CARDS GENERATOR (RANDOM SHAYARI CONNECTED)
     ======================================================== */
  function generateCards(data) {
    const { name, gender, age, date, count } = data;
    const formattedDate = formatDate(date);
    const numCards = parseInt(count, 10) || 4;

    // Display Header Text
    recipientDisplay.textContent = name;
    ageDisplay.textContent = age;
    dateDisplay.textContent = formattedDate;

    // Clear old cards
    cardsGrid.innerHTML = '';

    // Pick requested number of templates (4 to 8)
    const selectedTemplates = cardTemplates.slice(0, numCards);

    selectedTemplates.forEach(tpl => {
      const cardEl = document.createElement('div');
      cardEl.className = 'metal-card';

      const frontTitle = tpl.getFrontTitle(name, age);
      const frontSub   = tpl.getFrontSubtitle(name, age, formattedDate);
      
      // Fetch dynamic random shayari from shayari.js
      let backTitle = tpl.getBackTitle();
      let backMsgText = "";

      if (typeof getRandomShayari === 'function') {
        const shayariObj = getRandomShayari(tpl.category);
        if (shayariObj) {
          if (shayariObj.wish) backTitle = shayariObj.wish;
          backMsgText = shayariObj.text;
        }
      }

      // Fallback if shayari function is unavailable
      if (!backMsgText) {
        backMsgText = `To ${name}: May your ${age}th year bring endless happiness, health, and unmatched success!`;
      }

      const backMsgFormatted = backMsgText.replace(/\n/g, '<br>');

      cardEl.innerHTML = `
        <div class="metal-card__inner">
          <!-- Front Face -->
          <div class="metal-card__face metal-card__face--front">
            <div class="card-accent-stripe ${tpl.stripeClass}"></div>
            <div class="card-tag ${tpl.tagClass}">${tpl.tag}</div>
            <img src="${tpl.svgIcon}" class="card-front__svg-icon" alt="card icon" />
            <h3 class="card-front__title">${frontTitle}</h3>
            <p class="card-front__subtitle">${frontSub}</p>
            <div class="card-front__footer">
              <span class="card-front__date">${formattedDate}</span>
              <span class="card-front__flip-hint">Flip card ↺</span>
            </div>
          </div>

          <!-- Back Face -->
          <div class="metal-card__face metal-card__face--back">
            <div class="card-accent-stripe ${tpl.stripeClass}"></div>
            <div class="card-tag ${tpl.tagClass}">${tpl.tag}</div>
            <h4 class="card-back__title">${backTitle}</h4>
            <p class="card-back__message">${backMsgFormatted}</p>
            <div class="card-back__divider"></div>
            <div class="card-back__from">Crafted with ♥ for ${name}</div>
            <button class="card-shuffle-btn" type="button">🔀 New Shayari</button>
            <span class="card-back__flip-hint">Flip back ↺</span>
          </div>
        </div>
      `;

      // 3D Flip Card Handler
      cardEl.addEventListener('click', (e) => {
        // Ignore flip if shuffle button was clicked
        if (e.target.closest('.card-shuffle-btn')) return;

        const isFlipped = cardEl.classList.contains('flipped');

        // Close ALL other flipped cards so only one card remains flipped!
        document.querySelectorAll('.metal-card.flipped').forEach(otherCard => {
          if (otherCard !== cardEl) {
            otherCard.classList.remove('flipped');
          }
        });

        // Toggle current card
        cardEl.classList.toggle('flipped');

        // Trigger subtle confetti on flip
        if (!isFlipped) {
          triggerConfetti();
        }
      });

      // Individual Card Shuffle Button Handler
      const shuffleBtn = cardEl.querySelector('.card-shuffle-btn');
      if (shuffleBtn) {
        shuffleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (typeof getRandomShayari === 'function') {
            const newShayari = getRandomShayari();
            const msgEl = cardEl.querySelector('.card-back__message');
            const titleEl = cardEl.querySelector('.card-back__title');
            
            if (msgEl) {
              msgEl.style.opacity = '0';
              msgEl.style.transform = 'translateY(6px)';

              setTimeout(() => {
                if (newShayari.wish && titleEl) titleEl.textContent = newShayari.wish;
                msgEl.innerHTML = newShayari.text.replace(/\n/g, '<br>');
                msgEl.style.transition = 'all 0.3s ease';
                msgEl.style.opacity = '1';
                msgEl.style.transform = 'translateY(0)';
                showToast('Connected new random shayari to poster! ✨');
                triggerConfetti();
              }, 200);
            }
          }
        });
      }

      cardsGrid.appendChild(cardEl);
    });

    // Show Results View with loading transition
    loadingOverlay.classList.add('visible');
    setTimeout(() => {
      loginPage.style.display = 'none';
      resultsPage.classList.add('visible');
      loadingOverlay.classList.remove('visible');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      triggerConfetti();
    }, 600);
  }

  /* ========================================================
     URL PARAMETER SYSTEM
     ======================================================== */
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('name') && params.has('age')) {
      return {
        name: params.get('name'),
        gender: params.get('gender') || 'Male',
        age: params.get('age'),
        date: params.get('date') || new Date().toISOString().split('T')[0],
        count: params.get('count') || '4'
      };
    }
    return null;
  }

  function setQueryParams(data) {
    const params = new URLSearchParams();
    params.set('name', data.name);
    params.set('gender', data.gender);
    params.set('age', data.age);
    params.set('date', data.date);
    params.set('count', data.count);

    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState(data, '', newUrl);
  }

  // On initial page load: check URL params
  const urlData = getQueryParams();
  if (urlData) {
    document.getElementById('name').value = urlData.name;
    document.getElementById('age').value = urlData.age;
    document.getElementById('date').value = urlData.date;
    cardCountInput.value = urlData.count;

    chipsGroup.querySelectorAll('.chip').forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-value') === urlData.count);
    });

    generateCards(urlData);
  }

  /* ========================================================
     FORM SUBMISSION HANDLER
     ======================================================== */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const age = document.getElementById('age').value;
    const date = document.getElementById('date').value;
    const count = cardCountInput.value;

    if (!name || !age || !date) {
      showToast('Please fill in all details');
      return;
    }

    const formData = { name, gender, age, date, count };

    setQueryParams(formData);
    generateCards(formData);
  });

  /* ========================================================
     ACTION BUTTONS HANDLERS
     ======================================================== */
  if (btnRandomizeShayari) {
    btnRandomizeShayari.addEventListener('click', () => {
      const name = recipientDisplay.textContent || 'Friend';
      const age = ageDisplay.textContent || '25';
      const date = document.getElementById('date').value || new Date().toISOString().split('T')[0];
      const gender = document.querySelector('input[name="gender"]:checked')?.value || 'Male';
      const count = cardCountInput.value || '4';

      generateCards({ name, gender, age, date, count });
      showToast('🔀 Connected fresh random shayaris to posters!');
    });
  }

  btnCopyLink.addEventListener('click', () => {
    const shareableUrl = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(shareableUrl).then(() => {
        showToast('Shareable link copied to clipboard! 📋');
      }).catch(() => {
        fallbackCopyText(shareableUrl);
      });
    } else {
      fallbackCopyText(shareableUrl);
    }
  });

  function fallbackCopyText(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast('Shareable link copied to clipboard! 📋');
  }

  btnNewCard.addEventListener('click', () => {
    window.history.pushState({}, '', window.location.pathname);
    resultsPage.classList.remove('visible');
    loginPage.style.display = 'flex';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Default date
  const dateInput = document.getElementById('date');
  if (!dateInput.value) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
  }
});
