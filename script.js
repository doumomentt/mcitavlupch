// Datos completos de la malla curricular con horas lectivas
const mallaData = {
    cycles: [
        { id: 1, name: "Primer Ciclo", courses: [
            { code: "U0112", name: "Técnicas Básicas en Atención de Salud", credits: 2, type: "especifico", modality: "Presencial", 
              hours: { teorica: 0, practica: 64, total: 64 }, prerequisites: [] },
            { code: "U0002", name: "Elementos de Química", credits: 4, type: "general", modality: "Presencial", 
              hours: { teorica: 48, practica: 32, total: 80 }, prerequisites: [] },
            { code: "U0077", name: "Matemáticas Básicas", credits: 4, type: "general", modality: "Presencial", 
              hours: { teorica: 32, practica: 64, total: 96 }, prerequisites: [] },
            { code: "U0162", name: "Introducción a la Terapia de Lenguaje", credits: 1, type: "especifico", modality: "Presencial", 
              hours: { teorica: 0, practica: 32, total: 32 }, prerequisites: [] },
            { code: "U0684", name: "Filosofía y Ética", credits: 3, type: "general", modality: "No Presencial", 
              hours: { teorica: 0, practica: 32, total: 32 }, prerequisites: [] },
            { code: "U0685", name: "Desarrollo Personal y Autonomía", credits: 2, type: "general", modality: "Semipresencial", 
              hours: { teorica: 0, practica: 64, total: 64 }, prerequisites: [] },
            { code: "U0686", name: "Comunicación y Redacción I", credits: 3, type: "general", modality: "No Presencial", 
              hours: { teorica: 0, practica: 32, total: 32 }, prerequisites: [] },
            { code: "G0037", name: "Inglés 1", credits: 2, type: "general", modality: "No Presencial", 
              hours: { teorica: 0, practica: 64, total: 64 }, prerequisites: [] }
        ]},
        { id: 2, name: "Segundo Ciclo", courses: [
            { code: "U0105", name: "Fundamentos de Química Orgánica", credits: 4, type: "especifico", modality: "Presencial", 
              hours: { teorica: 48, practica: 32, total: 80 }, prerequisites: ["U0002"] },
            { code: "U0673", name: "Biología General", credits: 4, type: "general", modality: "Presencial", 
              hours: { teorica: 32, practica: 64, total: 96 }, prerequisites: [] },
            { code: "U0677", name: "Física Básica", credits: 4, type: "especifico", modality: "Presencial", 
              hours: { teorica: 32, practica: 64, total: 96 }, prerequisites: ["U0077"] },
            { code: "U0681", name: "Comunicación y Redacción II", credits: 3, type: "general", modality: "No Presencial", 
              hours: { teorica: 0, practica: 96, total: 96 }, prerequisites: ["U0686"] },
            { code: "U0683", name: "Cultura Ambiental y Desarrollo Sostenible", credits: 1, type: "general", modality: "No Presencial", 
              hours: { teorica: 0, practica: 32, total: 32 }, prerequisites: [] },
            { code: "U0687", name: "Pensamiento Científico e Investigación", credits: 2, type: "especifico", modality: "No Presencial", 
              hours: { teorica: 0, practica: 64, total: 64 }, prerequisites: [] },
            { code: "U0688", name: "Ciencias Sociales en el Contexto Actual", credits: 3, type: "general", modality: "No Presencial", 
              hours: { teorica: 0, practica: 32, total: 32 }, prerequisites: [] },
            { code: "G0038", name: "Inglés 2", credits: 2, type: "general", modality: "No Presencial", 
              hours: { teorica: 0, practica: 64, total: 64 }, prerequisites: ["G0037"] }
        ]},
        { id: 3, name: "Tercer Ciclo", courses: [
            { code: "T1622", name: "Fundamentos de Morfofisiología", credits: 8, type: "especifico", modality: "Presencial", 
              hours: { teorica: 64, practica: 128, total: 192 }, prerequisites: ["U0673", "U0105"] },
            { code: "T1710", name: "Lingüística y Fonética", credits: 2, type: "especialidad", modality: "No Presencial", 
              hours: { teorica: 32, practica: 0, total: 32 }, prerequisites: ["U0681"] },
            { code: "T0377", name: "Actividad Complementaria I", credits: 1, type: "general", modality: "Presencial", 
              hours: { teorica: 0, practica: 32, total: 32 }, prerequisites: [] },
            { code: "G0039", name: "Inglés 3", credits: 2, type: "general", modality: "No Presencial", 
              hours: { teorica: 0, practica: 64, total: 64 }, prerequisites: ["G0038"] }
        ]},
        { id: 4, name: "Cuarto Ciclo", courses: [
            { code: "T1653", name: "Estadística", credits: 2, type: "especifico", modality: "Semipresencial", 
              hours: { teorica: 32, practica: 32, total: 64 }, prerequisites: ["U0077"] },
            { code: "T1713", name: "Asignatura Electiva I", credits: 2, type: "especifico", modality: "Semipresencial", 
              hours: { teorica: 0, practica: 64, total: 64 }, prerequisites: [] },
            { code: "T1835", name: "Farmacología", credits: 3, type: "especifico", modality: "No Presencial", 
              hours: { teorica: 32, practica: 32, total: 64 }, prerequisites: ["T1622"] },
            { code: "T0684", name: "Fisiopatología General", credits: 4, type: "especifico", modality: "Presencial", 
              hours: { teorica: 32, practica: 32, total: 64 }, prerequisites: ["T1622"] },
            { code: "T1836", name: "Anatomía del Aparato Fonoarticulador y de la Audición", credits: 5, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 48, practica: 64, total: 112 }, prerequisites: ["T1622"] },
            { code: "T1387", name: "Neurociencias en Rehabilitación", credits: 4, type: "especifico", modality: "Presencial", 
              hours: { teorica: 32, practica: 32, total: 64 }, prerequisites: ["T1622"] },
            { code: "T0378", name: "Actividad Complementaria II", credits: 1, type: "general", modality: "Presencial", 
              hours: { teorica: 0, practica: 32, total: 32 }, prerequisites: [] },
            { code: "G0040", name: "Inglés 4", credits: 2, type: "general", modality: "No Presencial", 
              hours: { teorica: 0, practica: 64, total: 64 }, prerequisites: ["G0039"] }
        ]},
        { id: 5, name: "Quinto Ciclo", courses: [
            { code: "T1714", name: "Problemas de Aprendizaje en las Alteraciones del Lenguaje", credits: 5, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 48, practica: 64, total: 112 }, prerequisites: ["T1387"] },
            { code: "T1716", name: "Neurolingüística y Neuropsicología", credits: 3, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 32, practica: 32, total: 64 }, prerequisites: ["T1387"] },
            { code: "T0919", name: "Asignatura Electiva II", credits: 2, type: "especifico", modality: "Presencial", 
              hours: { teorica: 0, practica: 64, total: 64 }, prerequisites: [] },
            { code: "T1837", name: "Neurodesarrollo e Intervención Temprana", credits: 4, type: "especifico", modality: "Presencial", 
              hours: { teorica: 48, practica: 32, total: 80 }, prerequisites: ["T1387"] },
            { code: "T1838", name: "Mental Health and Rehabilitation with an Inclusive Perspective", credits: 2, type: "especifico", modality: "Semipresencial", 
              hours: { teorica: 16, practica: 32, total: 48 }, prerequisites: [] },
            { code: "T0887", name: "Patología de la Audición", credits: 3, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 32, practica: 32, total: 64 }, prerequisites: ["T1836"] },
            { code: "T0379", name: "Actividad Complementaria III", credits: 1, type: "general", modality: "Presencial", 
              hours: { teorica: 0, practica: 32, total: 32 }, prerequisites: [] }
        ]},
        { id: 6, name: "Sexto Ciclo", courses: [
            { code: "T1391", name: "Patología de Lenguaje y Habla en Niños", credits: 4, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 48, practica: 32, total: 80 }, prerequisites: ["T1714", "T1716"] },
            { code: "T1392", name: "Patología de Voz", credits: 4, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 48, practica: 32, total: 80 }, prerequisites: ["T1836"] },
            { code: "T0655", name: "Audiología y Adaptación de Prótesis", credits: 3, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 32, practica: 32, total: 64 }, prerequisites: ["T0887"] },
            { code: "T1393", name: "Patología de Lenguaje y Habla en Adultos", credits: 4, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 48, practica: 32, total: 80 }, prerequisites: ["T1714", "T1716", "T1837"] },
            { code: "T0654", name: "Alteraciones de la Motricidad Orofacial", credits: 4, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 48, practica: 32, total: 80 }, prerequisites: ["T1836"] },
            { code: "T0380", name: "Actividad Complementaria IV", credits: 1, type: "general", modality: "Presencial", 
              hours: { teorica: 0, practica: 32, total: 32 }, prerequisites: [] }
        ]},
        { id: 7, name: "Séptimo Ciclo", courses: [
            { code: "T0177", name: "Metodología de la Investigación", credits: 3, type: "especifico", modality: "Presencial", 
              hours: { teorica: 32, practica: 32, total: 64 }, prerequisites: ["T1653"] },
            { code: "T1659", name: "Ética y Deontología", credits: 2, type: "especifico", modality: "No Presencial", 
              hours: { teorica: 32, practica: 0, total: 32 }, prerequisites: ["U0688"] },
            { code: "T0261", name: "Rehabilitación de Lenguaje en Niños", credits: 4, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 48, practica: 32, total: 80 }, prerequisites: ["T1391"] },
            { code: "T0610", name: "Rehabilitación de la Voz", credits: 3, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 32, practica: 32, total: 64 }, prerequisites: ["T1392"] },
            { code: "T0520", name: "Rehabilitación del Habla en Niños", credits: 4, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 48, practica: 32, total: 80 }, prerequisites: ["T1391"] },
            { code: "T1396", name: "Rehabilitación de la Discapacidad Auditiva", credits: 4, type: "especialidad", modality: "Semipresencial", 
              hours: { teorica: 32, practica: 32, total: 64 }, prerequisites: ["T0887"] }
        ]},
        { id: 8, name: "Octavo Ciclo", courses: [
            { code: "T1660", name: "Epidemiología y Salud Pública", credits: 2, type: "especifico", modality: "No Presencial", 
              hours: { teorica: 16, practica: 32, total: 48 }, prerequisites: ["U0077"] },
            { code: "T1661", name: "Legislación en Salud", credits: 2, type: "especifico", modality: "No Presencial", 
              hours: { teorica: 32, practica: 0, total: 32 }, prerequisites: ["U0688"] },
            { code: "T1662", name: "Taller de Diseño de Proyecto de Investigación", credits: 2, type: "especifico", modality: "Presencial", 
              hours: { teorica: 0, practica: 64, total: 64 }, prerequisites: ["T0177"] },
            { code: "T1655", name: "Gestión y Administración en Servicios de Salud", credits: 3, type: "especifico", modality: "Semipresencial", 
              hours: { teorica: 32, practica: 32, total: 64 }, prerequisites: ["T0177"] },
            { code: "T0656", name: "Rehabilitación de las Alteraciones de la Motricidad Orofacial", credits: 4, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 48, practica: 32, total: 80 }, prerequisites: ["T0654"] },
            { code: "T0676", name: "Rehabilitación del Lenguaje y Habla en Adultos", credits: 4, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 48, practica: 32, total: 80 }, prerequisites: ["T1393"] },
            { code: "T1839", name: "Atención Comunitaria", credits: 4, type: "especifico", modality: "Presencial", 
              hours: { teorica: 32, practica: 64, total: 96 }, prerequisites: ["T1393"] }
        ]},
        { id: 9, name: "Noveno Ciclo", courses: [
            { code: "T1840", name: "Rotación I", credits: 11, type: "especifico", modality: "Presencial", 
              hours: { teorica: 0, practica: 352, total: 352 }, prerequisites: ["TODAS_1-4"] },
            { code: "T1841", name: "Rotación II", credits: 11, type: "especifico", modality: "Presencial", 
              hours: { teorica: 0, practica: 352, total: 352 }, prerequisites: ["TODAS_1-4"] }
        ]},
        { id: 10, name: "Décimo Ciclo", courses: [
            { code: "T1357", name: "Trabajo de Investigación", credits: 2, type: "especifico", modality: "Presencial", 
              hours: { teorica: 0, practica: 64, total: 64 }, prerequisites: ["T1662"] },
            { code: "T1843", name: "Rotación III", credits: 11, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 0, practica: 352, total: 352 }, prerequisites: ["TODAS_1-4"] },
            { code: "T1844", name: "Rotación IV", credits: 11, type: "especialidad", modality: "Presencial", 
              hours: { teorica: 0, practica: 352, total: 352 }, prerequisites: ["TODAS_1-4"] }
        ]}
    ]
};

// Variables globales
let currentHighlightedCourse = null;
let showPrereqs = false;

// Función para renderizar la malla
function renderMalla(filters = {}) {
    const mallaContainer = document.getElementById('malla-container');
    mallaContainer.innerHTML = '';
    
    // Crear contenedor para las líneas de prerrequisitos
    const linesContainer = document.createElement('div');
    linesContainer.className = 'lines-container';
    mallaContainer.appendChild(linesContainer);
    
    // Crear contenedor para los ciclos
    const cyclesContainer = document.createElement('div');
    cyclesContainer.className = 'cycles-container';
    mallaContainer.appendChild(cyclesContainer);
    
    // Verificar si hay resultados
    let hasResults = false;
    
    // Renderizar cada ciclo
    mallaData.cycles.forEach(cycle => {
        const cycleElement = document.createElement('div');
        cycleElement.className = 'cycle';
        
        // Título del ciclo
        const titleElement = document.createElement('div');
        titleElement.className = 'cycle-title';
        titleElement.textContent = cycle.name;
        cycleElement.appendChild(titleElement);
        
        // Lista de cursos
        const coursesList = document.createElement('div');
        coursesList.className = 'courses-list';
        
        // Renderizar cursos del ciclo
        let cycleHasVisibleCourses = false;
        
        cycle.courses.forEach(course => {
            // Aplicar filtros
            if (shouldShowCourse(course, filters)) {
                const courseElement = createCourseElement(course);
                coursesList.appendChild(courseElement);
                cycleHasVisibleCourses = true;
                hasResults = true;
            }
        });
        
        if (cycleHasVisibleCourses) {
            cycleElement.appendChild(coursesList);
            cyclesContainer.appendChild(cycleElement);
        }
    });
    
    // Mostrar mensaje si no hay resultados
    if (!hasResults) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'No se encontraron cursos que coincidan con los filtros';
        mallaContainer.appendChild(noResults);
    }
    
    // Dibujar líneas de prerrequisitos si están activas
    if (showPrereqs) {
        drawPrereqLines();
    }
}

// Función para determinar si un curso debe mostrarse según los filtros
function shouldShowCourse(course, filters) {
    // Filtro por ciclo
    if (filters.cycle && filters.cycle !== 'all' && course.cycle.toString() !== filters.cycle) {
        return false;
    }
    
    // Filtro por tipo
    if (filters.type && filters.type !== 'all' && course.type !== filters.type) {
        return false;
    }
    
    // Filtro por modalidad
    if (filters.modality && filters.modality !== 'all' && course.modality !== filters.modality) {
        return false;
    }
    
    // Filtro por búsqueda
    if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const courseName = course.name.toLowerCase();
        const courseCode = course.code.toLowerCase();
        
        if (!courseName.includes(searchTerm) && !courseCode.includes(searchTerm)) {
            return false;
        }
    }
    
    return true;
}

// Función para crear un elemento de curso
function createCourseElement(course) {
    const courseElement = document.createElement('div');
    courseElement.className = `course ${course.type}`;
    courseElement.dataset.code = course.code;
    
    const codeElement = document.createElement('div');
    codeElement.className = 'course-code';
    codeElement.textContent = course.code;
    
    const nameElement = document.createElement('div');
    nameElement.className = 'course-name';
    nameElement.textContent = course.name;
    
    courseElement.appendChild(codeElement);
    courseElement.appendChild(nameElement);
    
    courseElement.addEventListener('click', () => {
        showCourseInfo(course);
        
        // Resaltar el curso seleccionado
        if (currentHighlightedCourse) {
            currentHighlightedCourse.classList.remove('highlighted');
        }
        courseElement.classList.add('highlighted');
        currentHighlightedCourse = courseElement;
    });
    
    return courseElement;
}

// Función para mostrar información del curso
function showCourseInfo(course) {
    const infoContent = document.getElementById('info-content');
    const hoursContent = document.getElementById('hours-content');
    
    // Obtener nombres de prerrequisitos
    const prereqs = course.prerequisites.map(code => {
        if (code === "TODAS_1-4") return "Todos los cursos de los primeros 4 ciclos";
        
        for (const cycle of mallaData.cycles) {
            const foundCourse = cycle.courses.find(c => c.code === code);
            if (foundCourse) return `${code} - ${foundCourse.name}`;
        }
        return code;
    });
    
    // Mostrar información básica
    infoContent.innerHTML = `
        <div class="course-detail"><strong>Código:</strong> ${course.code}</div>
        <div class="course-detail"><strong>Nombre:</strong> ${course.name}</div>
        <div class="course-detail"><strong>Créditos:</strong> ${course.credits}</div>
        <div class="course-detail"><strong>Tipo:</strong> ${capitalizeFirstLetter(course.type)}</div>
        <div class="course-detail"><strong>Modalidad:</strong> ${course.modality}</div>
        <div class="course-detail"><strong>Ciclo:</strong> ${course.cycle}</div>
        <div class="course-detail"><strong>Prerrequisitos:</strong> ${prereqs.length > 0 ? prereqs.join(', ') : 'Ninguno'}</div>
    `;
    
    // Mostrar horas lectivas
    hoursContent.innerHTML = `
        <div class="hours-detail">
            <div class="hours-item">
                <strong>Teóricas</strong>
                <span>${course.hours.teorica} horas</span>
            </div>
            <div class="hours-item">
                <strong>Prácticas</strong>
                <span>${course.hours.practica} horas</span>
            </div>
            <div class="hours-item">
                <strong>Total</strong>
                <span>${course.hours.total} horas</span>
            </div>
        </div>
    `;
}

// Función para dibujar líneas de prerrequisitos
function drawPrereqLines() {
    const linesContainer = document.querySelector('.lines-container');
    linesContainer.innerHTML = '';
    
    // Crear un SVG para las líneas
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.style.position = 
