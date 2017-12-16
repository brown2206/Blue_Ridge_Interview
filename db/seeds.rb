# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'interview_sample_data_01.csv'))
puts csv_text
