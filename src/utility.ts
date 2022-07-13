/* eslint-disable @typescript-eslint/no-unused-vars */
console.log('utility.ts');

interface OurUser {
  readonly id: number;
  name: string;
  username?: string | undefined;
  email: string;
  isOnline: boolean;
  favColor?: string[];
  likesSports?: boolean;
}
// tipa su vosim savybem ir OurUser bet neprivalomom
type OptionalOurUser = Partial<OurUser>;

type ReqUser = Required<OurUser>;

const opUser: OptionalOurUser = {
  name: 'Mike',
};

const user2: OurUser = {
  id: 1,
  name: 'James',
  email: 'James@bas.com',
  isOnline: true,
};

const user1: ReqUser = {
  id: 1,
  name: 'Serbentautas',
  username: 'Serbas',
  email: 'ser@bas.com',
  isOnline: false,
  favColor: ['red', 'yellow', 'green'],
  likesSports: true,
};

// user1.id = 5;
