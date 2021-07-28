import Const from '../src/const';

describe('class Const', () => {
  describe('create()', () => {
    it('should create a default const value', () => {
      const FOO = Const.create('FOO');
      const BAR = Const.create('BAR');

      expect(FOO).toBeTruthy();
      expect(BAR).toBeTruthy();
      expect(FOO).not.toEqual(BAR);
      expect(`${FOO}`).toBe('FOO');
      expect(`${BAR}`).toBe('BAR');
      expect(JSON.stringify(FOO)).toBe('"FOO"');
      expect(JSON.stringify(BAR)).toBe('"BAR"');
      expect(FOO.value).toBe('FOO');
      expect(BAR.value).toBe('BAR');
      expect(FOO.label).toBe('FOO');
      expect(BAR.label).toBe('BAR');
    });

    it('should create an const value with the specified label', () => {
      const FOO = Const.create('FOO', { label: 'foobar' });

      expect(FOO).toBeTruthy();
      expect(`${FOO}`).toBe('FOO');
      expect(JSON.stringify(FOO)).toBe('"FOO"');
      expect(FOO.value).toBe('FOO');
      expect(FOO.label).toBe('foobar');
    });

    it('should create an extended const', () => {
      const FOO = Const.create('FOO', { singular: 'foobar', plural: 'foobars' });

      expect(FOO).toBeTruthy();
      expect(`${FOO}`).toBe('FOO');
      expect(JSON.stringify(FOO)).toBe('"FOO"');
      expect(FOO.value).toBe('FOO');
      expect(FOO.label).toBe('FOO');
      expect(FOO.singular).toBe('foobar');
      expect(FOO.plural).toBe('foobars');
    });

    it('should create an extended const with the specified prop as a label', () => {
      const FOO = Const.create('FOO', {
        singular: 'foobar',
        plural: 'foobars',
        $label: 'singular',
      });

      expect(FOO).toBeTruthy();
      expect(`${FOO}`).toBe('FOO');
      expect(JSON.stringify(FOO)).toBe('"FOO"');
      expect(FOO.value).toBe('FOO');
      expect(FOO.label).toBe('foobar');
      expect(FOO.singular).toBe('foobar');
      expect(FOO.plural).toBe('foobars');
      expect(FOO.$label).toBeUndefined();
    });
  });

  describe('createMap()', () => {
    it('should create a default const map', () => {
      const CONST = Const.createMap({ FOO: {}, BAR: {} });

      expect(CONST).toBeTruthy();
      expect(CONST).toHaveProperty('FOO');
      expect(CONST).toHaveProperty('BAR');
      expect(CONST.FOO).toEqual(Const.create('FOO'));
      expect(CONST.BAR).toEqual(Const.create('BAR'));
      expect(Array.from(CONST)).toEqual(Object.values(CONST));
      expect(JSON.stringify(Array.from(CONST))).toEqual('["FOO","BAR"]');
      expect(Array.from(CONST).join(',')).toEqual('FOO,BAR');
    });

    it('should create an extended const map', () => {
      const CONST = Const.createMap({
        FOO: { singular: 'foo', plural: 'foos' },
        BAR: { singular: 'bar' },
      });

      expect(CONST).toBeTruthy();
      expect(CONST).toHaveProperty('FOO');
      expect(CONST).toHaveProperty('BAR');
      expect(CONST.FOO).toEqual(Const.create('FOO', { singular: 'foo', plural: 'foos' }));
      expect(CONST.BAR).toEqual(Const.create('BAR', { singular: 'bar' }));
      expect(Array.from(CONST)).toEqual(Object.values(CONST));
      expect(JSON.stringify(Array.from(CONST))).toEqual('["FOO","BAR"]');
      expect(Array.from(CONST).join(',')).toEqual('FOO,BAR');
    });

    it('should create an extended const map with the specified prop as a label', () => {
      const CONST = Const.createMap(
        {
          FOO: { singular: 'foo', plural: 'foos' },
          BAR: { singular: 'bar' },
        },
        'singular'
      );

      expect(CONST).toBeTruthy();
      expect(CONST).toHaveProperty('FOO');
      expect(CONST).toHaveProperty('BAR');
      expect(CONST.FOO).toEqual(
        Const.create('FOO', { singular: 'foo', plural: 'foos', label: 'foo' })
      );
      expect(CONST.BAR).toEqual(Const.create('BAR', { singular: 'bar', $label: 'singular' }));
      expect(Array.from(CONST)).toEqual(Object.values(CONST));
      expect(JSON.stringify(Array.from(CONST))).toEqual('["FOO","BAR"]');
      expect(Array.from(CONST).join(',')).toEqual('FOO,BAR');
    });
  });

  describe('createTypedMap()', () => {
    const CONST = Const.createTypedMap<{ singular: string; plural: string }>()(
      {
        FOO: { singular: 'foo', plural: 'foos' },
        BAR: { singular: 'bar', plural: 'bars' },
      },
      'singular'
    );

    expect(CONST).toBeTruthy();
    expect(CONST.FOO).toEqual(
      Const.create('FOO', { singular: 'foo', plural: 'foos', $label: 'singular' })
    );
    expect(CONST.BAR).toEqual(
      Const.create('BAR', { singular: 'bar', plural: 'bars', label: 'bar' })
    );
  });

  describe('list()', () => {
    const CONST = Const.list('FOO', 'BAR');

    expect(CONST).toBeTruthy();
    expect(CONST).toHaveProperty('FOO');
    expect(CONST).toHaveProperty('BAR');
    expect(CONST.FOO).toEqual(Const.create('FOO'));
    expect(CONST.BAR).toEqual(Const.create('BAR'));
  });
});
