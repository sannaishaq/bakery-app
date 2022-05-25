class ReviewsController < ApplicationController
        #GET -> Read "/reviews"
        def index
            reviews = Review.all
            render json: reviews
          end
      
          #POST -> Create "/reviews"
          def create
            review = Review.create(review_params)
            render json: review, status: :created
          end
      
          #PATCH -> Update "/reviews/:id"
          def update
              review = Review.find(params[:id])
              review.update!(review_params)
              render json: review, status: :created
          end
          
          # DELETE "/reviews/:id"
            def destroy
              user = Review.find(params[:id])
              user.destroy
              head :no_content
            end
       
          private
        
          def review_params
            params.permit(:description, :name_of_reviewer)
          end
end
