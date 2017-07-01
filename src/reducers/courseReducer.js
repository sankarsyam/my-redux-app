export default function courseReducer(state=[],action){
  if(action.course)
  alert('From reducer '+ action.course.title);
  switch(action){
      case 'CREATE_COURSE':
         return [...state,Object.assign({},action.course)];
      default: 
         return state;   
  }
}