import { randomUUID } from 'crypto';

export interface CategoryProps {
  id?: string;
  name: string;
  tag: string;
  createdAt?: Date;
}

export class Category {
  private props: CategoryProps;
  constructor(props: CategoryProps) {
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
      createdAt: props.createdAt ?? new Date(),
    };
  }

  // Getter and Setter for id
  public get id(): string | undefined {
    return this.props.id;
  }

  // Getter and Setter for name
  public get name(): string {
    return this.props.name;
  }

  public set name(value: string) {
    this.props.name = value;
  }

  // Getter and Setter for tag
  public get tag(): string {
    return this.props.tag;
  }

  public set tag(value: string) {
    this.props.tag = value;
  }

  // Getter and Setter for createdAt
  public get createdAt(): Date {
    return this.props.createdAt!;
  }
}
