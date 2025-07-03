import { describe, it, expect } from 'vitest';
import tiger from '../tiger.js';

describe('Tiger', () => {
    it('should return foods the tiger eats', () => {
        expect(tiger.eats(['beef', 'lettuce', 'chicken'])).toEqual(['beef', 'chicken']);
    });

    it('should return foods the tiger spits out', () => {
        expect(tiger.spitsOut(['lettuce', 'fish', 'beef'])).toEqual(['lettuce', 'fish']);
    });
});
