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
      `User ${createUserDto.user_pseudo} has been created`,
      await this.prisma.users.create({
        data: {
          user_pseudo: createUserDto.user_pseudo,
          user_name: createUserDto.user_name,
          user_password: createUserDto.user_password,
        },
      }),
    );
    return createdUser.toJSON();
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
      `User ${updateUserDto.user_pseudo} has been updated`,
      await this.prisma.users.update({
        where: {
          user_UUID: uuid,
        },
        data: {
          user_pseudo: updateUserDto.user_pseudo,
          user_name: updateUserDto.user_name,
          user_password: updateUserDto.user_password,
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

  findAll() {
    return `This action returns all users`;
  }
}