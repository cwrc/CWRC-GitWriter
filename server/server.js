const path = require('path');
const express = require('express');
// const useWebpackMiddleware = require(path.join(__dirname, './dev'));

const app = express();

const port = process.env.PORT || '3000';

// if (process.env.NODE_ENV === 'development') {
//     useWebpackMiddleware(app);
// }

//make content available
app.use(express.static(path.join(__dirname, '../build')));


app.listen(port, () => {
    console.log('Server started on port:' + port);
});