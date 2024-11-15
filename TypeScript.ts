//! დაწერეთ არსებული კოდი Typescript-ში:

// მაგალითი 1

let name1: string = "Alice";

// მაგალითი 2

let numbers: number[] = [1, 2, 3];

// მაგალითი 3

function multiply(a: number, b: number) {
  return a * b;
}

// მაგალითი 4
type User1 = {
  id: number;
  name: string;
};

const user1: User1 = { id: 1, name: "Alice" };

// მაგალითი 5
// რისთვის ვიყენებთ არსებული კოდში = Guest-ს :

function greet(name: string = "Guest") {}

("name მიირებს მხოლოს guest");
// პასუხი:

// მაგალითი 6
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type Config = {

type Config = {
  theme: string;
  options: {
    fontSize: number;
    layout: null;
  };
};

const config1 = {
  theme: "dark",
  options: {
    fontSize: 16,
    layout: null,
  },
};

type Config2 = {
  theme: string;
};

const config2: Config2 = {
  theme: "dark",
};

type Config3 = {
  tester: string;
};
const config3: Config3 = {
  tester: "test",
};

// მაგალითი 7
// დაწერეთ ტიპი რომელიც მოერგება ყველა ქვემოთ ჩამოთვლილ ელემენტს. მაგ: type MixedArray =

const array1: (number | string | { name: string })[] = [
  42,
  "hello",
  { name: "Alice" },
];
const array2: (string | boolean | { isValid: boolean })[] = [
  "apple",
  true,
  { isValid: false },
];

const array3: string[] = [];

// მაგალითი 8
// აღწერეთ რისი ტიპიზაცია ხდება არსებულ კოდში წერილობით

type Handler = {
  process?: () => string;
  validate?: (input: string) => boolean;
  log?: () => void;
};

("process ფუნქციის validate ფუნქციის  da ლოგ ფუქციის ორონდ შეიზლება იყოს შეიძლება არა");
// მაგალითი 9

// შექმენით ტიპი მონაცემისთივს:

type User = {
  id: number;
  username: string;
  isAdmin: boolean;
  profile: {
    fullName: string;
    age: number;
    interests: string[];
  };
  settings: {
    theme: string;
    notifications: {
      email: boolean;
      sms: boolean;
    };
  };
  metadata: undefined;
};

const user: User = {
  id: 101,
  username: "tech_learner",
  isAdmin: false,
  profile: {
    fullName: "Alice Johnson",
    age: 25,
    interests: ["coding", "gaming", "reading"],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
  },
  metadata: undefined,
};
