import {cipher} from "./ceasarcipher";

test('Initial', () =>
    expect(cipher('a',3)).toBe('d')
)

test('multiple', () =>
    expect(cipher('abc',3)).toBe('def')
)

test('wrapping', () =>
    expect(cipher('xyz',3)).toBe('abc')
)

test('punctuations', () =>
    expect(cipher('xyz!',3)).toBe('abc!')
)

test('case', () =>
    expect(cipher('XyA!',3)).toBe('AbD!')
)

test('limits', () =>
    expect(cipher('Ageiobw!.m,', 50)).toBe('Yecgmzu!.k,')
)