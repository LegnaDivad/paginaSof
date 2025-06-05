import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import ArcoRecrea from '../../components/ArcoRecrea/ArcoRecrea';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const testimonios = [
  {
    usuario: 'María López',
    texto: 'Una plataforma innovadora que impulsa el trabajo colaborativo y el liderazgo educativo.',
    estrellas: 5,
  },
  {
    usuario: 'Carlos Méndez',
    texto: 'Recrea Academy me conectó como un espacio donde puedo compartir y aprender con colegas.',
    estrellas: 4,
  },
  {
    usuario: 'Ana Gómez',
    texto: 'Me encantó el diseño y organización de los módulos. ¡Muy útil para fortalecer mi práctica!',
    estrellas: 5,
  },
  {
    usuario: 'Luis Fernández',
    texto: 'Gracias a Recrea ahora tengo acceso a recursos actualizados y confiables.'
  },
  {
    usuario: 'Sofía Ramírez',
    texto: 'Las recomendaciones que ofrece la plataforma han mejorado mi planeación diaria.'
  },
  {
    usuario: 'Jorge Martínez',
    texto: 'Siento que pertenezco a una comunidad real de aprendizaje entre docentes.'
  },
  {
    usuario: 'Elena Torres',
    texto: 'La sección de innovaciones me inspira a probar nuevas metodologías cada semana.'
  },
  {
    usuario: 'Miguel Sánchez',
    texto: 'Gracias a esta plataforma, he podido compartir recursos útiles con colegas.'
  },
  {
    usuario: 'Laura Castillo',
    texto: 'Una excelente herramienta para el desarrollo profesional docente.'
  },
  {
    usuario: 'Diego Herrera',
    texto: 'La navegación es sencilla y las actividades están muy bien estructuradas.'
  },
  {
    usuario: 'Valeria Cruz',
    texto: 'Recrea Academy me ha motivado a innovar en mis clases con nuevas metodologías.'
  }
];

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [nuevoComentario, setNuevoComentario] = useState({ usuario: '', texto: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nuevoComentario);
    setShowModal(false);
    setNuevoComentario({ usuario: '', texto: '' });
  };

  return (
    <Layout>
      <div className="inicio-container">
        <ArcoRecrea isOnClickDisabled displayHalf>
          <div className="texto-centro-arco">
            <h1>Recrea <span>Academy</span></h1>
            <div class='anio-container'><p className="anio">2025</p></div>
          </div>
        </ArcoRecrea>

        <div className="inicio-content">
          <img src={`${import.meta.env.BASE_URL}src/assets/portada-docentes.jpg`} alt="Docentes" className="portada-img" />
          <h2 className="frase-principal">
            Una comunidad para docentes que inspiran y transforman
          </h2>
          <button className="btn-empezar">Empieza</button>
          <h3 className="subtitulo">Más que una plataforma</h3>
          <p className="descripcion">
            Un espacio creado por y para docentes de Jalisco que creen en el poder de la educación con propósito en comunidad.
          </p>
        </div>

        <div className="testimonios-section">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 250,
              modifier: 3,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonios-swiper"
          >
            {testimonios.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="testimonio-card">
                  <h4>{t.usuario}</h4>
                  <p>{t.texto}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="opinion-btn-container">
          <button className="btn-opinion" onClick={() => setShowModal(true)}>Déjanos tu opinión</button>
        </div>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>Tu Testimonio</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={nuevoComentario.usuario}
                  onChange={(e) => setNuevoComentario({ ...nuevoComentario, usuario: e.target.value })}
                  required
                />
                <textarea
                  placeholder="Escribe tu comentario"
                  value={nuevoComentario.texto}
                  onChange={(e) => setNuevoComentario({ ...nuevoComentario, texto: e.target.value })}
                  required
                />
                <div className="modal-buttons">
                  <button type="submit">Enviar</button>
                  <button type="button" onClick={() => setShowModal(false)}>Cancelar</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;