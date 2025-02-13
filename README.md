# Unhandled Exception in Asynchronous Express.js Middleware

This repository demonstrates a common error in Express.js applications where exceptions thrown within asynchronous middleware callbacks are not properly handled, leading to server crashes.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The `bug.js` example uses `setTimeout` to simulate an asynchronous operation that can either succeed or fail. If the simulated operation fails, an exception is thrown.  However, because Express.js doesn't automatically catch these exceptions within asynchronous callbacks, the server crashes without a proper error response being sent to the client.

## Solution

The `bugSolution.js` file demonstrates the proper way to handle asynchronous errors.  It uses a `try...catch` block to wrap the asynchronous operation. This ensures that exceptions are caught and handled gracefully, preventing the server from crashing.  An appropriate error response is then sent to the client.