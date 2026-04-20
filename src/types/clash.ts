export interface IconUrls {
    medium: string;
    evolutionMedium?: string;            // El signo de interrogación indica que es opcional, ya que úede o no tener este atributo
    heroMedium?: string;                   // Con este igual
}

export interface Carta {
    name: string;
    maxLevel: number;
    rarity: string;
    iconUrls: IconUrls;
}