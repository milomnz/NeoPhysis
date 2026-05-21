export interface Post {
    id: number;
    img: string;
    titulo: string;
    desc: string;
    likes: string;
    shares: string;
    comments: string;
}

export interface Recomendado {
    id: number;
    img1: string;
    img2: string;
    titulo: string;
    desc: string;
    likes: string;
    shares: string;
    comments: string;
}

export interface ValorCard {
    id: number;
    icono: string;
    titulo: string;
    desc: string;
    likes: string;
    shares: string;
    comments: string;
}

export interface MisionCard {
    id: number;
    img: string;
    titulo: string;
    desc: string;
}

export interface CarouselSlide {
    id: number;
    img: string;
    titulo: string;
    subtitulo: string;
}