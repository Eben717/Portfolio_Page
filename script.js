document.addEventListener('DOMContentLoaded', () => {

    /* ===========================================
       NAVBAR SCROLL EFFECT
       =========================================== */
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ===========================================
       SCROLL REVEAL ANIMATION (Intersection Observer)
       =========================================== */
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(
        entries,
        revealOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                revealOnScroll.unobserve(entry.target);
            }
        });
    },
    revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    /* ===========================================
       ACTIVE NAV LINK HIGHLIGHTING
       =========================================== */
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
    
    /* Trigger initial animations right away for elements in viewport on load */
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero .reveal');
        heroElements.forEach(el => el.classList.add('active'));
    }, 100);

    /* ===========================================
       DYNAMIC PROJECTS RENDERING & FILTERING
       =========================================== */
    const projectsGrid = document.getElementById('projects-grid');
    const projectFiltersContainer = document.getElementById('project-filters');

    if (projectsGrid && projectFiltersContainer && typeof portfolioProjects !== 'undefined') {
        
        // 1. Extract unique categories + "All"
        const uniqueCategories = ['All'];
        portfolioProjects.forEach(project => {
            if (!uniqueCategories.includes(project.category)) {
                uniqueCategories.push(project.category);
            }
        });

        // 2. We have 20+ categories, we only want a few main ones to display as buttons to not clutter UI.
        // Or we can just limit to top 6 categories for the filter bar to keep it clean.
        const categoryCounts = {};
        portfolioProjects.forEach(p => {
            categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
        });
        
        const topCategories = Object.keys(categoryCounts)
            .sort((a, b) => categoryCounts[b] - categoryCounts[a])
            .slice(0, 6);
        
        const displayCategories = ['All', ...topCategories];

        // 3. Render Filter Buttons
        displayCategories.forEach((cat, index) => {
            const btn = document.createElement('button');
            btn.className = `filter-btn ${index === 0 ? 'active' : ''}`;
            btn.dataset.filter = cat;
            btn.textContent = cat;
            projectFiltersContainer.appendChild(btn);
        });

        // 4. Render Function
        const renderProjects = (category) => {
            projectsGrid.innerHTML = ''; // clear
            
            const filtered = category === 'All' 
                ? portfolioProjects 
                : portfolioProjects.filter(p => p.category === category || (category === 'Other' && !topCategories.includes(p.category)));

            filtered.forEach((project, index) => {
                const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
                
                // create article
                const article = document.createElement('article');
                article.className = 'project-card glass-card reveal fade-up';
                // Add a slight stagger delay
                article.style.transitionDelay = `${(index % 3) * 100}ms`;

                article.innerHTML = `
                    <div class="project-image" style="background: url('${project.image}'); background-size: cover; background-position: center;">
                        <div class="project-links">
                            <a href="${project.github}" class="icon-btn"><i class="ri-github-fill"></i></a>
                            <a href="${project.live}" class="icon-btn"><i class="ri-external-link-line"></i></a>
                        </div>
                    </div>
                    <div class="project-content">
                        <div class="project-tags">
                            ${tagsHTML}
                        </div>
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-desc">${project.description}</p>
                    </div>
                `;
                
                projectsGrid.appendChild(article);
                
                // Observer for newly added elements to animate in
                setTimeout(() => {
                    revealOnScroll.observe(article);
                }, 50);
            });
        };

        // Initial render
        renderProjects('All');

        // 5. Filter click listeners
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // remove active class from all
                filterBtns.forEach(b => b.classList.remove('active'));
                // add to clicked
                btn.classList.add('active');
                
                // Re-render
                renderProjects(btn.dataset.filter);
            });
        });
    }

});
