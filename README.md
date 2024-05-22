# UserPortal
This guide will walk you through the flow of the application and how to use its features.

## Overview
The User Manager application is a simple Angular application for managing user data. It allows users to perform CRUD (Create, Read, Update, Delete) operations on user data, including adding new users, editing existing users, and deleting users. The application also includes features like form validation, sorting, pagination, 

## Getting Started

To get started with the application, follow these steps:
- **Clone the Repository:**  Clone the repository to your local machine using Git.
git clone <repository-url>

- **Install Dependencies** Navigate to the project directory and install the dependencies using npm.
cd userManagerApp
npm install

- **Run the Application:** Start the Angular development server to run the application locally.
ng serve
Open your web browser and navigate to http://localhost:4200 to access the application.

## Application Flow

The application follows a simple flow for managing user data:

### Home Page:
Upon accessing the application, you will be directed to the Home page. The Home page includes a button labeled "View Users". Clicking this button will navigate you to the User List page.
<img width="1280" alt="image" src="https://github.com/aakritisinha66/UserPortal/assets/38459180/79ef60cb-5551-4cbd-a789-0fdddbdbc583">

### User List Page: 
The User List page displays a list of existing users, if any. If there are no users in the list, you need to add a new user.

If users are available, they will be displayed in a table format with options to edit or delete each user.
If no users are available, a message will be displayed indicating that no data is found, asking you to create a user.
<img width="1280" alt="image" src="https://github.com/aakritisinha66/UserPortal/assets/38459180/f9872153-3c03-4b6d-9e6a-522d357f37f1">
<img width="1280" alt="image" src="https://github.com/aakritisinha66/UserPortal/assets/38459180/41765551-261c-40c4-bab1-af6793f5b1b2">

### Add User: 
To add a new user, click on the "Add User" button on the User List page. This will navigate you to the User Form page.

### User Form Page: 
On the User Form page, you can enter the details of the new user, including their name, phone number, and email address. The form includes validation to ensure that the data entered is valid. Once you've filled out the form, click the "Save" button to add the user.
<img width="1280" alt="image" src="https://github.com/aakritisinha66/UserPortal/assets/38459180/8e934833-3bbf-451c-b8dd-8e285205943d">
<img width="1280" alt="image" src="https://github.com/aakritisinha66/UserPortal/assets/38459180/474a274f-7548-40a2-b8a3-1a72c813354c">
<img width="1280" alt="image" src="https://github.com/aakritisinha66/UserPortal/assets/38459180/8ee47982-7a9a-4651-affe-3a9d37dfc150">

### Edit User: 
To edit an existing user, click on the "Edit" button next to the user you want to edit on the User List page. This will navigate you to the User Form page with the user's details pre-filled in the form. You can then update the user's information and click "Save" to save the changes.

### Delete User: 
To delete a user, click on the "Delete" button next to the user you want to delete on the User List page. A confirmation dialog will appear asking you to confirm the deletion. Click "OK" to delete the user.

### Success Messages: 
Success messages will be displayed when a user is added, updated, or deleted successfully.

### Pagination and Sorting: 
The User List page includes pagination and sorting features to help you navigate and manage large lists of users. You can change the page size and navigate between pages using the paginator at the bottom of the user list. You can also sort the users by clicking on the column headers.

## Conclusion
That's it! This is my User Manager application. 

