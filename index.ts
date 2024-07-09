export interface Foo {
  readonly bar: string;
}

export const foo = {
  bar: "Hello, World!",
  wow: "wow"
} as const;
foo satisfies Foo;

export default foo;
