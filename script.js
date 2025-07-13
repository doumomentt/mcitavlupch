const mallaData = {
    cycles: [
        { id: 1, name: "Primer Ciclo", courses: [
            { code: "U0112", name: "Técnicas Básicas en Atención de Salud", credits: 2, type: "Específico", modality: "Presencial", prerequisites: [] },
            { code: "U0002", name: "Elementos de Química", credits: 4, type: "General", modality: "Presencial", prerequisites: [] },
            { code: "U0077", name: "Matemáticas Básicas", credits: 4, type: "General", modality: "Presencial", prerequisites: [] },
            { code: "U0162", name: "Introducción a la Terapia de Lenguaje", credits: 1, type: "Específico", modality: "Presencial", prerequisites: [] },
            { code: "U0684", name: "Filosofía y Ética", credits: 3, type: "General", modality: "No Presencial", prerequisites: [] },
            { code: "U0685", name: "Desarrollo Personal y Autonomía", credits: 2, type: "General", modality: "Semipresencial", prerequisites: [] },
            { code: "U0686", name: "Comunicación y Redacción I", credits: 3, type: "General", modality: "No Presencial", prerequisites: [] },
            { code: "G0037", name: "Inglés 1", credits: 2, type: "General", modality: "No Presencial", prerequisites: [] }
        ]},
        { id: 2, name: "Segundo Ciclo", courses: [
            { code: "U0105", name: "Fundamentos de Química Orgánica", credits: 4, type: "Específico", modality: "Presencial", prerequisites: ["U0002"] },
            { code: "U0673", name: "Biología General", credits: 4, type: "General", modality: "Presencial", prerequisites: [] },
            { code: "U0677", name: "Física Básica", credits: 4, type: "Específico", modality: "Presencial", prerequisites: ["U0077"] },
            { code: "U0681", name: "Comunicación y Redacción II", credits: 3, type: "General", modality: "No Presencial", prerequisites: ["U0686"] },
            { code: "U0683", name: "Cultura Ambiental y Desarrollo Sostenible", credits: 1, type: "General", modality: "No Presencial", prerequisites: [] },
            { code: "U0687", name: "Pensamiento Científico e Investigación", credits: 2, type: "Específico", modality: "No Presencial", prerequisites: [] },
            { code: "U0688", name: "Ciencias Sociales en el Contexto Actual", credits: 3, type: "General", modality: "No Presencial", prerequisites: [] },
            { code: "G0038", name: "Inglés 2", credits: 2, type: "General", modality: "No Presencial", prerequisites: ["G0037"] }
        ]},
        { id: 3, name: "Tercer Ciclo", courses: [
            { code: "T1622", name: "Fundamentos de Morfofisiología", credits: 8, type: "Específico", modality: "Presencial", prerequisites: ["U0673", "U0105"] },
            { code: "T1710", name: "Lingüística y Fonética", credits: 2, type: "Especialidad", modality: "No Presencial", prerequisites: ["U0681"] },
            { code: "T0377", name: "Actividad Complementaria I", credits: 1, type: "General", modality: "Presencial", prerequisites: [] },
            { code: "G0039", name: "Inglés 3", credits: 2, type: "General", modality: "No Presencial", prerequisites: ["G0038"] }
        ]},
        { id: 4, name: "Cuarto Ciclo", courses: [
            { code: "T1653", name: "Estadística", credits: 2, type: "Específico", modality: "Semipresencial", prerequisites: ["U0077"] },
            { code: "T1713", name: "Asignatura Electiva I", credits: 2, type: "Específico", modality: "Semipresencial", prerequisites: [] },
            { code: "T1835", name: "Farmacología", credits: 3, type: "Específico", modality: "No Presencial", prerequisites: ["T1622"] },
            { code: "T0684", name: "Fisiopatología General", credits: 4, type: "Específico", modality: "Presencial", prerequisites: ["T1622"] },
            { code: "T1836", name: "Anatomía del Aparato Fonoarticulador y de la Audición", credits: 5, type: "Especialidad", modality: "Presencial", prerequisites: ["T1622"] },
            { code: "T1387", name: "Neurociencias en Rehabilitación", credits: 4, type: "Específico", modality: "Presencial", prerequisites: ["T1622"] },
            { code: "T0378", name: "Actividad Complementaria II", credits: 1, type: "General", modality: "Presencial", prerequisites: [] },
            { code: "G0040", name: "Inglés 4", credits: 2, type: "General", modality: "No Presencial", prerequisites: ["G0039"] }
        ]},
        { id: 5, name: "Quinto Ciclo", courses: [
            { code: "T1714", name: "Problemas de Aprendizaje en las Alteraciones del Lenguaje", credits: 5, type: "Especialidad", modality: "Presencial", prerequisites: ["T1387"] },
            { code: "T1716", name: "Neurolingüística y Neuropsicología", credits: 3, type: "Especialidad", modality: "Presencial", prerequisites: ["T1387"] },
            { code: "T0919", name: "Asignatura Electiva II", credits: 2, type: "Específico", modality: "Presencial", prerequisites: [] },
            { code: "T1837", name: "Neurodesarrollo e Intervención Temprana", credits: 4, type: "Específico", modality: "Presencial", prerequisites: ["T1387"] },
            { code: "T1838", name: "Mental Health and Rehabilitation with an Inclusive Perspective", credits: 2, type: "Específico", modality: "Semipresencial", prerequisites: [] },
            { code: "T0887", name: "Patología de la Audición", credits: 3, type: "Especialidad", modality: "Presencial", prerequisites: ["T1836"] },
            { code: "T0379", name: "Actividad Complementaria III", credits: 1, type: "General", modality: "Presencial", prerequisites: [] }
        ]},
        { id: 6, name: "Sexto Ciclo", courses: [
            { code: "T1391", name: "Patología de Lenguaje y Habla en Niños", credits: 4, type: "Especialidad", modality: "Presencial", prerequisites: ["T1714", "T1716"] },
            { code: "T1392", name: "Patología de Voz", credits: 4, type: "Especialidad", modality: "Presencial", prerequisites: ["T1836"] },
            { code: "T0655", name: "Audiología y Adaptación de Prótesis", credits: 3, type: "Especialidad", modality: "Presencial", prerequisites: ["T0887"] },
            { code: "T1393", name: "Patología de Lenguaje y Habla en Adultos", credits: 4, type: "Especialidad", modality: "Presencial", prerequisites: ["T1714", "T1716", "T1837"] },
            { code: "T0654", name: "Alter
