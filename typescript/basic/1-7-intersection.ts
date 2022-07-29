{
    // intersection type : AND -> 다양한 타입들을 하나로 묶어서 선언할 수 있다.
    // 모든 것을 합한 성격.
    type Student = {
        name: string;
        score: number;
    }

    type Worker = {
        employeeId: number;
        work: () => void;
    }
    // 학생이면서 일하는 노동자 -> 두 가지 다 접근이 가능하다.
    function internWork(person: Student & Worker){
        console.log(person.name, person.employeeId, person.work());
    }

    // 매개변수로 person을 넣어줄 때 Student와 Worker의 모든 속성을 작성해야 한다.
    internWork({
        name: 'geun',
        score: 1,
        employeeId: 123,
        work : () => {
            console.log("work!!")
        }
    })

}
