import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { CreateUser } from './dto/create-user.dto'
import { UpdateUser } from './dto/update-user.dto'
import { User, UserDocument } from './schemas/user.schema'

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(CreateUser: CreateUser) {
    try {
      return await this.userModel.create(CreateUser)
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

  async findOrCreate(CreateUser: CreateUser): Promise<User> {
    const user = await this.userModel.findOne({ email: CreateUser.email })
    if (user) {
      return user
    }
    return await this.create(CreateUser)
  }

  async update(id: string, UpdateUser: UpdateUser) {
    return await this.userModel.findByIdAndUpdate(id, UpdateUser, {
      new: true,
    })
  }

  async remove(id: string) {
    return await this.userModel.findByIdAndDelete(id)
  }
}
