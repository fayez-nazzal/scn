import scn from '../tscn';

describe('scn', () => {
  it('returns the same - single string', () => {
    expect(typeof scn('hello world')).toBe('string');
  });

  it('returns concatenated strings - multi', () => {
    expect(scn('hello', 'world')).toBe('hello world');
  });

  it('returns the same - conditional single string', () => {
    expect(scn(['hello', true])).toBe('hello');
  });

  it('returns empty - conditional single string - false', () => {
    expect(scn(['hello', false])).toBe('');
  });

  it('returns concatenated strings - conditional multi', () => {
    expect(scn(['hello', true], ['world', true])).toBe('hello world');
  });

  it('returns concatenated strings - conditional multi - first false', () => {
    expect(scn(['hello', false], ['world', true])).toBe('world');
  });

  it('returns concatenated strings - conditional multi - second false', () => {
    expect(scn(['hello', true], ['world', false])).toBe('hello');
  });

  it('returns concatenated strings - conditional multi - both false', () => {
    expect(scn(['hello', false], ['world', false])).toBe('');
  });

  it('combine both single strings and arrays', () => {
    expect(scn('hello', ['world', true])).toBe('hello world');
  });

  it('combine both single strings and arrays - conditional', () => {
    expect(scn('hello', ['world', false])).toBe('hello');
  });

  it('real world example', () => {
    expect(scn('text-sm', ['text-red-500', true], ['text-green-500', false])).toBe('text-sm text-red-500');
  });

  it('real world example -- 2', () => {
    expect(
      scn('text-sm leading-4', ['text-error bg-error-opacity', false], ['text-success bg-success-opacity', true]),
    ).toBe('text-sm leading-4 text-success bg-success-opacity');
  });

  it('testing undefined', () => {
    expect(scn(['hello', undefined])).toBe('');
  });

  it('testing null', () => {
    expect(scn(['hello', null])).toBe('');
  });

  it('testing string, array, undefined and null', () => {
    expect(scn('hello', undefined, null, false, ['world', true], ['!', false], ['?', undefined], ['!', null])).toBe(
      'hello world',
    );
  });

  it('sending with empty string remove the classname', () => {
    expect(scn('hello', ['world', ''])).toBe('hello');
  });

  it("sending empty object doesn't remove the classname", () => {
    expect(scn('hello', ['world', {}])).toBe('hello world');
  });

  it("sending empty array doesn't remove the classname", () => {
    expect(scn('hello', ['world', []])).toBe('hello world');
  });

  it('Use conditional operators', () => {
    expect(scn('hello', false && 'world')).toBe('hello');
  });

  it('Tailwind merge', () => {
    expect(scn('px-2', ['px-4', true])).toBe('px-4');
  });
});
