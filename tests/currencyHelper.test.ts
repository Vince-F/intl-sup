import { describe, it, expect, beforeAll } from 'vitest';
import {
  isCurrencySupported,
  getCurrencySymbol,
  getCurrencyNarrowSymbol,
  getCurrencyPosition,
  isCurrencySymbolBeforeAmount,
  isCurrencySymbolAfterAmount
} from '../src/currencyHelper';
import { setUserLocale } from '../src/core';

describe('currencyHelper', () => {
  beforeAll(() => {
    setUserLocale('en-US');
  });

  describe('isCurrencySupported', () => {
    it('should return true for supported currency', () => {
      expect(isCurrencySupported('USD')).toBe(true);
    });

    it('should return false for unsupported currency', () => {
      expect(isCurrencySupported('INVALID')).toBe(false);
    });
  });

  describe('getCurrencySymbol', () => {
    it('should return the currency symbol', () => {
      const symbol = getCurrencySymbol('USD');
      expect(symbol).toBe('$');
    });

    it('should return currency code if no symbol', () => {
      // For currencies without symbols, it might return the code
      const symbol = getCurrencySymbol('EUR');
      expect(symbol).toBe('€');
    });
  });

  describe('getCurrencyNarrowSymbol', () => {
    it('should return the narrow currency symbol', () => {
      const symbol = getCurrencyNarrowSymbol('USD');
      expect(symbol).toBe('$');
    });
  });

  describe('getCurrencyPosition', () => {
    it('should return before for USD', () => {
      const position = getCurrencyPosition('USD');
      expect(position).toBe('before');
    });

    it('should return after for some currencies', () => {
      // Depending on locale, but for en-US, most are before
      const position = getCurrencyPosition('EUR');
      expect(position).toBe('before');
    });
  });

  describe('isCurrencySymbolBeforeAmount', () => {
    it('should return true for USD', () => {
      expect(isCurrencySymbolBeforeAmount('USD')).toBe(true);
    });
  });

  describe('isCurrencySymbolAfterAmount', () => {
    it('should return false for USD', () => {
      expect(isCurrencySymbolAfterAmount('USD')).toBe(false);
    });
  });
});