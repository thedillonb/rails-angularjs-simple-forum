class Comment < ActiveRecord::Base
  belongs_to :forum
  attr_accessible :name, :body

  default_scope order("created_at desc")

  validates_presence_of :name
  validates_presence_of :body
end
