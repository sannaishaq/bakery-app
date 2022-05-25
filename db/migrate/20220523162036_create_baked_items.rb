class CreateBakedItems < ActiveRecord::Migration[6.1]
  def change
    create_table :baked_items do |t|
      t.string :item_type
      t.string :event_type
      t.string :image_url

      t.timestamps
    end
  end
end
