# TODO

### General

- [ ] Update the badges to new path
- [ ] Dockerize API
- [ ] Update documentation
- [ ] Test electron version on current release

### Frontend

- [x] Option to remove a user
- [ ] Bring changes from demo into develop

### Database

- [ ] Create database model
- [ ] Create pasword reset service
- [x] Update Breadcrumbs in navigation
- [ ] Add light/dark theme toggler
  - [x] create dark theme
  - [x] create light theme
  - [ ] Store setting in database
- [ ] Add loading animations for
  - [ ] Initial loading of the webpage (spinner/ progress bar)
  - [x] loading of individiual components
  - [ ] skeleton loaders
- [ ] Better security for
  - [ ] admin / member roles
    - [ ] Potentially create an interface to add roles and add permitions
  - [ ] protect routes from manually entering url (manage route)
- [ ] Make avatar changeable by clicking
  - [ ] upload image on server instead of url
- [x] Ability to remove a notification
- [x] Add tooltips on icons in menu bar
- [ ] Refactor components
- [ ] Create form validation
  - [ ] Login form
    - [x] Validation of the fields
    - [ ] Fix bug login when fields are init empty
  - [ ] Create notification form
    - [x] Validation of the fields
    - [ ] Fix bug create when fields are init empty
  - [ ] Create user form
    - [x] Validation of the fields
      - Username
        - [x] min : 3
        - [x] max : 15
        - [x] Only alphabetic & numeric
        - [x] Not empty
      - DisplayName
        - [x] min : 3
        - [x] max : 20
        - [x] Only alphabetic & numeric & spaces
        - [x] Not empty
      - Password
        - [x] min : 5
        - [x] not empty
        - [x] must match
      - URL
        - [x] Not empty
        - [x] only image
        - [x] Replace with file upload
      - Email
        - [x] Not empty
        - [x] Email
      - Phone
        - [x] Not empty
      - Role
        - [x] Not empty
    - [ ] Fix bug create when fields are init empty
- [ ] Error / success reporting
- [ ] Write tests
