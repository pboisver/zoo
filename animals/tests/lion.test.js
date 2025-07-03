import { describe, it, expect } from 'vitest';
import lion from '../lion.js';

describe('Lion', () => {
    it('should return foods the lion eats', () => {
        expect(lion.eats(['beef', 'lettuce', 'chicken'])).toEqual(['beef', 'chicken']);
    });

    it('should return foods the lion spits out', () => {
        expect(lion.spitsOut(['lettuce', 'honey', 'beef'])).toEqual(['lettuce', 'honey']);
    });
});
