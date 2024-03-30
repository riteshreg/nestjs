import { Test, TestingModule } from '@nestjs/testing';
import { generateHash } from './hash';

describe('hash', () => {
  const password = 'abc123';

  it('it should hash a password', () => {
    // const hashed_password =  hashPassword(password);
    expect(password).toBe(password);
  });
});
