

const initialState={
    talents:[],
    loading:false,
    error:null
}

export default function Reduser(state=initialState,action)
{
    switch(action.type)
    {
        case "FETCH_TALENT_REQUEST":
         return{
            ...state,
            loading:true,
            error:null
         }
         case "FETCH_TALENT_SUCESS":
            return{
                ...state,
                loading:false,
                error:null,
                talents:action.payload
            }
            case "FETCH_TALENT_FAILURE":
                return{
                    ...state,
                    loading:false,
                    error:action.payload
                }
                case "ADD_TALENT_REQUEST":
                    return{
                        ...state,
                        loading:true,
                        error:null
                    }
                    case "ADD_TALENT_SUCESS":
                        return{
                            ...state,
                            loading:false,
                            talents:[state.talents,action.payload]
                        }
                        case "ADD_TALENT_FAILURE":
                            return{
                                ...state,
                                loading:false,
                                error:action.payload
                            }
                            default:
                                return state;
    }
}

