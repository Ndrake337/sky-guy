import { randomUUID } from 'crypto';

export interface UserProps {
  userName: string;
  name: string;
  password: string;
  role: 'admin' | 'editor' | 'author' | 'regular';
  status: 'active' | 'inactive';
  about?: string;
  modifiedAt?: Date | null;
  createdAt?: Date;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: UserProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get userName(): string {
    return this.props.userName;
  }

  public set userName(value: string) {
    this.props.userName = value;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(value: string) {
    this.props.name = value;
  }

  public get password(): string {
    return this.props.password;
  }

  public set password(value: string) {
    this.props.password = value;
  }

  public get role(): 'admin' | 'editor' | 'author' | 'regular' {
    return this.props.role;
  }

  public set role(value: 'admin' | 'editor' | 'author' | 'regular') {
    this.props.role = value;
  }

  public get status(): 'active' | 'inactive' {
    return this.props.status;
  }

  public set status(value: 'active' | 'inactive') {
    this.props.status = value;
  }

  public get modifiedAt(): Date | null | undefined {
    return this.props.modifiedAt;
  }

  public set about(value: string) {
    this.props.about = value;
  }

  public get about(): string | null | undefined {
    return this.props.about;
  }

  public get createdAt(): Date | undefined {
    return this.props.createdAt;
  }
}
