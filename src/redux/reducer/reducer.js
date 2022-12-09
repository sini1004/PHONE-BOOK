// 초기값으로 contactList이름의 빈 배열
// 새 state추가
let initialState = {contactList:[], keyword:''}; 

function reducer (state = initialState, action){
  let {type, payload} = action; // action 재분해 이용
  switch (type) {
    case 'ADD_CONTACT':
      state.contactList.push({
        name:payload.name, 
        phoneNumber:payload.phoneNumber,
      });
      break;
      // return {
      //   ...state, 
      //   contactList : [
      //     ...state.contactList, 
      //     {
      //       name:payload.name, 
      //       phoneNumber:payload.phoneNumber,
      //     },
      //   ],
      // };
      case 'SEARCH_BY_NAME': // 케이스 새로 추가
        state.keyword = payload.keyword;
        break;
  }
  return { ...state };
}

export default reducer