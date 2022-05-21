export const postsPage = (id) =>{
    return {
      type:'POSTS_PAGE',
      payload: id
    }
  }

  export const deletePost = (id) => {
      return {
          type: 'DELETE_POST',
          payload: id
      }
  }