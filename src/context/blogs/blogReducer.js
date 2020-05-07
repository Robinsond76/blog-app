export default (state, action) => {
  switch (action.type) {
    case 'GET_BLOGS':
      return {
        ...state,
        blogs: action.payload,
        isLoading: false,
      };
    case 'GET_BLOG':
      return {
        ...state,
        blog: action.payload,
        isLoading: false,
      };
    case 'ADD_BLOG':
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case 'CLEAR_BLOG':
      return {
        ...state,
        blog: {},
      };
    case 'UPDATE_BLOG':
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog.id === action.payload.id ? action.payload : blog
        ),
        isLoading: false,
      };
    case 'DELETE_BLOG':
      return {
        ...state,
        blogs: state.blogs.map((blog) => blog.id !== action.payload),
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
