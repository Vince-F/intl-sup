import { describe, it, expect, beforeAll } from 'vitest';
import { formatNumber, formatNumberWithoutDecimal } from '../src/numberFormatter';
import { setUserLocale } from '../src/core';

describe('numberFormatter', () => {
  beforeAll(() => {
    setUserLocale('en-US');
  });

  describe('formatNumber', () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale('en-US');
      });

      it('should format number correctly', () => {
        const result = formatNumber(1234.56);
        expect(result).toEqual('1,234.56');
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale('fr-FR');
      });

      it('should format number correctly', () => {
        const result = formatNumber(1234.56);
        expect(result).toMatch(/1\s234,56/);
      });
    });
  });

  describe('formatNumberWithoutDecimal', () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale('en-US');
      });
      it('should format number without decimals using round', () => {
        const result = formatNumberWithoutDecimal(1234.56, 'round');
        expect(result).toEqual('1,235');
      });

      it('should format number without decimals using ceil', () => {
        const result = formatNumberWithoutDecimal(1234.56, 'ceil');
        expect(result).toEqual('1,235');
      });

      it('should format number without decimals using floor', () => {
        const result = formatNumberWithoutDecimal(1234.56, 'floor');
        expect(result).toEqual('1,234');
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale('fr-FR');
      });

      it('should format number without decimals using round', () => {
        const result = formatNumberWithoutDecimal(1234.56, 'round');
        expect(result).toMatch(/1\s235/);
      });

      it('should format number without decimals using ceil', () => {
        const result = formatNumberWithoutDecimal(1234.56, 'ceil');
        expect(result).toMatch(/1\s235/);
      });

      it('should format number without decimals using floor', () => {
        const result = formatNumberWithoutDecimal(1234.56, 'floor');
        expect(result).toMatch(/1\s234/);
      });
    });    
  });
});
