export function reducer(state, action){
    switch(action.type){
        case "ADD":
            return [
                ...state,
                action.payload
            ]
        case "Complete":
            return state.map((item)=>
                item.id===action.payload?
            {...item,done: !item.done}:item
            );

        case "Delete":
            return state.filter((item)=>item.id!==action.payload);
        default:
            return state;
    }
}