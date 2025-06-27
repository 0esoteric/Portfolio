// Initialize Lucide icons
lucide.createIcons();

// Global variables
let particles = [];
let connections = [];
let mouse = { x: 0, y: 0 };
let time = 0;
let animationId;

// Navbar functionality
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileMenuBtn = document.getElementById('mobile-menu-btn');
        this.mobileNav = document.getElementById('mobile-nav');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.activeSection = 'home';
        
        this.init();
    }
    
    init() {
        // Handle scroll for navbar background
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
            
            this.updateActiveSection();
        });
        
        // Mobile menu toggle
        this.mobileMenuBtn.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
        
        // Navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const section = e.target.getAttribute('data-section');
                if (section) {
                    this.scrollToSection(section);
                    this.closeMobileMenu();
                }
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navbar.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }
    
    toggleMobileMenu() {
        const isOpen = this.mobileNav.style.display === 'flex';
        this.mobileNav.style.display = isOpen ? 'none' : 'flex';
        
        // Update icon
        const icon = this.mobileMenuBtn.querySelector('i');
        icon.setAttribute('data-lucide', isOpen ? 'menu' : 'x');
        lucide.createIcons();
    }
    
    closeMobileMenu() {
        this.mobileNav.style.display = 'none';
        const icon = this.mobileMenuBtn.querySelector('i');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    }
    
    updateActiveSection() {
        const sections = ['home', 'about', 'skills', 'projects', 'experience', 'achievements', 'blog', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
                this.setActiveSection(sections[i]);
                break;
            }
        }
    }
    
    setActiveSection(sectionId) {
        if (this.activeSection === sectionId) return;
        
        this.activeSection = sectionId;
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            }
        });
    }
    
    scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}






// Skills Section
class SkillsSection {
    constructor() {
        this.container = document.getElementById('skills-grid');
        this.filterBtns = document.querySelectorAll('.skills-filter .filter-btn');
        this.activeFilter = 'all';
        
        this.init();
    }
    
    init() {
        this.renderSkills();
        this.setupFilters();
        this.setupIntersectionObserver();
    }
    
    setupFilters() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.setActiveFilter(filter);
                this.filterSkills(filter);
            });
        });
    }
    
    setActiveFilter(filter) {
        this.activeFilter = filter;
        this.filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-filter') === filter) {
                btn.classList.add('active');
            }
        });
    }
    
    filterSkills(filter) {
        const skillCards = this.container.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    renderSkills() {
        this.container.innerHTML = '';
        
        skillsData.forEach((skill, index) => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.setAttribute('data-category', skill.category);
            
            skillCard.innerHTML = `
                <div class="skill-icon">
                    <i data-lucide="${skill.icon}"></i>
                </div>
                <h3>${skill.name}</h3>
                <div class="skill-progress">
                    <div class="skill-progress-bar" data-level="${skill.level}"></div>
                </div>
                <div class="skill-level">${skill.level}%</div>
            `;
            
            this.container.appendChild(skillCard);
        });
        
        lucide.createIcons();
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSkillBars();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(this.container);
    }
    
    animateSkillBars() {
        const progressBars = this.container.querySelectorAll('.skill-progress-bar');
        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                const level = bar.getAttribute('data-level');
                bar.style.width = `${level}%`;
            }, index * 100);
        });
    }
}

// Projects Section
class ProjectsSection {
    constructor() {
        this.container = document.getElementById('projects-grid');
        this.filterBtns = document.querySelectorAll('.projects-filter .filter-btn');
        this.modal = document.getElementById('project-modal');
        this.modalBody = document.getElementById('modal-body');
        this.modalClose = document.getElementById('modal-close');
        this.activeFilter = 'all';
        
        this.init();
    }
    
    init() {
        this.renderProjects();
        this.setupFilters();
        this.setupModal();
    }
    
    setupFilters() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.setActiveFilter(filter);
                this.filterProjects(filter);
            });
        });
    }
    
    setActiveFilter(filter) {
        this.activeFilter = filter;
        this.filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-filter') === filter) {
                btn.classList.add('active');
            }
        });
    }
    
    filterProjects(filter) {
        const projectCards = this.container.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeInUp 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    renderProjects() {
        this.container.innerHTML = '';
        
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.setAttribute('data-category', project.category);
            projectCard.setAttribute('data-project-id', project.id);
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.imageUrl}" alt="${project.title}">
                    ${project.featured ? '<div class="featured-badge">Featured</div>' : ''}
                </div>
                <div class="project-content">
                    <div class="project-category">${project.category}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.slice(0, 3).map(tech => 
                            `<span class="tech-tag">${tech}</span>`
                        ).join('')}
                        ${project.technologies.length > 3 ? 
                            `<span class="tech-tag">+${project.technologies.length - 3} more</span>` : ''
                        }
                    </div>
                    <div class="project-links">
                        ${project.demoUrl ? 
                            `<a href="${project.demoUrl}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                                <i data-lucide="external-link"></i>
                                Live Demo
                            </a>` : ''
                        }
                        ${project.githubUrl ? 
                            `<a href="${project.githubUrl}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                                <i data-lucide="github"></i>
                                Code
                            </a>` : ''
                        }
                    </div>
                </div>
            `;
            
            projectCard.addEventListener('click', () => {
                this.openProjectModal(project);
            });
            
            this.container.appendChild(projectCard);
        });
        
        lucide.createIcons();
    }
    
    setupModal() {
        this.modalClose.addEventListener('click', () => {
            this.closeProjectModal();
        });
        
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeProjectModal();
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeProjectModal();
            }
        });
    }
    
    openProjectModal(project) {
        this.modalBody.innerHTML = `
            <img src="${project.imageUrl}" alt="${project.title}" style="width: 100%; height: 256px; object-fit: cover; border-radius: 1rem 1rem 0 0;">
            <div style="padding: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <span style="font-size: 0.875rem; color: var(--neon-blue); font-weight: 500; text-transform: uppercase;">${project.category}</span>
                    ${project.featured ? '<span style="padding: 0.25rem 0.75rem; background: linear-gradient(to right, var(--neon-pink), var(--neon-purple)); color: white; font-size: 0.75rem; font-weight: 600; border-radius: 9999px;">Featured Project</span>' : ''}
                </div>
                <h3 style="font-size: 2rem; font-weight: 700; color: white; margin-bottom: 1rem;">${project.title}</h3>
                <p style="color: var(--gray-300); line-height: 1.7; margin-bottom: 1.5rem;">${project.longDescription}</p>
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="font-size: 1.125rem; font-weight: 600; color: white; margin-bottom: 0.75rem;">Technologies Used</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${project.technologies.map(tech => 
                            `<span style="padding: 0.25rem 0.75rem; background: rgba(0, 217, 255, 0.1); color: var(--neon-blue); font-size: 0.875rem; border-radius: 9999px; border: 1px solid rgba(0, 217, 255, 0.2);">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
                <div style="display: flex; gap: 1rem;">
                    ${project.demoUrl ? 
                        `<a href="${project.demoUrl}" target="_blank" style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; background: linear-gradient(to right, var(--neon-blue), var(--neon-purple)); color: white; text-decoration: none; border-radius: 0.5rem; font-weight: 600;">
                            <i data-lucide="external-link"></i>
                            View Live Demo
                        </a>` : ''
                    }
                    ${project.githubUrl ? 
                        `<a href="${project.githubUrl}" target="_blank" style="display: flex; align-items: center; gap: 0.5rem; padding: 0.75rem 1.5rem; border: 1px solid var(--gray-600); color: var(--gray-300); text-decoration: none; border-radius: 0.5rem; font-weight: 600;">
                            <i data-lucide="github"></i>
                            View Code
                        </a>` : ''
                    }
                </div>
            </div>
        `;
        
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        lucide.createIcons();
    }
    
    closeProjectModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Experience Section
class ExperienceSection {
    constructor() {
        this.workTimeline = document.getElementById('work-timeline');
        this.educationTimeline = document.getElementById('education-timeline');
        
        this.init();
    }
    
    init() {
        this.renderExperience();
    }
    
    renderExperience() {
        const workExperience = experienceData.filter(exp => exp.type === 'work');
        const education = experienceData.filter(exp => exp.type === 'education');
        
        this.renderTimeline(this.workTimeline, workExperience);
        this.renderTimeline(this.educationTimeline, education);
        
        lucide.createIcons();
    }
    
    renderTimeline(container, experiences) {
        container.innerHTML = '';
        
        experiences.forEach(exp => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            
            timelineItem.innerHTML = `
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h4 class="timeline-title">${exp.title}</h4>
                        <div class="timeline-period">
                            <i data-lucide="calendar"></i>
                            ${exp.period}
                        </div>
                    </div>
                    <div class="timeline-company">
                        <i data-lucide="map-pin"></i>
                        <span>${exp.company}</span>
                    </div>
                    <ul class="timeline-description">
                        ${exp.description.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <div class="timeline-tech">
                        ${exp.technologies.map(tech => 
                            `<span class="tech-tag">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            `;
            
            container.appendChild(timelineItem);
        });
    }
}

// Achievements Section
class AchievementsSection {
    constructor() {
        this.container = document.getElementById('achievements-grid');
        
        this.init();
    }
    
    init() {
        this.renderAchievements();
    }
    
    renderAchievements() {
        this.container.innerHTML = '';
        
        achievementsData.forEach(achievement => {
            const achievementCard = document.createElement('div');
            achievementCard.className = 'achievement-card';
            
            achievementCard.innerHTML = `
                <div class="achievement-header">
                    <div class="achievement-icon">
                        <i data-lucide="${achievement.icon}"></i>
                    </div>
                    <div class="achievement-meta">
                        <div class="achievement-category">${achievement.category}</div>
                        <div class="achievement-date">${achievement.date}</div>
                    </div>
                </div>
                <h3 class="achievement-title">${achievement.title}</h3>
                <p class="achievement-description">${achievement.description}</p>
                ${achievement.url ? 
                    `<a href="${achievement.url}" target="_blank" class="achievement-link">
                        <span>View Details</span>
                        <i data-lucide="external-link"></i>
                    </a>` : ''
                }
            `;
            
            this.container.appendChild(achievementCard);
        });
        
        lucide.createIcons();
    }
}

// // Blog Section
// class BlogSection {
//     constructor() {
//         this.container = document.getElementById('blog-grid');
        
//         this.init();
//     }
    
//     init() {
//         this.renderBlogPosts();
//     }
    
//     renderBlogPosts() {
//         this.container.innerHTML = '';
        
//         blogData.forEach(post => {
//             const blogCard = document.createElement('div');
//             blogCard.className = 'blog-card';
            
//             const date = new Date(post.date);
//             const formattedDate = date.toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric'
//             });
            
//             blogCard.innerHTML = `
//                 <div class="blog-meta">
//                     <div class="blog-date">
//                         <i data-lucide="calendar"></i>
//                         ${formattedDate}
//                     </div>
//                     <div class="blog-read-time">
//                         <i data-lucide="clock"></i>
//                         ${post.readTime} min read
//                     </div>
//                 </div>
//                 <h3 class="blog-title">${post.title}</h3>
//                 <p class="blog-excerpt">${post.excerpt}</p>
//                 <div class="blog-tags">
//                     ${post.tags.slice(0, 3).map(tag => 
//                         `<span class="blog-tag">
//                             <i data-lucide="tag"></i>
//                             ${tag}
//                         </span>`
//                     ).join('')}
//                     ${post.tags.length > 3 ? 
//                         `<span class="blog-tag">+${post.tags.length - 3} more</span>` : ''
//                     }
//                 </div>
//                 <div class="blog-read-more">
//                     <span>Read More</span>
//                     <i data-lucide="arrow-right"></i>
//                 </div>
//             `;
            
//             this.container.appendChild(blogCard);
//         });
        
//         lucide.createIcons();
//     }
// }

// Contact Form
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }
    
    async handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalContent = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<div style="width: 24px; height: 24px; border: 2px solid white; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>';
        submitBtn.disabled = true;
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        console.log('Form submitted:', data);
        
        submitBtn.innerHTML = originalContent;
        submitBtn.disabled = false;
        
        this.form.reset();
        
        // Show success message (you can customize this)
        alert('Message sent successfully!');
    }
}

// Scroll animations
class ScrollAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
    }
    
    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 1s ease-out';
                    entry.target.style.opacity = '1';
                }
            });
        }, { threshold: 0.1 });
        
        // Observe all sections and cards
        const elements = document.querySelectorAll('.section, .value-card, .timeline-item, .achievement-card, .blog-card');
        elements.forEach(el => {
            el.style.opacity = '0';
            observer.observe(el);
        });
    }
}

// Global scroll function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new Navigation();
    new SkillsSection();
    new ProjectsSection();
    new ExperienceSection();
    new AchievementsSection();
    new BlogSection();
    new ContactForm();
    new ScrollAnimations();
    
    // Add CSS animation for spin
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});