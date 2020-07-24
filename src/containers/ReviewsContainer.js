import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  handleAdd = text => {
    const review = {
      text: text,
      restaurantId: this.props.restaurant.id
    }
    this.props.addReview(review)
  }

  myReviews = () => {
    return this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
  }

  render() {
    return (
      <div>
        <ReviewInput handleAdd={this.handleAdd} restaurantId={this.props.restaurant.id} restaurant={this.props.restaurant}/>
        <Reviews reviews={this.myReviews()} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: "ADD_REVIEW", review}),
  deleteReview: id => dispatch({ type: "DELETE_REVIEW", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
