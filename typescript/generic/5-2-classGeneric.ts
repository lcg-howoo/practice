{
    //either: a or b
    interface Either<L, R> {
        left: () => L;
        right: () => R;
    }

    class SimpleEither<L, R> implements Either<L, R>{
        constructor(private leftValue: L, private rigthValue: R){};
        left(): L{
            return this.leftValue;
        }

        right(): R{
            return this.rigthValue;
        }
    }
    const either: Either<number, number> = new SimpleEither(4, 6);

    either.left();
    either.right();
    console.log(either);
    const best: Either<number, string> = new SimpleEither(3, 'hello');
}
