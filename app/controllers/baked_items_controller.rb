class BakedItemsController < ApplicationController

 # GET "/bakeditems"
    def index 
        render json: BakedItem.all
    end 

 # READ
    def show
        baked_item = BakedItem.find(params[:id])
        render json: baked_item
    end

    def items_by_category 
        render json: BakedItem.where(item_type: params[:item_type])  
    end
end
