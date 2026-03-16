import { describe, it, expect, beforeAll, beforeEach, afterEach, vi } from 'vitest';
import { formatDate } from '../src/dateTimeFormatter';
import { setUserLocale } from '../src/core';

const testDate = new Date('2023-10-05T14:30:00.000Z');

describe('dateTimeFormatter', () => {
  beforeEach(() => {
    vi.stubEnv('TZ', 'UTC');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  describe('formatDate', () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale('en-US');
      });

      it('should format date with short style', () => {
        const result = formatDate(testDate, { dateStyle: 'short', timeStyle: 'short' });
        expect(result).toBe('10/5/23, 2:30 PM');
      });

      it('should format date with long style', () => {
        const result = formatDate(testDate, { dateStyle: 'long', timeStyle: "long" });
        expect(result).toBe('October 5, 2023 at 2:30:00 PM UTC');
      });

      it('should format date with custom options', () => {
        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit', 
          minute: '2-digit' 
        };
        const result = formatDate(testDate, options);
        expect(result).toBe('October 5, 2023 at 02:30 PM');
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale('fr-FR');
      });

      it('should format date with short style', () => {
        const result = formatDate(testDate, { dateStyle: 'short', timeStyle: 'short' });
        expect(result).toBe('05/10/2023 14:30');
      });

      it('should format date with long style', () => {
        const result = formatDate(testDate, { dateStyle: 'long', timeStyle: "long" });
        expect(result).toBe('5 octobre 2023 à 14:30:00 UTC');
      });

      it('should format date with custom options', () => {
        const options: Intl.DateTimeFormatOptions = {
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit', 
          minute: '2-digit' 
        };
        const result = formatDate(testDate, options);
        expect(result).toBe('5 octobre 2023 à 14:30');
      });
    });
  });
});