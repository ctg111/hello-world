/**
 * Created by Administrator on 2017/3/28 0028.
 */
export function beforeGetTeacherAllData(json) {
    return {
        type:"before-get-teacher-all-data",
        json
    }
}
export function GetTeacherAllData(json) {
    return {
        type:"get-teacher-all-data",
        json
    }
}
export function teacherLoginData(json) {
    return {
        type:"teacher-login-data",
        json
    }
}
export function getSuper(json) {
    return {
        type:"get-super",
        json
    }
}
export function beforeSuperData(json) {
    return {
        type:"before-super-data",
        json
    }
}
export function studentType(json) {
    return {
        type:"student-type",
        json
    }
}
export function fixedUrl(json) {
    return {
        type:"fixed-url",
        json
    }
}