import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm'

import { Post } from './Post'
import { User } from './User'

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'text' })
  description: string

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: Date

  @ManyToOne(() => Post, (post) => post.comments, { nullable: false })
  @JoinColumn({ name: 'post_id' })
  post: Post

  @ManyToOne(() => User, (user) => user.comments, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User | string
}
