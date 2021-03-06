<img src="https://user-images.githubusercontent.com/23199980/116815331-fe65e980-ab2a-11eb-9e80-8f2afb34cd7d.jpg" width="50%" />

## for Flight Attendants

Calculate exact flight attendant duty limits based on current time stamp, flight sequence look up and flight sequence origination date.

<img src="https://user-images.githubusercontent.com/23199980/116765012-2ea96d00-a9f1-11eb-8593-c187a5bababc.png" width="30%"/> <img src="https://user-images.githubusercontent.com/23199980/116765019-3537e480-a9f1-11eb-9569-1c1e8a16ea1d.png" width="30%"/> <img src="https://user-images.githubusercontent.com/23199980/116765064-62849280-a9f1-11eb-9ef8-428126103846.png" width="30%"/>

Flight attendant schedules are made up of sequences that range in 1-4 days in length and have one or more duty periods each with one or more flight legs.  The clock starts ticking on a flight attendant's duty day in terms of legal limits when they report for their first flight of the day.  Depending on the location (international vs domestic) and report time, different duty period limits exist.  

The Scheduling Companion verifies the user provided sequence number for existence in the database and confirms that it operates on the date provided.  Full sequence data is displayed for the user in an easy to read format and requests user confirmation.  The application then compares the current duty period of the flight sequence with the current local time to determine the duty period limits based on sequence type (international vs domestic) and report time.  Next the application subtracts the time of the last flight leg and debrief time for the flight attendant to know the exact last minute time for door closure to still be legal to fly the last leg of the duty period.  

## Functionality and testing:

The current front end project uses a subset of the data from the backend database included here in JSON files.  See the full backend database at (see https://github.com/xfroggy/3LTB ).

1. For test positive test examples use sequence #3714 operating on 16th or any other date in bid-sheet.json for that sequence.  Alt: seq #542 on 2nd.
2. For negative test example, try sequence #3714 operating on 15th, null sequence or 1234

Design is for mobile layout as app will be for use exclusively on mobile devices.

## Deployment

Click to view current deployed version at: https://schedule-companion.netlify.app/

## Front end Built With

- **Create React App** - Bootstrapped with Create React App.**
- **Material UI** - React components that implement Google's Material Design.
- **SASS** - Syntactically Awesome Style Sheets

## Install

#### Clone this repository
$ git clone https://github.com/xfroggy/scheduling-companion.git

#### Go into the repository
$ cd scheduling-companion

#### Install dependencies
$ npm install

#### Run the app
$ npm start

Runs the app in the development mode.
Open http://localhost:3000 to view application in the browser.

## Authors

- **Todd Smitala** - [xfroggy](https://github.com/xfroggy)

## Acknowledgements

- The Educators, Teaching Assistants and staff at BrainStation, Miami - thank you for your endless support, advice and encouragement!

<img src="https://user-images.githubusercontent.com/23199980/116828361-393c4180-ab6c-11eb-8b6f-b2de81c9482d.png" width="15%"/> <img src="https://user-images.githubusercontent.com/23199980/116828363-3ccfc880-ab6c-11eb-8389-6b2dac4a849c.png" width="15%"/> <img src="https://user-images.githubusercontent.com/23199980/116828780-e57f2780-ab6e-11eb-8c6e-ac36acc1d60a.png" width="15%"/>

