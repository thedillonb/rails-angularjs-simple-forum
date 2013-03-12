class Comment < ActiveRecord::Base
  belongs_to :forum
  attr_accessible :name, :body
end
