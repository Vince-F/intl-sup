import { describe, it, expect, beforeAll } from 'vitest';
import { formatDate } from '../src/dateTimeFormatter';
import { setUserLocale } from '../src/core';

describe('dateTimeFormatter', () => {
  beforeAll(() => {
    setUserLocale('en-US');
  });

  describe('formatDate', () => {
    const testDate = new Date('2023-10-05T14:30:00');

    it('should format date with short style', () => {
      const result = formatDate(testDate, 'short');
      expect(result).toBe('10/5/23');
    });

    it('should format date with long style', () => {
      const result = formatDate(testDate, 'long');
      expect(result).toBe('October 5, 2023');
    });

    it('should format date with custom options', () => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const result = formatDate(testDate, options);
      expect(result).toBe('October 5, 2023');
    });
  });
});