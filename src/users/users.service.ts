import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized-response';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  public async create(createUserDto: CreateUserDto) {
    const createdUser = new NormalizedResponse(
      `User ${createUserDto.pseudo} has been created`,
      await this.prisma.users.create({
        data: {
          user_pseudo: createUserDto.pseudo,
          username: createUserDto.username,
          user_password: createUserDto.password,
          created_at: createUserDto.created_at,
        },
      }),
    );
    return createdUser.toJSON();
  }

  findAll() {
    return `This action returns all users`;
  }

  public async getByUUID(uuid: string) {
    const gettedUser = new NormalizedResponse(
      `User ${uuid} has been found`,
      await this.prisma.users.findUnique({
        where: {
          user_UUID: uuid,
        },
      }),
    );
    return gettedUser.toJSON();
  }

  public async updateByUUID(uuid: string, updateUserDto: UpdateUserDto) {
    return new NormalizedResponse(
      `User ${updateUserDto.pseudo} has been updated`,
      await this.prisma.users.update({
        where: {
          user_UUID: uuid,
        },
        data: {
          user_pseudo: updateUserDto.user_pseudo,
          username: updateUserDto.username,
          user_password: updateUserDto.user_password,
          created_at: updateUserDto.created_at,
        }
      })
    ).toJSON();
  }

  public async deleteByUUID(uuid: string) {
    const deletedUser = new NormalizedResponse(
      `User ${uuid} has been deleted`,
      await this.prisma.users.delete({
        where: {
          user_UUID: uuid,
        },
      }),
    );
    return deletedUser.toJSON();
  }
}