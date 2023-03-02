export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after developing
 //token: 'BQAvl8VCm_iG4BCB1rD_m4D0GFa48VMEiRwwO1OVZkig5wGcbahfI3liNsdznOxOjc3VrkFTVxmhL0qSzn2sMxL2PCkbMhZHRS4pI8BrF7lw-1tPlXzkZISQgD53ncjXFN3PbiFMTPO-R4rKEGj4ps920f-Gvk_74bivHrsy9eCuCIz2VP_X7TBRAqZ552dsetrmOkX2ZoHB8em--71cAw',
}
const reducer = (state, action) => {

    console.log(action);

    switch(action.type) {
        case "SET_USER":
            return{
                ...state,
                user: action.user, 
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly,
            };
            
        default:
            return state;
    }
}
export default reducer;