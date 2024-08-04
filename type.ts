export type Movies = {
    backdrop_path: string;
    id: number;
    overview: string;
    title: string;
    poster_path: string;
    release_date?: string;
    vote_average?: number;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export type MoviesTrending = {
    backdrop_path: string;
    id: number;
    overview: string;
    title: string;
};

export type MoviesGenres = {
    name: string;
    id: number;
};

export type ModalProps = {
    onClose: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
    title: string;
    id: number;
    overview: string;
    backdrop_path: string;
    release_date: string | undefined;
    vote_average: number | undefined;
};

export type MoviesRating = {
    rating: number;
};