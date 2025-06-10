export interface CardProps {
  titleId?: Number;
  title: string;
  content: string;
  // cards: CardProps[];
}

export interface ButtonProps {
  name: string;
  size: string;
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full'
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: CardProps) => void;
}

export interface PostProps {
  title: string;
  userId: number;
  body: string;
  posts?: PostProps[];
}

export interface UserProps {
  name: string;
  username: string;
  email: string;
  users?: UserProps[]
}