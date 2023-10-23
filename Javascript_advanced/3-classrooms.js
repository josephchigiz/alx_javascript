function createClassroom(numberOfStudents) {
    function studentSeat(seat) {
        return function () {
            return seat;
        };
    }
    let students = [];

    for (let i = 0; i < numberOfStudents; i++) {
        let seatNo = studentSeat(i + 1);
        students.push(studentSeat(seatNo)());
    }
    return students;
}

let classRoom = createClassroom(10);