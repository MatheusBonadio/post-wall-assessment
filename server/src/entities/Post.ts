import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm'

import { User } from './User'
import { Comment } from './Comment'

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar', length: 100 })
  title: string

  @Column({ type: 'text' })
  description: string

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date

  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[]

  @ManyToOne(() => User, (user) => user.posts, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User | string
}
