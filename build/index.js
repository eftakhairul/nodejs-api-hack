"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./lib/core/App");
const express = require("express");
// declare function require(name: string);
// tslint:disable-next-line:no-require-imports
// tslint:disable-next-line:no-var-requires
require('source-map-support').install();
const router = express.Router({
    mergeParams: true,
});
const env = App_1.App.get('env');
const port = 3000;
if (['development', 'test', 'staging'].indexOf(env) !== -1) {
    App_1.App.set('json spaces', 2);
}
else {
    App_1.App.set('json spaces', 0);
}
router.use('/sys/health', (request, response) => {
    response.status(200);
    response.set('Content-Type', 'application/json');
    response.send('{ "ok": true }');
});
App_1.App.use(router);
App_1.App.listen(port, () => {
    process.stdout.write(`API server Up and Running on port ${port} \n`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBMkM7QUFDM0MsbUNBQW1DO0FBRW5DLDBDQUEwQztBQUMxQyw4Q0FBOEM7QUFDOUMsMkNBQTJDO0FBQzNDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBRXhDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDNUIsV0FBVyxFQUFFLElBQUk7Q0FDbEIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxHQUFHLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBRTtBQUM1QixNQUFNLElBQUksR0FBVyxJQUFJLENBQUM7QUFFMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsU0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUFDLElBQUksQ0FBQyxDQUFDO0lBQ04sU0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQUVELE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUMsT0FBcUIsRUFBRSxRQUF1QixFQUFFLEVBQUU7SUFDM0UsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixRQUFRLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ2pELFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUMsQ0FBQztBQUdILFNBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFaEIsU0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxJQUFJLEtBQUssQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsQ0FBQyxDQUFDIn0=