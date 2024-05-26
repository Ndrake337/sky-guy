import { randomUUID } from 'crypto';
import { User } from '../user/user';

export interface PostProps {
  publicId: number;
  title: string;
  summary: string;
  author: User;
  content: string;
  isPublished: boolean;
  createdAt?: Date;
  modifiedAt?: Date | null;
}

export class Post {
  private _id: string;
  private props: PostProps;

  constructor(props: PostProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id(): string {
    return this._id;
  }

  // Getter and Setter for public_id
  public get publicId(): number {
    return this.props.publicId;
  }

  public set publicId(value: number) {
    this.props.publicId = value;
  }

  // Getter and Setter for title
  public get title(): string {
    return this.props.title;
  }

  public set title(value: string) {
    this.props.title = value;
  }

  // Getter and Setter for summary
  public get summary(): string {
    return this.props.summary;
  }

  public set summary(value: string) {
    this.props.summary = value;
  }

  // Getter and Setter for author
  public get author(): User {
    return this.props.author;
  }

  public set author(value: User) {
    this.props.author = value;
  }

  // Getter and Setter for content
  public get content(): string {
    return this.props.content;
  }

  public set content(value: string) {
    this.props.content = value;
  }

  // Getter and Setter for isPublished
  public get isPublished(): boolean {
    return this.props.isPublished;
  }

  public set isPublished(value: boolean) {
    this.props.isPublished = value;
  }

  // Getter and Setter for createdAt
  public get createdAt(): Date {
    return this.props.createdAt!;
  }

  // Getter and Setter for modifiedAt
  public get modifiedAt(): Date | null | undefined {
    return this.props.modifiedAt;
  }

  public set modifiedAt(value: Date | null | undefined) {
    this.props.modifiedAt = value;
  }
}
