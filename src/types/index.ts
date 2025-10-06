export interface IUser {
  name: string;
  email: string;
  role: string;
  phone: string;
  picture: string;
  status: string;
  isVerified: boolean;
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  tags: string[];
  views: number;
  author: IUser;
  createdAt: Date;
}
