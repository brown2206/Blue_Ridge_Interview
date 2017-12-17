class CreateCandidates < ActiveRecord::Migration[5.0]
  def change
    create_table :candidates do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :gender
      t.string :ip_address
      t.string :date_of_birth
    end
  end
end
