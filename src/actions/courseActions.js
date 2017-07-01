export function createCourse(course){
    alert('From action'+ course.title);
    return {
        type:'CREATE_COURSE',course
    };
}