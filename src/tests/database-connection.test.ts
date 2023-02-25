import { expect, test } from 'vitest';

test('should connect to database', () => {
    const connection = require('../database/index')

    expect(connection).toBeDefined;
})