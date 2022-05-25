class BakedItemSerializer < ActiveModel::Serializer
  attributes :id, :item_type, :event_type, :image_url
end
