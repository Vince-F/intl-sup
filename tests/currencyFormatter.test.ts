import { describe, it, expect, beforeAll } from 'vitest';
import { formatCurrency, formatCurrencyWithoutDecimal } from '../src/currencyFormatter';
import { setUserLocale } from '../src/core';

describe('currencyFormatter', () => {
  beforeAll(() => {
    setUserLocale('en-US');
  });

  describe('formatCurrency', () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale('en-US');
      });

      it('should format currency correctly', () => {
        const result = formatCurrency(1234.56, 'USD');
        expect(result).toEqual('$1,234.56');
      });

      it('should handle different currencies', () => {
        const result = formatCurrency(100, 'EUR');
        expect(result).toEqual('€100.00');
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale('fr-FR');
      });

      it('should format currency correctly', () => {
        const result = formatCurrency(1234.56, 'USD');
        expect(result).toMatch(/1\s234,56\s\$US/);
      });

      it('should handle different currencies', () => {
        const result = formatCurrency(100, 'EUR');
        expect(result).toMatch(/100,00\s€/);
      });
    });
  });

  describe('formatCurrencyWithoutDecimal', () => {
    describe("locale 'en-US'", () => {
      beforeAll(() => {
        setUserLocale('en-US');
      });
      it('should format currency without decimals using round', () => {
        const result = formatCurrencyWithoutDecimal(1234.56, 'USD');
        expect(result).toEqual('$1,235');
      });

      it('should format currency without decimals using ceil', () => {
        const result = formatCurrencyWithoutDecimal(1234.56, 'USD', 'ceil');
        expect(result).toEqual('$1,235');
      });

      it('should format currency without decimals using floor', () => {
        const result = formatCurrencyWithoutDecimal(1234.56, 'USD', 'floor');
        expect(result).toEqual('$1,234');
      });
    });

    describe("locale 'fr-FR'", () => {
      beforeAll(() => {
        setUserLocale('fr-FR');
      });

      it('should format currency without decimals using round', () => {
        const result = formatCurrencyWithoutDecimal(1234.56, 'USD');
        expect(result).toMatch(/1\s235\s\$US/);
      });

      it('should format currency without decimals using ceil', () => {
        const result = formatCurrencyWithoutDecimal(1234.56, 'USD', 'ceil');
        expect(result).toMatch(/1\s235\s\$US/);
      });

      it('should format currency without decimals using floor', () => {
        const result = formatCurrencyWithoutDecimal(1234.56, 'USD', 'floor');
        expect(result).toMatch(/1\s234\s\$US/);
      });
    });    
  });
});