const teacherService = require('./teacherService');
const classroomService = require('./classroomService');

exports.getAllotment = async () => {
    const totalTeachers = await teacherService.getTotalTeachers();
    const availableclassrooms = await classroomService.getAvailableclassrooms();

    if (!totalTeachers || !availableclassrooms) {
        throw new Error('Failed to fetch data from APIs');
    }

    const allocatedTeachers = allocateTeachers(totalTeachers, availableclassrooms.availableclassroom);
    return allocatedTeachers;
};

function allocateTeachers(teachers, classrooms) {
    const allocatedTeachers = [];
    const shuffledTeachers = teachers.sort(() => Math.random() - 0.5);
    for (let i = 0; i < classrooms.length && i < shuffledTeachers.length; i++) {
        allocatedTeachers.push(`classroom ${classrooms[i]} is alloted to ${shuffledTeachers[i]}`);
    }
    return allocatedTeachers;
}
