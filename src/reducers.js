/**
 * Created by Administrator on 2017/3/28 0028.
 */

import {combineReducers} from 'redux'
function teacherLoginData(state = {}, action) {
    switch(action.type){
        case "teacher_login_data":
            
            return action.json;
        break;
        default:
            return false
    }
}
let totalReducer=combineReducers({
    teacherLoginData
});
export default totalReducer