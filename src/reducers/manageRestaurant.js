
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    let reviews
    switch(action.type) {
        case "ADD_RESTAURANT":
            const restaurant = {
                id: cuidFn(),
                text: action.text
            }
            return {...state, restaurants: [...state.restaurants, restaurant]};
        case "DELETE_RESTAURANT":
            let restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
            reviews = state.reviews.filter(review => review.restaurantId !== action.id)
            return {...state, restaurants: restaurants, reviews: reviews}
        case "ADD_REVIEW":
            const review = {
                id: cuidFn(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return {...state, reviews: [...state.reviews, review]}
        case "DELETE_REVIEW":
            reviews = state.reviews.filter(review => review.id !== action.id) 
            return {...state, reviews: reviews}
        default:
            return state;
    }
}
