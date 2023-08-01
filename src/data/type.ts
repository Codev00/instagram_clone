export type User = {
   id: number;
   name: string;
   avatar: string;
};

export type Post = {
   userId: number;
   id: number;
   title: string;
   description: string;
   image: string;
   likes: number;
};
