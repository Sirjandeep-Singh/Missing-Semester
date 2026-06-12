import {capitalize} from "./Capitalize"

test('initial', () =>
    expect(
        capitalize('hello')).toBe('Hello')
)

test('Function', () =>
    expect(
        capitalize('racecar')).toBe('Racecar')
)