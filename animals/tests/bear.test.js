import { describe, it, expect } from 'vitest';
import bear from '../bear.js';

describe('Bear', () => {
    it('should return foods the bear eats', () => {
        expect(bear.eats(['fish', 'honey', 'beef'])).toEqual(['fish', 'honey']);
    });

    it('should return foods the bear spits out', () => {
        expect(bear.spitsOut(['beef', 'lettuce', 'fish'])).toEqual(['beef', 'lettuce']);
    });
});
