# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'interview_sample_data_01.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  Candidate.create! do |model|
    model.first_name = row[1]
    model.last_name = row[2]
    model.email = row[3]
    model.gender = row[4]
    model.ip_address = row[5]
    model.date_of_birth = row[6]
  end
end
