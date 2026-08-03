import {
  BookOpen,
  Apple,
  Stethoscope,
  HandHeart,
} from "lucide-react";

import educacionImg from "../assets/images/programs/educacion.png";
import nutricionImg from "../assets/images/programs/nutricion.png";
import jornadasImg from "../assets/images/programs/jornadas.png";
import apoyoImg from "../assets/images/programs/apoyo.png";

const programs = [
  {
    id: "educacion",

    icon: BookOpen,

    title: "Educación en Diabetes",

    shortDescription:
      "Capacitamos a pacientes y familias para un mejor manejo de la diabetes.",

    link: "/programas/educacion",

    bannerTitle: "Educación en Diabetes",

    subtitle: "Aprender es el primer paso para vivir mejor.",

    description:
      "Nuestro programa brinda talleres, charlas y actividades educativas para que las personas con diabetes y sus familias comprendan mejor la enfermedad, aprendan a prevenir complicaciones y desarrollen hábitos saludables.",

    image: educacionImg,

    stats: {
      number: "+500",
      text: "Personas beneficiadas",
    },

    features: [
      {
        title: "Educación",
        description: "Talleres interactivos para pacientes y familiares.",
      },
      {
        title: "Prevención",
        description: "Detección temprana de complicaciones.",
      },
      {
        title: "Acompañamiento",
        description: "Seguimiento continuo del paciente.",
      },
      {
        title: "Comunidad",
        description: "Apoyo para pacientes y sus familias.",
      },
    ],

    objectives: [
      "Promover el autocuidado.",
      "Educar a pacientes y familias.",
      "Reducir complicaciones.",
      "Fomentar hábitos saludables.",
    ],

    benefits: [
      "Material educativo.",
      "Charlas con especialistas.",
      "Acompañamiento continuo.",
      "Orientación personalizada.",
    ],

    gallery: [
      educacionImg,
      educacionImg,
      educacionImg,
    ],

    testimonial: {
      text:
        "Gracias a este programa aprendí a controlar mejor mi diabetes y hoy tengo una mejor calidad de vida.",
      name: "María López",
      role: "Beneficiaria",
    },

    cta: {
      title: "Forma parte de este programa",
      description:
        "Únete a nuestras actividades educativas y aprende a vivir mejor con diabetes.",
      button: "Contáctanos",
    },
  },

  {
    id: "nutricion",

    icon: Apple,

    title: "Nutrición Saludable",

    shortDescription:
      "Promovemos una alimentación balanceada para mejorar la calidad de vida.",

    link: "/programas/nutricion",

    bannerTitle: "Nutrición Saludable",

    subtitle: "La buena alimentación también es medicina.",

    description:
      "Brindamos asesoría nutricional y educación alimentaria para ayudar a las personas con diabetes a mantener una dieta saludable y equilibrada.",

    image: nutricionImg,

    stats: {
      number: "+350",
      text: "Pacientes orientados",
    },

    features: [
      {
        title: "Alimentación",
        description: "Planes alimenticios personalizados.",
      },
      {
        title: "Nutrición",
        description: "Asesoría profesional continua.",
      },
      {
        title: "Prevención",
        description: "Control del peso y glucosa.",
      },
      {
        title: "Bienestar",
        description: "Hábitos saludables para toda la familia.",
      },
    ],

    objectives: [
      "Crear hábitos saludables.",
      "Reducir factores de riesgo.",
      "Mejorar la alimentación.",
      "Promover estilos de vida activos.",
    ],

    benefits: [
      "Asesoría nutricional.",
      "Plan alimenticio.",
      "Recetas saludables.",
      "Seguimiento profesional.",
    ],

    gallery: [
      nutricionImg,
      nutricionImg,
      nutricionImg,
    ],

    testimonial: {
      text:
        "Aprendí a alimentarme mejor y ahora controlo mucho mejor mis niveles de glucosa.",
      name: "Carlos Hernández",
      role: "Participante",
    },

    cta: {
      title: "Mejora tus hábitos alimenticios",
      description:
        "Recibe orientación nutricional y aprende a cuidar tu salud todos los días.",
      button: "Solicitar información",
    },
  },

    {
    id: "jornadas",

    icon: Stethoscope,

    title: "Jornadas Médicas",

    shortDescription:
      "Realizamos brigadas médicas y campañas preventivas.",

    link: "/programas/jornadas",

    bannerTitle: "Jornadas Médicas",

    subtitle: "La prevención puede cambiar una vida.",

    description:
      "Acercamos servicios médicos gratuitos a comunidades mediante jornadas de atención integral, controles de glucosa y educación preventiva.",

    image: jornadasImg,

    stats: {
      number: "+120",
      text: "Jornadas realizadas",
    },

    features: [
      {
        title: "Consultas",
        description: "Atención médica gratuita para la comunidad.",
      },
      {
        title: "Glucosa",
        description: "Controles preventivos y seguimiento.",
      },
      {
        title: "Charlas",
        description: "Educación sobre prevención de la diabetes.",
      },
      {
        title: "Detección",
        description: "Diagnóstico oportuno de factores de riesgo.",
      },
    ],

    objectives: [
      "Detección temprana.",
      "Promover la prevención.",
      "Facilitar atención médica.",
      "Educar a la comunidad.",
    ],

    benefits: [
      "Consultas médicas.",
      "Control de glucosa.",
      "Charlas preventivas.",
      "Referencia a especialistas.",
    ],

    gallery: [
      jornadasImg,
      jornadasImg,
      jornadasImg,
    ],

    testimonial: {
      text:
        "Las jornadas médicas permitieron que muchas personas recibieran atención gratuita y orientación profesional.",
      name: "José Martínez",
      role: "Beneficiario",
    },

    cta: {
      title: "Participa en nuestras jornadas",
      description:
        "Conoce las próximas brigadas médicas y recibe atención preventiva sin costo.",
      button: "Ver jornadas",
    },
  },

  {
    id: "apoyo",

    icon: HandHeart,

    title: "Apoyo Comunitario",

    shortDescription:
      "Creamos redes de apoyo para pacientes y familias.",

    link: "/programas/apoyo",

    bannerTitle: "Apoyo Comunitario",

    subtitle: "Nadie debe enfrentar la diabetes solo.",

    description:
      "Promovemos grupos de apoyo, actividades comunitarias y voluntariado para fortalecer el bienestar emocional y social de las personas con diabetes.",

    image: apoyoImg,

    stats: {
      number: "+200",
      text: "Familias apoyadas",
    },

    features: [
      {
        title: "Apoyo",
        description: "Grupos de acompañamiento y orientación.",
      },
      {
        title: "Voluntariado",
        description: "Red de ayuda comunitaria.",
      },
      {
        title: "Familia",
        description: "Integración familiar y actividades sociales.",
      },
      {
        title: "Bienestar",
        description: "Acompañamiento emocional permanente.",
      },
    ],

    objectives: [
      "Fortalecer la comunidad.",
      "Brindar apoyo emocional.",
      "Impulsar el voluntariado.",
      "Promover la integración familiar.",
    ],

    benefits: [
      "Grupos de apoyo.",
      "Actividades recreativas.",
      "Voluntariado.",
      "Acompañamiento social.",
    ],

    gallery: [
      apoyoImg,
      apoyoImg,
      apoyoImg,
    ],

    testimonial: {
      text:
        "Encontré personas que me apoyan y comprendí que no estoy solo en este proceso.",
      name: "Ana Gómez",
      role: "Participante",
    },

    cta: {
      title: "Únete a nuestra comunidad",
      description:
        "Forma parte de nuestros grupos de apoyo y comparte experiencias con otras familias.",
      button: "Unirme ahora",
    },
  },
];

export default programs;