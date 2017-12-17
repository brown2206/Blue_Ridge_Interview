ActiveRecord::Schema.define(version: 20171216211309) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "candidates", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "gender"
    t.string "ip_address"
    t.string "date_of_birth"
  end
end
