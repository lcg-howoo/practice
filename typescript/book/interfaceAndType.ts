// interface A {
//   good(x: number): number;
//
//   bad(x: number): number;
// }
//
// interface B extends A {
//   good(x: string | number): string;
//   bad(x: string): string
// }

type A = {
  good(x: number): number;

  bad(x: number): number;
}

type B = A & {
  good(x: string | number): string;
  bad(x: string): string
}

