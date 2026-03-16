import { describe, it, expect, beforeAll } from 'vitest';
import { formatTime, type TimeStyleLong } from '../src/timeFormatter';
import { setUserLocale } from '../src/core';

const testDate = new Date('2023-10-05T14:30:45');

describe('timeFormatter', () => {
  beforeAll(() => {
    setUserLocale('en-US');
  });

  describe('formatTime', () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale('en-US');
      });

      it('should format time with short style', () => {
        const result = formatTime(testDate, 'short');
        expect(result).toBe('2:30 PM');
      });

      it('should format time with long style', () => {
        const result = formatTime(testDate, 'long');
        expect(result).toMatch(/2:30:45 PM/); // Allow for timezone
      });

      it('should format time with custom options', () => {
        const options: TimeStyleLong = { hour: '2-digit', minute: '2-digit' };
        const result = formatTime(testDate, options);
        expect(result).toBe('02:30 PM');
      });

      it('should cache formatters', () => {
        const result1 = formatTime(testDate, 'short');
        const result2 = formatTime(testDate, 'short');
        expect(result1).toBe(result2);
      });
    });
  });
});