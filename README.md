# Going Luffy-Senpai (Tier 3: eCalendar)
### Naming Scheme (Impractical? but fun!)
- Something I've started doing is internally giving things relevant names i.e. on the last project I worked on I had bow/stern instead of frontend/backend and it was dataPirates
- This naming scheme turned out to be random but its based off: https://onepiece.fandom.com/wiki/Going_Luffy-senpai 
### MonkeyDLuffy (Frontend: Angular)
#### Setup
- npm install -g @angular/cli
- npm i
#### Running
- ng serve

### TonyTonyChopper (Backend: .NET Core)

### (Data)

# Requirements
#### Structure
- Page divided into calendar potion and event list portion
- Calendar portion to have:
	- Title and Current year in header  
	- Current month between previous and upcoming month 
	- Calendar dates of the month with display of previous month’s last dates if first day of current month does not start on a Sunday 
	- Arrows bordering the body of the calendar 
- Event portion to have:
	-  Current day of the week displayed  
	-  Current month and date (numerical) displayed  
	-  List of Events with corresponding date of month divided by a vertical bar  
	-  Add event button at bottom 
- Display any appointments for the current date on app load; if no appointments are on the current day display "No Appointments"
- A modal form activated via button click that floats above the content

#### Styling:
- Styles should be reminiscent of the demo versions. Feel free to use artistic licence as long as the functionality doesn't suffer 

#### Functionality

#### Upon Load:
- Calendar will display correct layout of the current month with the weeks starting on Sunday
- Displays last days of previous month and/or first days of next month as buffers when needed; set apart with styling
- Set the current date apart from the others (in the demo above it is bolded)
- Display the current day in the appointment panel along with any appointments on that day OR a notification of "No Appointments" if none exist for that day

#### Scrolling:
- Your calendar must scroll backwards and forwards accurately

#### Manipulation:
- If there are one or more appointments for a day in the displayed month, display a small dot under the day as a visual representation
- When a user clicks on a day in the currently displayed month, the labels and appointments should update in the appointment panel
- When a user inputs a new appointment, be sure that the appointment dot under the correct day is shown immediately
- Implement full CRUD (create, review, update, delete) lifecycle for appointments (*hint: use the modal for creating/update/delete and the panel for review*);


#### Modal Form:
- This form is used to add new events to to the calendar. It is displayed when the user clicks the add icon in appointment panel
- Be able to close form without submission and have form close on submission of event information
- Have modal displayed as shown in images below
- Have at least the event name and dates as required, the other fields shown are optional
- Is hidden when not in use

#### Other:
- Your repo needs to have a robust README.md
- Make sure that there are no errors in the developer console before submitting

#### Stretch Goals
- Make your design fully responsive (small/large/portrait/landscape, etc.)
- Optimized loading of calendar site (hint, consider the background image)
- Change the background image based on the season in which the current displayed month is part of
- Add either backend persistence or use a webStorage API
- Incorporate a holiday API to automaticaly display different groups of holidays on the calendar

# Help / Additional Information
#### Chingu (https://chingu.io/)
- https://solofree.docs.chingu.io/solo/steps#tier-3-ecalendar
- https://github.com/chingu-voyages/soloproject-tier3-ecalendar

#### Angular
- https://cli.angular.io/