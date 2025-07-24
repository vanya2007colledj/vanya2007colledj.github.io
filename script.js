const siteData = {
    services: [
        {
            title: "Строительство домов",
            description: "Полный цикл строительства частных домов и коттеджей по индивидуальным проектам с гарантией качества.",
            image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Ремонт и отделка",
            description: "Качественный ремонт квартир, офисов и коммерческих помещений любой сложности под ключ.",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Инженерные системы",
            description: "Проектирование и монтаж современных инженерных систем: отопление, водоснабжение, электрика.",
            image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ],
    projects: [
        {
            title: "Квартира в жилом комплексе 'Жигулина Роща'",
            description: "Многоэтажный жилой комплекс с современной инфраструктурой.",
            location: "г.Симферополь, мкр. 'Жигулина Роща', ул. Крымской Весны 1, корпус 2",
            area: "100 м²",
            images: [
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1501182563531-c2b4e735a73e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            title: "Частный дом 'Премиум'",
            description: "Многоэтажный жилой комплекс с современной инфраструктурой в центре города.",
            location: "Подмосковье",
            area: "450 м²",
            images: [
                "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1501182563531-c2b4e735a73e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ]
        },
        {
            title: "Квартира в жилом комплексе 'Город мира'",
            description: "Многоэтажный жилой комплекс с современной инфраструктурой в центре города.",
            location: "г.Симферополь, улица Батурина",
            area: "100 м²",
            images: [
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1501182563531-c2b4e735a73e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            ]
        }
    ],
    contactInfo: [
        {
            icon: "fas fa-phone",
            title: "Телефон",
            content: "+7 (978) 623-72-38"
        },
        {
            icon: "fas fa-envelope",
            title: "Email",
            content: "vono-2019@mail.ru"
        },
    ],
    footerLinks: {
        services: [
            "Строительство домов",
            "Ремонт и отделка",
            "Инженерные системы",
            "Проектирование",
            "Консультации"
        ],
        quickLinks: [
            { title: "Главная", href: "home" },
            { title: "Услуги", href: "services" },
            { title: "Проекты", href: "projects" },
            { title: "О нас", href: "about" },
            { title: "Контакты", href: "contact" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Установка текущего года в футере
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Заполнение сервисов
    const servicesGrid = document.querySelector('.services-grid');
    siteData.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-img">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;
        servicesGrid.appendChild(serviceCard);
    });
    
    // Заполнение проектов (слайдер с вложенными слайдерами для фото)
    const projectsGrid = document.querySelector('.projects-grid');
    siteData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'swiper-slide project-card';
        projectCard.innerHTML = `
            <div class="project-img-swiper swiper">
                <div class="swiper-wrapper">
                    ${project.images.map(img => `<div class="swiper-slide"><img src="${img}" alt="${project.title}"></div>`).join('')}
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="project-overlay">
                <h3>${project.title}</h3>
                <p>${project.location} | ${project.area}</p>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
    
    // Инициализация Swiper для проектов (внешний слайдер)
    new Swiper('.projects-swiper', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });
    
    // Инициализация вложенных Swiper для фотографий проектов
    document.querySelectorAll('.project-img-swiper').forEach(swiper => {
        new Swiper(swiper, {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            pagination: {
                el: swiper.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: swiper.querySelector('.swiper-button-next'),
                prevEl: swiper.querySelector('.swiper-button-prev'),
            }
        });
    });
    
    // Заполнение контактной информации
    const contactDetails = document.querySelector('.contact-details');
    siteData.contactInfo.forEach(contact => {
        const contactItem = document.createElement('div');
        contactItem.className = 'contact-item';
        contactItem.innerHTML = `
            <div class="contact-icon">
                <i class="${contact.icon}"></i>
            </div>
            <div class="contact-text">
                <h4>${contact.title}</h4>
                <p>${contact.content}</p>
            </div>
        `;
        contactDetails.appendChild(contactItem);
    });
    
    // Заполнение футера
    const footerContainer = document.querySelector('.footer-container');
    footerContainer.innerHTML = `
        <div class="footer-col">
            <div class="logo">
                <img src="images/logo.png" alt="КОМФИ-ПРО" class="logo-img">
                <div class="logo-text">КОМФИ-<span>ПРО</span></div>
            </div>
            <p style="margin-top: 10px; color: var(--light-gray);">Профессиональные строительные решения для вашего комфорта.</p>
        </div>
        <div class="footer-col">
            <h3>Наши услуги</h3>
            <ul class="footer-links">
                ${siteData.footerLinks.services.map(service => `<li><a href="#services">${service}</a></li>`).join('')}
            </ul>
        </div>
        <div class="footer-col">
            <h3>Быстрые ссылки</h3>
            <ul class="footer-links">
                ${siteData.footerLinks.quickLinks.map(link => `<li><a href="#${link.href}">${link.title}</a></li>`).join('')}
            </ul>
        </div>
        <div class="footer-col">
            <h3>Контакты</h3>
            <ul class="footer-links">
                <li><i class="fas fa-phone"></i> +7 (495) 123-45-67</li>
                <li><i class="fas fa-envelope"></i> vono-2019@mail.ru</li>
                <li><i class="fas fa-map-marker-alt"></i> г. Москва, ул. Строителей, д. 25</li>
            </ul>
        </div>
    `;
    
    // Обработка отправки формы
    const form = document.getElementById('callbackForm');
    form.addEventListener('submit', handleFormSubmit);
    
    // Плавная прокрутка
    setupSmoothScrolling();
    
    // Наблюдатель для анимаций
    setupIntersectionObserver();
    
    // Инициализация частиц
    initParticles();
    
    // Инициализация счетчиков
    initCounters();
});

// Инициализация частиц
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: { value: 150, density: { enable: true, value_area: 800 } },
            color: { value: "#ff6b00" },
            shape: { type: "circle", stroke: { width: 1, color: "#ff6b00" } },
            opacity: { value: 0.7, random: true, anim: { enable: true, speed: 2, opacity_min: 0.3, sync: false } },
            size: { value: 6, random: true, anim: { enable: true, speed: 4, size_min: 0.5, sync: false } },
            line_linked: { enable: true, distance: 150, color: "#ff6b00", opacity: 0.4, width: 2 },
            move: { enable: true, speed: 3, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
            modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
}

// Инициализация счетчиков
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const inc = target / speed;
            
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount();
                observer.disconnect();
            }
        });
        
        observer.observe(counter);
    });
}

// Валидация формы
function validateForm() {
    let isValid = true;
    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');
    const address = document.getElementById('address');
    const message = document.getElementById('message');
    
    // Очистка предыдущих ошибок
    document.querySelectorAll('.form-group').forEach(group => group.classList.remove('error'));
    document.querySelectorAll('.error-message').forEach(error => error.style.display = 'none');
    
    // Валидация имени
    if (!name.value.match(/^[A-Za-zА-Яа-я\s]{2,}$/)) {
        document.getElementById('name-error').textContent = 'Имя должно содержать только буквы и пробелы (мин. 2 символа)';
        document.getElementById('name-error').style.display = 'block';
        name.parentElement.classList.add('error');
        isValid = false;
    }
    
    // Валидация телефона
    if (!phone.value.match(/^\+?7[0-9]{10}$|^8[0-9]{10}$/)) {
        document.getElementById('phone-error').textContent = 'Введите телефон в формате +7XXXXXXXXXX или 8XXXXXXXXXX';
        document.getElementById('phone-error').style.display = 'block';
        phone.parentElement.classList.add('error');
        isValid = false;
    }
    
    // Валидация email
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById('email-error').textContent = 'Введите корректный email';
        document.getElementById('email-error').style.display = 'block';
        email.parentElement.classList.add('error');
        isValid = false;
    }
    
    // Валидация адреса
    if (address.value.length < 5) {
        document.getElementById('address-error').textContent = 'Адрес должен содержать минимум 5 символов';
        document.getElementById('address-error').style.display = 'block';
        address.parentElement.classList.add('error');
        isValid = false;
    }
    
    // Валидация сообщения
    if (message.value.length < 10) {
        document.getElementById('message-error').textContent = 'Сообщение должно содержать минимум 10 символов';
        document.getElementById('message-error').style.display = 'block';
        message.parentElement.classList.add('error');
        isValid = false;
    }
    
    return isValid;
}

// Обработка формы
function handleFormSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Показываем статус отправки
    const submitBtn = form.querySelector('.submit-btn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
    submitBtn.disabled = true;
    
    // Очистка ввода от XSS
    const sanitizedData = new FormData();
    for (let [key, value] of formData.entries()) {
        sanitizedData.append(key, value.replace(/[<>]/g, ''));
    }
    
    // Отправка через Formspree
    fetch(form.action, {
        method: 'POST',
        body: sanitizedData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            showFormStatus('success', 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
            form.reset();
        } else {
            showFormStatus('error', 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
        }
    })
    .catch(error => {
        showFormStatus('error', 'Произошла ошибка при отправке: ' + error.message);
    })
    .finally(() => {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    });
}

// Показать статус формы
function showFormStatus(type, message) {
    const statusDiv = document.createElement('div');
    statusDiv.id = 'formStatus';
    statusDiv.className = type;
    statusDiv.textContent = message;
    
    const form = document.getElementById('callbackForm');
    form.appendChild(statusDiv);
    
    setTimeout(() => {
        statusDiv.style.opacity = '0';
        setTimeout(() => {
            statusDiv.remove();
        }, 500);
    }, 5000);
}

// Плавная прокрутка
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Наблюдатель для анимаций
function setupIntersectionObserver() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                entry.target.style.animation = 'slideIn 0.6s ease forwards';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.service-card, .project-card, .section-title').forEach(el => {
        observer.observe(el);
    });
}