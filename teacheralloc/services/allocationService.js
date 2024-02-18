const teacherService = require('./teacherService');
const classroomService = require('./classroomService');

exports.getAllotment = async () => {
    const { teachers, subteachers } = await teacherService.getTotalTeachers();
    const availableclassrooms = await classroomService.getAvailableclassrooms();

    if (!teachers || !subteachers || !availableclassrooms) {
        throw new Error('Failed to fetch data from APIs');
    }

    const allocatedTeachers = allocateTeachers(teachers, subteachers, availableclassrooms.availableclassroom);
    return allocatedTeachers;
};

function allocateTeachers(teachers, subteachers, classrooms) {
    const allocatedTeachers = [];
    const shuffledTeachers = teachers.sort(() => Math.random() - 0.5);
    const shuffledSubteachers = subteachers.sort(() => Math.random() - 0.5);

    for (let i = 0; i < classrooms.length && i < shuffledTeachers.length && i < shuffledSubteachers.length; i++) {
        allocatedTeachers.push(`Classroom ${classrooms[i]} is allotted to ${shuffledTeachers[i]} and ${shuffledSubteachers[i]}`);
    }

    return allocatedTeachers;
}
