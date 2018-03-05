"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const App_1 = require("lib/core/App");
// declare function require(name: string);
// tslint:disable-next-line:no-var-requires
// tslint:disable-next-line:no-var-requires
require('source-map-support').install();
const router = express.Router({
    mergeParams: true,
});
router.use('/sys/health', (request, response) => {
    response.status(200);
    response.set('Content-Type', 'application/json');
    response.send({ "ok": true });
});
App_1.App.use(router);
const port = parseInt(process.env.NODE_PORT, 10) || 3000;
App_1.App.listen(port, () => {
    process.stdout.write(`API server Up and Running on port ${port} \n`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFFbkMsc0NBQW1DO0FBR25DLDBDQUEwQztBQUMxQywyQ0FBMkM7QUFDM0MsMkNBQTJDO0FBQzNDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBRXhDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDNUIsV0FBVyxFQUFFLElBQUk7Q0FDbEIsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFnQixFQUFFLFFBQWtCLEVBQUUsRUFBRTtJQUNqRSxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDakQsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBR0gsU0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVoQixNQUFNLElBQUksR0FBVyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFtQixFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUMzRSxTQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMscUNBQXFDLElBQUksS0FBSyxDQUFDLENBQUM7QUFDdkUsQ0FBQyxDQUFDLENBQUMifQ==