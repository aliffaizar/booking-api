import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User, UserDocument } from './schemas/user.schema'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    try {
      return await this.userModel.create(createUserDto)
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('Email already exists')
      } else {
        throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR)
      }
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find()
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userModel.findOne({ email })
    return user
  }

  async findOne(id: string) {
    return this.userModel.findById(id)
  }

  async findOrCreate(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userModel.findOne({ email: createUserDto.email })
    if (user) {
      return user
    }
    return await this.create(createUserDto)
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(id, updateUserDto, {
      new: true,
    })
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id)
  }
}
