export const middleware = (store) => (next) => (action) => { 
    // console.log('store=>', store);
    console.log('prev state=>',store.getState());
    console.log('action>', action);
    const res = next(action); // => meaning send info to reducer -- like setState ---
    console.log('next state=>', store.getState());
    console.log(res);
  }