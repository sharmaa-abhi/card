/* ========================================================
   BIRTHDAY POSTER & CARD GENERATOR — SCRIPT.JS
   Vanilla JS (ES6) · Premium UI/UX & Motion
   ======================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ── DOM References ──────────────────────────────────── */
  const form            = document.getElementById('birthday-form');
  const loginPage       = document.getElementById('login-page');
  const resultsPage     = document.getElementById('results-page');
  const cardsGrid       = document.getElementById('cards-grid');
  const chipsGroup      = document.getElementById('chips-group');
  const cardCountInput  = document.getElementById('card-count');
  const toast           = document.getElementById('toast');
  const toastMessage    = document.getElementById('toast-message');
  const loadingOverlay  = document.getElementById('loading-overlay');
  const btnCopyLink     = document.getElementById('btn-copy-link');
  const btnNewCard      = document.getElementById('btn-new-card');

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
      getFrontTitle: (name, age) => `${name} turns ${age}!`,
      getFrontSubtitle: (name, age, date) => `Celebrating an extraordinary milestone on ${date}. A legacy of excellence, style, and unmatched brilliance.`,
      getBackTitle: () => `The Milestone Legacy`,
      getBackMessage: (name, age) => `To ${name}, on your ${age}th birthday: May your coming year be as distinguished, bold, and luminous as your spirit. Here is to breaking barriers and defining greatness.`,
    },
    {
      id: 2,
      type: 'heartfelt',
      tag: 'Card 2 · Heartfelt Wishes',
      tagClass: 'card-tag--heart',
      stripeClass: 'card-accent-stripe--pink',
      svgIcon: 'assets/svg/heart.svg',
      getFrontTitle: (name) => `Warmest Wishes for ${name}`,
      getFrontSubtitle: () => `May your day be filled with quiet joy, genuine laughter, and the warmth of those who cherish you most.`,
      getBackTitle: () => `A Heartfelt Note`,
      getBackMessage: (name) => `Wishing ${name} a year rich with happiness, calm moments, and deep connections. Thank you for being a constant light in the lives of everyone around you.`,
    },
    {
      id: 3,
      type: 'hindi',
      tag: 'Card 3 · Hindi Shayari',
      tagClass: 'card-tag--hindi',
      stripeClass: 'card-accent-stripe--gold',
      svgIcon: 'assets/svg/feather.svg',
      getFrontTitle: (name) => `जन्मदिन मुबारक ${name}`,
      getFrontSubtitle: () => `दुआ है कि कामयाबी आपके कदम चूमे और खुशियां सदा आपके आंगन में रहे।`,
      getBackTitle: () => `विशेष शायरी`,
      getBackMessage: (name) => `फूलों की सुगंध से महके आपका जीवन,\nतारों की चमक से रोशन हो हर एक पल।\nजन्मदिन की ढेरों शुभकामनाएं ${name},\nमुस्कुराते रहो तुम हर आज और कल।`,
    },
    {
      id: 4,
      type: 'hinglish',
      tag: 'Card 4 · Hinglish Shayari',
      tagClass: 'card-tag--hinglish',
      stripeClass: 'card-accent-stripe--purple',
      svgIcon: 'assets/svg/sparkle.svg',
      getFrontTitle: (name) => `Happy B'day ${name}!`,
      getFrontSubtitle: () => `Khushiyon ka fever, success ka dose — May your year be completely epic!`,
      getBackTitle: () => `Special Vibes For You`,
      getBackMessage: (name) => `Tere birthday pe yeh wish hai hamari,\nHar din ho super, har raat ho pyari.\nSuccess mile tujhe life mein itni,\nKi Duniya dekhe personality tumhari! Happy Birthday ${name}!`,
    },
    {
      id: 5,
      type: 'funny',
      tag: 'Card 5 · Funny Birthday',
      tagClass: 'card-tag--funny',
      stripeClass: 'card-accent-stripe--green',
      svgIcon: 'assets/svg/laughing.svg',
      getFrontTitle: (name, age) => `${name} is ${age} & Vintage!`,
      getFrontSubtitle: () => `Another year older, wiser... or at least better at pretending to be an adult.`,
      getBackTitle: () => `Official Age Notice`,
      getBackMessage: (name, age) => `Congratulations ${name}! You have officially reached age ${age}, where your back goes out more than you do. Don’t count the candles, just enjoy the cake!`,
    },
    {
      id: 6,
      type: 'motivational',
      tag: 'Card 6 · Motivational',
      tagClass: 'card-tag--motivational',
      stripeClass: 'card-accent-stripe--cyan',
      svgIcon: 'assets/svg/rocket.svg',
      getFrontTitle: (name) => `Rise & Conquer, ${name}`,
      getFrontSubtitle: (name, age) => `Year ${age} is not just another year—it is your next massive launchpad.`,
      getBackTitle: () => `The Horizon Awaits`,
      getBackMessage: (name) => `To ${name}: Greatness isn’t inherited; it’s forged every single day. Embrace the challenges, own your trajectory, and make this chapter your strongest victory yet.`,
    },
    {
      id: 7,
      type: 'royal',
      tag: 'Card 7 · Royal Theme',
      tagClass: 'card-tag--royal',
      stripeClass: 'card-accent-stripe--gold',
      svgIcon: 'assets/svg/royal-crest.svg',
      getFrontTitle: (name) => `Royal Salute to ${name}`,
      getFrontSubtitle: () => `Commanding respect, grace, and elegance in every endeavor.`,
      getBackTitle: () => `By Royal Decree`,
      getBackMessage: (name) => `On this auspicious day, we honor ${name}. May your reign of success continue with sovereign dignity, supreme strength, and unmatched prestige.`,
    },
    {
      id: 8,
      type: 'luxury',
      tag: 'Card 8 · Luxury Theme',
      tagClass: 'card-tag--luxury',
      stripeClass: 'card-accent-stripe--pink',
      svgIcon: 'assets/svg/diamond.svg',
      getFrontTitle: (name) => `${name} · Rare & Luminous`,
      getFrontSubtitle: () => `Crafted like fine diamond cut work—unrivaled, timeless, and pristine.`,
      getBackTitle: () => `Exquisite Celebration`,
      getBackMessage: (name) => `Happy Birthday ${name}. Like the finest matte platinum, your charm and character endure with silent luxury. May this new year bring brilliance to your world.`,
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
     RENDER CARDS GENERATOR
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

      const frontTitle    = tpl.getFrontTitle(name, age);
      const frontSub      = tpl.getFrontSubtitle(name, age, formattedDate);
      const backTitle     = tpl.getBackTitle();
      const backMsg       = tpl.getBackMessage(name, age).replace(/\n/g, '<br>');

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
            <p class="card-back__message">${backMsg}</p>
            <div class="card-back__divider"></div>
            <div class="card-back__from">Crafted with ♥ for ${name}</div>
          </div>
        </div>
      `;

      // 3D Flip Card Handler (Mobile/Tablet/Desktop click)
      cardEl.addEventListener('click', () => {
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
