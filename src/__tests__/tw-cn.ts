import { tw } from '../tw-cn';

describe('tw', () => {
  it('returns the same - single string', () => {
    expect(typeof tw('hello world')).toBe('string');
  });

  it('returns concatenated strings - multi', () => {
    expect(tw('hello', 'world')).toBe('hello world');
  });

  it('returns the same - conditional single string', () => {
    expect(tw(['hello', true])).toBe('hello');
  });

  it('returns empty - conditional single string - false', () => {
    expect(tw(['hello', false])).toBe('');
  });

  it('returns concatenated strings - conditional multi', () => {
    expect(tw(['hello', true], ['world', true])).toBe('hello world');
  });

  it('returns concatenated strings - conditional multi - first false', () => {
    expect(tw(['hello', false], ['world', true])).toBe('world');
  });

  it('returns concatenated strings - conditional multi - second false', () => {
    expect(tw(['hello', true], ['world', false])).toBe('hello');
  });

  it('returns concatenated strings - conditional multi - both false', () => {
    expect(tw(['hello', false], ['world', false])).toBe('');
  });

  it('combine both single strings and arrays', () => {
    expect(tw('hello', ['world', true])).toBe('hello world');
  });

  it('combine both single strings and arrays - conditional', () => {
    expect(tw('hello', ['world', false])).toBe('hello');
  });

  it('real world example', () => {
    expect(tw('text-sm', ['text-red-500', true], ['text-green-500', false])).toBe('text-sm text-red-500');
  });

  it('real world example -- 2', () => {
    expect(
      tw('text-sm leading-4', ['text-error bg-error-opacity', false], ['text-success bg-success-opacity', true]),
    ).toBe('text-sm leading-4 text-success bg-success-opacity');
  });

  it('testing undefined', () => {
    expect(tw(['hello', undefined])).toBe('');
  });

  it('testing null', () => {
    expect(tw(['hello', null])).toBe('');
  });

  it('testing string, array, undefined and null', () => {
    expect(tw('hello', undefined, null, false, ['world', true], ['!', false], ['?', undefined], ['!', null])).toBe(
      'hello world',
    );
  });

  it('sending with empty string remove the classname', () => {
    expect(tw('hello', ['world', ''])).toBe('hello');
  });

  it("sending empty object doesn't remove the classname", () => {
    expect(tw('hello', ['world', {}])).toBe('hello world');
  });

  it("sending empty array doesn't remove the classname", () => {
    expect(tw('hello', ['world', []])).toBe('hello world');
  });

  it('Use conditional operators', () => {
    expect(tw('hello', false && 'world')).toBe('hello');
  });

  it('Tailwind merge', () => {
    expect(tw('px-2', ['px-4', true])).toBe('px-4');
  });
});
