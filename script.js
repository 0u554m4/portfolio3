    (function() {
      // Translations
      const translations = {
        en: {
          nav: {
            work: "Work",
            skills: "Skills",
            contact: "Contact"
          },
          theme: {
            light: "Light",
            dark: "Dark"
          },
          hero: {
            badge: "frontend developer",
            title1: "crafting",
            title2: "interfaces",
            title3: "that users love",
            description: "I'm Ibrahim — I build fast, responsive, and accessible web experiences with modern HTML, CSS, and JavaScript."
          },
          buttons: {
            github: "GitHub",
            instagram: "Instagram",
            demo: "demo",
            code: "code"
          },
          skills: {
            title: "tech stack & tools"
          },
          projects: {
            title: "selected projects"
          },
          contact: {
            title: "Let's connect",
            subtitle: "Open to freelance or full‑time opportunities"
          },
          footer: {
            built: "built with",
            craft: "for frontend craft"
          }
        },
        fr: {
          nav: {
            work: "Projets",
            skills: "Compétences",
            contact: "Contact"
          },
          theme: {
            light: "Clair",
            dark: "Sombre"
          },
          hero: {
            badge: "développeur frontend",
            title1: "créer des",
            title2: "interfaces",
            title3: "que les utilisateurs adorent",
            description: "Je suis Ibrahim — je construis des expériences web rapides, responsives et accessibles avec HTML, CSS et JavaScript modernes."
          },
          buttons: {
            github: "GitHub",
            instagram: "Instagram",
            demo: "démo",
            code: "code"
          },
          skills: {
            title: "stack technique & outils"
          },
          projects: {
            title: "projets sélectionnés"
          },
          contact: {
            title: "Connectons-nous",
            subtitle: "Ouvert aux opportunités freelance ou CDI"
          },
          footer: {
            built: "construit avec",
            craft: "pour l'art du frontend"
          }
        },
        ar: {
          nav: {
            work: "أعمالي",
            skills: "المهارات",
            contact: "اتصل بي"
          },
          theme: {
            light: "فاتح",
            dark: "داكن"
          },
          hero: {
            badge: "مطور واجهات أمامية",
            title1: "صياغة",
            title2: "واجهات",
            title3: "يحبها المستخدمون",
            description: "أنا إبراهيم — أبني تجارب ويب سريعة ومتجاوبة وسهلة الوصول باستخدام HTML و CSS و JavaScript الحديثة."
          },
          buttons: {
            github: "جيت هاب",
            instagram: "انستغرام",
            demo: "عرض",
            code: "الكود"
          },
          skills: {
            title: "التقنيات والأدوات"
          },
          projects: {
            title: "مشاريع مختارة"
          },
          contact: {
            title: "لنتواصل",
            subtitle: "متاح للعمل الحر أو الدوام الكامل"
          },
          footer: {
            built: "بني بـ",
            craft: "من أجل فن الواجهات"
          }
        }
      };

      // ----- data definitions (frontend developer) -----
      const skills = [
        { name: { en: 'HTML5', fr: 'HTML5', ar: 'إتش تي إم إل 5' }, icon: 'fab fa-html5' },
        { name: { en: 'CSS3', fr: 'CSS3', ar: 'سي إس إس 3' }, icon: 'fab fa-css3-alt' },
        { name: { en: 'JavaScript (ES6+)', fr: 'JavaScript (ES6+)', ar: 'جافا سكريبت (ES6+)' }, icon: 'fab fa-js' },
        { name: { en: 'React', fr: 'React', ar: 'رياكت' }, icon: 'fab fa-react' },
        { name: { en: 'Tailwind', fr: 'Tailwind', ar: 'تيلويند' }, icon: 'fas fa-wind' },
        { name: { en: 'Git & GitHub', fr: 'Git & GitHub', ar: 'جيت وجيت هاب' }, icon: 'fab fa-git-alt' },
        // { name: { en: 'Figma', fr: 'Figma', ar: 'فيغما' }, icon: 'fab fa-figma' },
        // { name: { en: 'Vite', fr: 'Vite', ar: 'فايت' }, icon: 'fas fa-bolt' },
        // { name: { en: 'TypeScript', fr: 'TypeScript', ar: 'تايب سكريبت' }, icon: 'fas fa-code' },
        // { name: { en: 'Next.js', fr: 'Next.js', ar: 'نكست جي إس' }, icon: 'fab fa-react' }
      ];

      const projects = [
        // {
        //   title: { en: 'movieseek · discovery app', fr: 'movieseek · app de découverte', ar: 'موفي سيك · تطبيق اكتشاف الأفلام' },
        //   desc: { en: 'Real‑time movie search using OMDB API, with skeleton loaders and dark mode.', fr: 'Recherche de films en temps réel avec OMDB API, chargeurs skeleton et mode sombre.', ar: 'بحث فوري عن الأفلام باستخدام OMDB API، مع مؤشرات تحميل متحركة ووضع مظلم.' },
        //   tags: { en: ['react', 'fetch', 'CSS modules'], fr: ['react', 'fetch', 'modules CSS'], ar: ['رياكت', 'جلب بيانات', 'وحدات CSS'] },
        //   icon: 'fas fa-film',
        //   link: '#',
        //   code: '#'
        // },
        {
          title: { en: 'dashboard UI kit', fr: 'kit UI tableau de bord', ar: 'مجموعة واجهات لوحة التحكم' },
          desc: { en: 'Interactive admin dashboard with charts, drag‑drop widgets and full accessibility.', fr: 'Tableau de bord interactif avec graphiques, widgets glisser-déposer et accessibilité totale.', ar: 'لوحة تحكم تفاعلية مع رسوم بيانية وأدوات سحب وإدراج وإمكانية وصول كاملة.' },
          tags: { en: ['chart.js', 'grid', 'localStorage'], fr: ['chart.js', 'grille', 'localStorage'], ar: ['رسم بياني', 'شبكة', 'تخزين محلي'] },
          icon: 'fas fa-chart-pie',
          link: '#',
          code: '#'
        },
        // {
        //   title: { en: 'weather flow', fr: 'flux météo', ar: 'تدفق الطقس' },
        //   desc: { en: 'Minimal weather PWA with geolocation, service worker and animated icons.', fr: 'PWA météo minimaliste avec géolocalisation, service worker et icônes animées.', ar: 'تطبيق طقس بسيط مع تحديد الموقع وعامل خدمة وأيقونات متحركة.' },
        //   tags: { en: ['PWA', 'API', 'CSS vars'], fr: ['PWA', 'API', 'variables CSS'], ar: ['تطبيق ويب', 'API', 'متغيرات CSS'] },
        //   icon: 'fas fa-cloud-sun',
        //   link: '#',
        //   code: '#'
        // }
      ];

      let currentLang = 'en';

      // Function to update content based on language
      function updateLanguage(lang) {
        currentLang = lang;
        
        // Update HTML direction for Arabic
        if (lang === 'ar') {
          document.documentElement.dir = 'rtl';
          document.documentElement.lang = 'ar';
        } else {
          document.documentElement.dir = 'ltr';
          document.documentElement.lang = lang;
        }
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
          const keys = element.getAttribute('data-i18n').split('.');
          let value = translations[lang];
          keys.forEach(key => {
            value = value?.[key];
          });
          if (value) {
            element.textContent = value;
          }
        });

        // Update theme toggle text
        const themeSpan = document.querySelector('#themeToggle span');
        if (themeSpan) {
          themeSpan.textContent = document.body.classList.contains('dark') ? 
            translations[lang].theme.dark : translations[lang].theme.light;
        }

        // Update skills
        updateSkills(lang);
        
        // Update projects
        updateProjects(lang);

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
          btn.classList.remove('active');
          if (btn.dataset.lang === lang) {
            btn.classList.add('active');
          }
        });

        // Save language preference
        localStorage.setItem('preferredLanguage', lang);
      }

      function updateSkills(lang) {
        const skillsContainer = document.getElementById('skillsContainer');
        if (skillsContainer) {
          skillsContainer.innerHTML = skills.map(skill => `
            <div class="skill-tag">
              <i class="${skill.icon}"></i>
              <span>${skill.name[lang]}</span>
            </div>
          `).join('');
        }
      }

      function updateProjects(lang) {
        const projectsContainer = document.getElementById('projectsContainer');
        if (projectsContainer) {
          projectsContainer.innerHTML = projects.map(p => `
            <div class="project-card">
              <div class="project-icon"><i class="${p.icon}"></i></div>
              <h3>${p.title[lang]}</h3>
              <p style="color: var(--text-light);">${p.desc[lang]}</p>
              <div class="project-tags">
                ${p.tags[lang].map(tag => `<span>${tag}</span>`).join('')}
              </div>
              <div class="card-links">
                <a href="${p.link}"><i class="fas fa-external-link-alt"></i> ${translations[lang].buttons.demo}</a>
                <a href="${p.code}"><i class="fab fa-github"></i> ${translations[lang].buttons.code}</a>
              </div>
            </div>
          `).join('');
        }
      }

      // Language switcher event listeners
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          updateLanguage(btn.dataset.lang);
        });
      });

      // ----- theme toggle (light/dark) with localStorage persistence -----
      const toggleBtn = document.getElementById('themeToggle');
      const sunIcon = '<i class="fas fa-sun"></i>';
      const moonIcon = '<i class="fas fa-moon"></i>';

      function setTheme(theme) {
        if (theme === 'dark') {
          document.body.classList.add('dark');
          toggleBtn.innerHTML = `${moonIcon} <span>${translations[currentLang].theme.dark}</span>`;
        } else {
          document.body.classList.remove('dark');
          toggleBtn.innerHTML = `${sunIcon} <span>${translations[currentLang].theme.light}</span>`;
        }
        localStorage.setItem('frontendPortfolioTheme', theme);
      }

      // init theme
      const savedTheme = localStorage.getItem('frontendPortfolioTheme') || 'light';
      
      // init language
      const savedLang = localStorage.getItem('preferredLanguage') || 'en';
      updateLanguage(savedLang);
      
      setTheme(savedTheme);

      toggleBtn.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark');
        setTheme(isDark ? 'light' : 'dark');
      });

      // Optional: update theme toggle label if user prefers OS dark mode (first visit)
      if (!localStorage.getItem('frontendPortfolioTheme')) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setTheme('dark');
        }
      }

      // Add animation on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);

      // Observe elements after they're created
      setTimeout(() => {
        document.querySelectorAll('.project-card, .skill-tag').forEach(el => {
          el.style.opacity = '0';
          el.style.transform = 'translateY(20px)';
          el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          observer.observe(el);
        });
      }, 100);
    })();