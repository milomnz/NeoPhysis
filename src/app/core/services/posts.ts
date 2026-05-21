import { Injectable } from '@angular/core';
import {
  Post, Recomendado, ValorCard,
  MisionCard, CarouselSlide, Sugerencia
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
      {
        id: 1,
        img: 'https://picsum.photos/seed/agro1/600/340',
        titulo: 'Avances en agricultura sostenible en el Eje Cafetero',
        desc: 'Un recorrido por nuevas técnicas de cultivo y biotecnología aplicadas al territorio colombiano.',
        votos: 230,
        comentarios: 42,
        categoria: 'AGROECOLOGÍA',
        categoriaColor: '#e0f0ea',
        autor: 'Dr. Carlos Rivas',
        avatar: 'https://picsum.photos/seed/autor1/40/40',
        tiempo: 'Hace 1 hora'
      },
      {
        id: 2,
        img: 'https://picsum.photos/seed/agro2/600/340',
        titulo: 'Biología sintética y agroecosistemas: el futuro del campo',
        desc: 'Cómo la biología sintética impulsa soluciones innovadoras para el campo colombiano.',
        votos: 178,
        comentarios: 31,
        categoria: 'BIOTECNOLOGÍA',
        categoriaColor: '#e8f4fd',
        autor: 'Ana Milena Torres',
        avatar: 'https://picsum.photos/seed/autor2/40/40',
        tiempo: 'Hace 3 horas'
      }
    ];
  }

  getSugerencias(): Sugerencia[] {
    return [
      {
        id: 1,
        autor: 'Dr. Julian V.',
        avatar: 'https://picsum.photos/seed/doc1/40/40',
        tiempo: 'Hace 2 horas',
        categoria: 'BIOTECNOLOGÍA',
        categoriaColor: '#e0f0ea',
        titulo: 'La importancia de la biotecnología en la seguridad alimentaria global',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst.',
        votos: 124,
        comentarios: 48
      },
      {
        id: 2,
        autor: 'Sarah Chen',
        avatar: 'https://picsum.photos/seed/doc2/40/40',
        tiempo: 'Hace 5 horas',
        categoria: 'INVESTIGACIÓN',
        categoriaColor: '#e0eaf5',
        titulo: 'Metodologías emergentes en la secuenciación de nanoporos',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst.',
        votos: 89,
        comentarios: 22
      }
    ];
  }

  getRecomendados(): Recomendado[] {
    return [
      { id: 1, img1: '/assets/images/recom1.jpg', img2: '/assets/images/recom2.jpg', titulo: 'Investigación destacada', desc: 'Conoce innovaciones en biotecnología.', likes: '1.2k', shares: '420', comments: '86' },
      { id: 2, img1: '/assets/images/recom3.jpg', img2: '/assets/images/recom4.jpg', titulo: 'Nuevo hallazgo', desc: 'Proyectos que impulsan el conocimiento agro.', likes: '980', shares: '210', comments: '47' }
    ];
  }

  getValores(): ValorCard[] {
    return [
      { id: 1, icono: '🌱', titulo: 'Sostenibilidad', desc: 'Prácticas responsables que protegen nuestro planeta.', likes: '1.2k', shares: '1.2k', comments: '1.2k' },
      { id: 2, icono: '🔬', titulo: 'Innovación', desc: 'Nuevas ideas para resolver problemas reales.', likes: '1.2k', shares: '1.2k', comments: '1.2k' }
    ];
  }

  getMisiones(): MisionCard[] {
    return [
      { id: 1, img: '/assets/images/valor-1.jpg', titulo: 'Misión', desc: 'Impulsar la divulgación científica.' },
      { id: 2, img: '/assets/images/about-footer.jpg', titulo: 'Misión', desc: 'Colaboración interdisciplinaria para soluciones sostenibles.' }
    ];
  }
}