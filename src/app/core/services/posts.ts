import { Injectable } from '@angular/core';
import {
  Post, Recomendado, ValorCard,
  MisionCard, CarouselSlide
} from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {

  getSlides(): CarouselSlide[] {
    return [
      { id: 1, img: '/assets/images/slide-1.jpg', titulo: 'Descubre la ciencia', subtitulo: 'Explora investigaciones que transforman el mundo' },
      { id: 2, img: '/assets/images/slide-2.jpg', titulo: 'Comparte tu conocimiento', subtitulo: 'Publica tus foros y conecta con investigadores' },
      { id: 3, img: '/assets/images/slide-3.jpg', titulo: 'Investiga sin límites', subtitulo: 'Una comunidad comprometida con el futuro del planeta' }
    ];
  }

  getPosts(): Post[] {
    return [
      { id: 1, img: '/assets/images/post-1.jpg', titulo: 'Titulo del post en tendencias', desc: 'Resumen corto del post A relacionado con investigación agro', likes: '1.2k', shares: '1.2k', comments: '1.2k' },
      { id: 2, img: '/assets/images/post-2.jpg', titulo: 'Titulo del post en tendencias', desc: 'Resumen corto del post B relacionado con investigación agro', likes: '1.2k', shares: '1.2k', comments: '1.2k' }
    ];
  }

  getRecomendados(): Recomendado[] {
    return [
      { id: 1, img1: '/assets/images/recom1.jpg', img2: '/assets/images/recom2.jpg', titulo: 'Investigación destacada', desc: 'Conoce innovaciones en biotecnología y sostenibilidad.', likes: '1.2k', shares: '420', comments: '86' },
      { id: 2, img1: '/assets/images/recom3.jpg', img2: '/assets/images/recom4.jpg', titulo: 'Nuevo hallazgo', desc: 'Descubre proyectos que impulsan el conocimiento agroambiental.', likes: '980', shares: '210', comments: '47' },
      { id: 3, img1: '/assets/images/recom5.jpg', img2: '/assets/images/recom6.jpg', titulo: 'Tendencias científicas', desc: 'Proyectos recientes que marcan la agenda del desarrollo sostenible.', likes: '1.0k', shares: '290', comments: '63' },
      { id: 4, img1: '/assets/images/recom7.jpg', img2: '/assets/images/recom8.jpg', titulo: 'Proyectos emergentes', desc: 'Historias relevantes sobre innovación y responsabilidad ambiental.', likes: '860', shares: '190', comments: '32' },
      { id: 5, img1: '/assets/images/recom9.jpg', img2: '/assets/images/recom10.jpg', titulo: 'Conexión interdisciplinaria', desc: 'Investigaciones que combinan ciencia, tecnología y naturaleza.', likes: '1.3k', shares: '510', comments: '92' },
      { id: 6, img1: '/assets/images/recom11.jpg', img2: '/assets/images/recom12.jpg', titulo: 'Casos de estudio', desc: 'Ejemplos prácticos de impacto y resultados científicos.', likes: '920', shares: '230', comments: '58' }
    ];
  }

  getValores(): ValorCard[] {
    return [
      { id: 1, icono: '🌱', titulo: 'Sostenibilidad', desc: 'Promovemos prácticas responsables que protejan y restauren el equilibrio de nuestro planeta.', likes: '1.2k', shares: '1.2k', comments: '1.2k' },
      { id: 2, icono: '🤝', titulo: 'Conexión', desc: 'Fomentamos una comunidad unida por el respeto y el amor a nuestra naturaleza.', likes: '1.2k', shares: '1.2k', comments: '1.2k' },
      { id: 3, icono: '🔬', titulo: 'Investigación', desc: 'Apoyamos la ciencia y la exploración para entender mejor nuestro mundo.', likes: '1.2k', shares: '1.2k', comments: '1.2k' },
      { id: 4, icono: '📖', titulo: 'Educación', desc: 'Creemos en el poder del conocimiento para inspirar cambios positivos.', likes: '1.2k', shares: '1.2k', comments: '1.2k' }
    ];
  }

  getMisiones(): MisionCard[] {
    return [
      { id: 1, img: '/assets/images/valor-1.jpg', titulo: 'Misión', desc: 'Impulsar la divulgación científica y la colaboración interdisciplinaria para transformar el conocimiento en soluciones sostenibles, fomentando una comunidad comprometida con la investigación, la innovación y el cuidado del entorno natural.' },
      { id: 2, img: '/assets/images/about-footer.jpg', titulo: 'Misión', desc: 'Impulsar la divulgación científica y la colaboración interdisciplinaria para transformar el conocimiento en soluciones sostenibles, fomentando una comunidad comprometida con la investigación, la innovación y el cuidado del entorno natural.' }
    ];
  }
}