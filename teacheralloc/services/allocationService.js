const teacherService = require('./teacherService');
const classroomService = require('./classroomService');
const { sendEmail } = require('./emailService'); // Import the sendEmail function from the email service

async function getAllotment() {
    try {
        const { main_teachers, co_teachers } = await teacherService.getTotalTeachers();
        const { classroom } = await classroomService.getAvailableclassrooms();

        const allocatedTeachers = allocateTeachers(main_teachers, co_teachers, classroom);
        await sendAllocationEmails(allocatedTeachers); // Sending emails to allocated teachers
        return allocatedTeachers;
    } catch (error) {
        throw error; // Rethrow the error for centralized error handling
    }
}

function allocateTeachers(teachers, subteachers, classrooms) {
    const allocatedTeachers = [];

    // Shuffle teachers and subteachers arrays
    const shuffledTeachers = teachers.sort(() => Math.random() - 0.5);
    const shuffledSubteachers = subteachers.sort(() => Math.random() - 0.5);

    // Iterate over classrooms and assign teachers and subteachers
    for (let i = 0; i < classrooms.length && i < shuffledTeachers.length && i < shuffledSubteachers.length; i++) {
        allocatedTeachers.push({
            classroom: classrooms[i],
            main_teacher: {
                name: shuffledTeachers[i].name,
                email: shuffledTeachers[i].email
            },
            sub_teacher: {
                name: shuffledSubteachers[i].name,
                email: shuffledSubteachers[i].email
            }
        });
    }

    return allocatedTeachers;
}

async function sendAllocationEmails(allocatedTeachers) {
    try {
        for (const teacher of allocatedTeachers) {
            await sendEmail(teacher.main_teacher.email, 'Classroom Allotment', `Hello ${teacher.main_teacher.name}, you have been allotted Classroom ${teacher.classroom}`);
            await sendEmail(teacher.sub_teacher.email, 'Classroom Allotment', `Hello ${teacher.sub_teacher.name}, you have been allotted Classroom ${teacher.classroom}`);
        }
    } catch (error) {
        console.error('Error sending allocation emails:', error);
        throw error;
    }
}

module.exports = { getAllotment };
