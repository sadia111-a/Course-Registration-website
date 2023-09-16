## Project Features:

- Course Selection and Credit Tracking
- Real-time Cart Updates
- Toast Notifications

# Managed the state in my project.

In my project code,I've effectively managed state using React's useState and useEffect hooks. State management is crucial in a React application to track and control changes in my data and components. Here's a discussion on how I've managed state in my assignment project:

- Course Data State:I use the useState hook to manage the allCourse state, which holds an array of course data fetched from my JSON file. This state is initialized as an empty array and is updated when the data is fetched using the useEffect hook. This ensures that my component re-renders when the data is available.
- Selected Courses State: I also use the useState hook to manage the selectedCourse state, which keeps track of the courses that a user has selected. When a user clicks the "Select" button, I update this state to include the selected course.

- Total Credit and Remaining Credit State: I maintain the total credit hours and remaining credit hours as separate state variables. These are updated when a user selects a course and when check if the total credit exceeds the limit of 20 credit hours.
- Cart State: In the Cart component, I calculate the total price of the selected courses by using the reduce function on the selectedCourse array. This allows to dynamically compute the total price based on the selected courses.
