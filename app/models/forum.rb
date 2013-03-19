class Forum < ActiveRecord::Base
  attr_accessible :name
  has_many :comments, :dependent => :destroy

  validates_uniqueness_of :name
  validates_presence_of :name
  validates_length_of :name, minimum: 1
end
