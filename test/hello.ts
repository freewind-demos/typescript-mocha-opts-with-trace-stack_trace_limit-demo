function throwErrorWithLongStack() {
  function throwError(n: number) {
    if (n === 0) {
      throw new Error('test-error')
    } else {
      throwError(n - 1);
    }
  }

  throwError(10);
}

export default function hello(name: string): string {
  throwErrorWithLongStack();
  return `Hello, ${name}!`;
}
