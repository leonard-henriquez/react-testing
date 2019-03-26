import { capitalize } from '../string';

test('it should return null for null', () => {
  expect(capitalize(null)).toBe(null);
});

test('capitalize should handle empty string', () => {
  expect(capitalize("")).toBe("");
});

test('capitalize should handle one letter string', () => {
  expect(capitalize("a")).toBe("A");
});

test('capitalize should handle one letter string', () => {
  expect(capitalize("A")).toBe("A");
});

test('capitalize should handle work for boris', () => {
  expect(capitalize("boris")).toBe("Boris");
});

test('capitalize should handle work for Boris', () => {
  expect(capitalize("Boris")).toBe("Boris");
});

test('capitalize should handle work for BORIS', () => {
  expect(capitalize("BORIS")).toBe("Boris");
});

test('capitalize should handle work for bOrIs', () => {
  expect(capitalize("bOrIs")).toBe("Boris");
});
