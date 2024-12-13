# React Router Dom v6 Nested Routes Not Rendering

This repository demonstrates a common issue encountered when working with nested routes in React Router Dom v6: nested routes failing to render even when the parent route is active.  The solution involves ensuring proper nesting and the use of the `Outlet` component.

## Problem
The provided `bug.js` file shows a basic setup with nested routes.  Despite the parent route being correctly matched, the nested route component does not render.

## Solution
The solution, shown in `bugSolution.js`, utilizes the `Outlet` component within the parent route to render the child routes. This is crucial for proper nested routing in React Router v6.
