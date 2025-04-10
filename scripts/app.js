document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Navegación suave al hacer clic en los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efecto de scroll en la barra de navegación
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Validación simple del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí podrías agregar tu lógica de validación y envío
            // Por ahora solo mostramos un mensaje de éxito
            const formData = new FormData(contactForm);
            let formValues = {};
            
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            console.log('Formulario enviado:', formValues);
            
            // Simulamos el envío
            const submitButton = contactForm.querySelector('.submit-button');
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
                submitButton.textContent = 'Enviar mensaje';
                submitButton.disabled = false;
            }, 1500);
        });
    }
    
    // Animación de aparición al scroll
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        const services = document.querySelectorAll('.service-card');
        const downloads = document.querySelectorAll('.download-card');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
        
        services.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.9) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, card.dataset.index * 100);
            }
        });
        
        downloads.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.9) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, card.dataset.index * 100);
            }
        });
    };
    
    // Asignar índices a las tarjetas para animación secuencial
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.dataset.index = index;
        card.classList.add('fade-in');
    });
    
    document.querySelectorAll('.download-card').forEach((card, index) => {
        card.dataset.index = index;
        card.classList.add('fade-in');
    });
    
    // Aplicar clase inicial a las secciones
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Llamar a la función al cargar la página
    window.addEventListener('load', animateOnScroll);
    // Y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
});
document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Navegación suave al hacer clic en los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Validación simple del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí podrías agregar tu lógica de validación y envío
            // Por ahora solo mostramos un mensaje de éxito
            const formData = new FormData(contactForm);
            let formValues = {};
            
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            console.log('Formulario enviado:', formValues);
            
            // Simulamos el envío
            const submitButton = contactForm.querySelector('.submit-button');
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
                submitButton.textContent = 'Enviar mensaje';
                submitButton.disabled = false;
            }, 1500);
        });
    }
    
    // Animación de aparición al scroll
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
    };
    
    // Aplicar clase inicial
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Llamar a la función al cargar la página
    window.addEventListener('load', animateOnScroll);
    // Y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
});
document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Navegación suave al hacer clic en los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efecto de scroll en la barra de navegación
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Validación simple del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí podrías agregar tu lógica de validación y envío
            // Por ahora solo mostramos un mensaje de éxito
            const formData = new FormData(contactForm);
            let formValues = {};
            
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            console.log('Formulario enviado:', formValues);
            
            // Simulamos el envío
            const submitButton = contactForm.querySelector('.submit-button');
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
                submitButton.textContent = 'Enviar mensaje';
                submitButton.disabled = false;
            }, 1500);
        });
    }
    
    // Animación de aparición al scroll
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        const services = document.querySelectorAll('.service-card');
        const downloads = document.querySelectorAll('.download-card');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('visible');
            }
        });
        
        services.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.9) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, card.dataset.index * 100);
            }
        });
        
        downloads.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight * 0.9) {
                setTimeout(() => {
                    card.classList.add('visible');
                }, card.dataset.index * 100);
            }
        });
    };
    
    // Asignar índices a las tarjetas para animación secuencial
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.dataset.index = index;
        card.classList.add('fade-in');
    });
    
    document.querySelectorAll('.download-card').forEach((card, index) => {
        card.dataset.index = index;
        card.classList.add('fade-in');
    });
    
    // Aplicar clase inicial a las secciones
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });
    
    // Llamar a la función al cargar la página
    window.addEventListener('load', animateOnScroll);
    // Y al hacer scroll
    window.addEventListener('scroll', animateOnScroll);
});
// Funcionalidad para el escáner de dominios CyberAegis
document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const domainInput = document.getElementById('domainInput');
    const scanButton = document.getElementById('scanButton');
    const scanLoading = document.getElementById('scanLoading');
    const results = document.getElementById('results');
    const tabButtons = document.querySelectorAll('.tab-button');
    
    // Agregar evento al botón de escaneo
    scanButton.addEventListener('click', function() {
        scanDomain();
    });
    
    // Permitir escanear al presionar Enter en el input
    domainInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            scanDomain();
        }
    });
    
    // Funcionalidad de pestañas
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase activa de todos los botones
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Agregar clase activa al botón clickeado
            this.classList.add('active');
            
            // Ocultar todos los contenidos de pestañas
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Mostrar el contenido de la pestaña seleccionada
            const tabId = this.getAttribute('data-tab') + '-tab';
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Función principal de escaneo
    function scanDomain() {
        const domain = domainInput.value.trim();
        
        // Validar que se ingresó un dominio
        if (!domain) {
            alert('Por favor, ingresa un dominio válido.');
            return;
        }
        
        // Mostrar animación de carga
        scanLoading.style.display = 'flex';
        results.style.display = 'none';
        
        // Simular tiempo de escaneo (2-4 segundos)
        setTimeout(() => {
            performScan(domain);
            scanLoading.style.display = 'none';
            results.style.display = 'block';
        }, Math.random() * 2000 + 2000);
    }
    
    // Simular el escaneo de dominio
    function performScan(domain) {
        // Información básica del dominio
        simulateBasicInfo(domain);
        
        // Registros DNS
        simulateDnsRecords(domain);
        
        // Información de seguridad
        simulateSecurityInfo(domain);
        
        // Información de puertos
        simulatePorts(domain);
    }
    
    // Simular información básica
    function simulateBasicInfo(domain) {
        const ipOctets = [];
        for (let i = 0; i < 4; i++) {
            ipOctets.push(Math.floor(Math.random() * 255));
        }
        const ip = ipOctets.join('.');
        
        const servers = [
            'Apache/2.4.41', 
            'nginx/1.18.0', 
            'Microsoft-IIS/10.0', 
            'LiteSpeed', 
            'Cloudflare'
        ];
        const server = servers[Math.floor(Math.random() * servers.length)];
        
        const countries = ['España', 'Estados Unidos', 'Alemania', 'Francia', 'Reino Unido'];
        const country = countries[Math.floor(Math.random() * countries.length)];
        
        const responseTime = (Math.random() * 500 + 50).toFixed(2);
        
        document.getElementById('domain-name').textContent = domain;
        document.getElementById('domain-ip').textContent = ip;
        document.getElementById('domain-server').textContent = server;
        document.getElementById('domain-country').textContent = country;
        document.getElementById('domain-response').textContent = responseTime + ' ms';
    }
    
    // Simular registros DNS
    function simulateDnsRecords(domain) {
        const dnsContainer = document.getElementById('dns-records');
        dnsContainer.innerHTML = '';
        
        const recordTypes = ['A', 'AAAA', 'MX', 'TXT', 'NS', 'CNAME'];
        const ttls = [300, 3600, 14400, 86400];
        
        // Generar entre 3 y 7 registros DNS
        const recordCount = Math.floor(Math.random() * 5) + 3;
        
        for (let i = 0; i < recordCount; i++) {
            const type = recordTypes[Math.floor(Math.random() * recordTypes.length)];
            const ttl = ttls[Math.floor(Math.random() * ttls.length)];
            
            let value = '';
            
            switch (type) {
                case 'A':
                    value = generateRandomIp();
                    break;
                case 'AAAA':
                    value = generateRandomIpv6();
                    break;
                case 'MX':
                    value = `10 mail.${domain}`;
                    break;
                case 'TXT':
                    value = `v=spf1 ip4:${generateRandomIp()} -all`;
                    break;
                case 'NS':
                    value = `ns${Math.floor(Math.random() * 5) + 1}.${i % 2 === 0 ? 'cloudflare.com' : 'googledomains.com'}`;
                    break;
                case 'CNAME':
                    value = i % 2 === 0 ? domain : `www.${domain}`;
                    break;
            }
            
            const row = document.createElement('div');
            row.className = 'table-row';
            row.innerHTML = `
                <div class="table-cell">${type}</div>
                <div class="table-cell