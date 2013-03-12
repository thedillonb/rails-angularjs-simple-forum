class CommentsController < InheritedResources::Base
  belongs_to :forum
  respond_to :json
end
