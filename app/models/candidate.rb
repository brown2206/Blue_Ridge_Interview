class Candidate < ApplicationRecord
  default_scope { order('updated_at DESC') }
end
