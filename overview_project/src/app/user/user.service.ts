import { Injectable } from '@nestjs/common';
import { db } from 'src/db';
import { users } from 'src/db/schema';
import { eq } from 'drizzle-orm';
import { USER } from './user.dto';
import { UnableToInsertException } from 'src/filters/unableToInsert.exception';
import { generateHash } from 'src/lib/hash';

// This should be a real class/interface representing a user entity
export type User = any;

type findOne =
  | {
      email: string;
    }
  | {
      userId: number;
    };

@Injectable()
export class UsersService {
  findOne(payload: findOne): Promise<User | undefined> {
    const whereClause = () => {
      if ('email' in payload) {
        return eq(users.email, payload.email);
      } else if ('userId' in payload) {
        return eq(users.id, payload.userId);
      }
    };

    return db.query.users.findFirst({
      where: whereClause(),
    });
  }

  findAll(): Promise<User[] | []> {
    return db.query.users.findMany();
  }

  async create(userDto: USER): Promise<any> {
    try {
      const password = await generateHash(userDto.password);
      const payload = { ...userDto, password };
      const response = await db.insert(users).values(payload);
      if (!response.rowCount) {
        throw new UnableToInsertException('Unable to Create User');
      }
      return {
        code: 200,
        message: 'User Successfully Created',
        status: true,
      };
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}
