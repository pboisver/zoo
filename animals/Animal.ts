export interface Animal {
    name: string;
    eats: (foods: string[]) => string[];
    spitsOut: (foods: string[]) => string[];
}
