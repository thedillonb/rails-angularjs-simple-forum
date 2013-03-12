class CreateForums < ActiveRecord::Migration
  def change
    create_table :forums do |t|
      t.string :name

      t.timestamps
    end
  end
end
