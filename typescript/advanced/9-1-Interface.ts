{
    type PositionType = {
        x: number;
        y: number;
    }

    interface PositionInterface {
        x: number;
        y: number;
    }

    //only interfaces can be merged
    // PositionInterface을 사용하는 곳은 x,y,z다 사용한다. type은 interface처럼 사용 못한다.
    interface PositionInterface {
        z: number;
    }


    //object
    const obj1: PositionType = {
        x: 1,
        y: 2
    }
    const obj2: PositionInterface = {
        x: 1,
        y: 2,
        z: 4,
    }

    //class
    class Pos1 implements PositionType {
        x: number;
        y: number;
    }

    class Pos2 implements PositionInterface {
        x: number;
        y: number;
        z: number
    }

    //extends
    interface ZPositionInterface extends PositionInterface {
        z: number;
    }

    type ZPositionType = PositionType & { z: number }

    // type aliases는
    type Person = {
        name: string,
        age: number
    }

    type Name = Person['name']; //string 타입
    type NumberType = number;

    type Direction  = 'left' | 'right';

}
