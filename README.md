# Blue_Ridge_Interview

## Programming Interview Project 1

Hello, thank you for reviewing the code to my "Interview" app.  The Story originally required the use of a Python based Flask backend rest service, however, after careful research, I decided to use Rails as my backend service, based on my familiarity with this technology stack and my desire to deliver an excellent product in a short window of time.  In this GitHub, you will see two branches (master, Angelo_React).  When I initially started this project, I created a full CRUD application that did not render views in React.  I did this on purpose in order to test the functionality of the app.  I did however use React to render views on a different branch, "Angelo_React".  For the purposes of satisfying the Acceptance Criteria of this story, please run the app from the "Angelo_React" branch.  I was able to research and discover several ruby gems to help me complete the bonus portion, however, due to time constraints, I was not able to complete the bonus portion.  In summary, all three points in the acceptance criteria have been met.  Please see instructions below.

## Instructions for running "Interview" on the Angelo_React branch.


1. This app uses a PostgreSQL database.  If you do not already have PostgreSQL, please download.
2. Clone this repo and navigate into the folder.
3. Run the following rails commands:
    rails db:drop
    rails db:create
    rails db:migrate
    rails db:seed
4. Start your server by running "rails s".
5. Navigate to http://localhost:3000/users/sign_in
6. To sign in as Tom use:
    Name: Tom
    Email: tom@blueridgedynamics.com
    Password: 123456

    To sign in as Harry use:
    Name: Harry
    Email: harry@blueridgedynamics.com
    Password: 123456
7.  Once you've signed up, you're automatically logged into the app!  Have fun using this app!  I had an awesome time building it!!!

Angelo Brown
12/18/17
