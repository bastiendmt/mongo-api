"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.deleteBook = exports.addBook = exports.getbook = exports.allBooks = void 0;
var book_1 = __importDefault(require("../book"));
// GET /books
var allBooks = function (req, res) {
    var books = book_1.default.find(function (err, books) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(books);
        }
    });
};
exports.allBooks = allBooks;
//GET /book/id
var getbook = function (req, res) {
    book_1.default.findById(req.params.id, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
exports.getbook = getbook;
//PUT /book
var addBook = function (req, res) {
    var book = new book_1.default(req.body);
    book.save(function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
exports.addBook = addBook;
var deleteBook = function (req, res) {
    book_1.default.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully deleted book");
        }
    });
};
exports.deleteBook = deleteBook;
//POST /book/{id}
var updateBook = function (req, res) {
    book_1.default.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully updated book");
        }
    });
};
exports.updateBook = updateBook;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va0NvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJjb250cm9sbGVycy9ib29rQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxpREFBMkI7QUFFM0IsYUFBYTtBQUNOLElBQUksUUFBUSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDaEQsSUFBSSxLQUFLLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVEsRUFBRSxLQUFVO1FBQ3pDLElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNmO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFSUyxRQUFBLFFBQVEsWUFRakI7QUFFRixjQUFjO0FBQ1AsSUFBSSxPQUFPLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUMvQyxjQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFVBQUMsR0FBUSxFQUFFLElBQVM7UUFDL0MsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2Y7YUFBTTtZQUNMLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVJTLFFBQUEsT0FBTyxXQVFoQjtBQUVGLFdBQVc7QUFDSixJQUFJLE9BQU8sR0FBRyxVQUFDLEdBQVksRUFBRSxHQUFhO0lBQy9DLElBQUksSUFBSSxHQUFHLElBQUksY0FBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU5QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtRQUNqQixJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZjthQUFNO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoQjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBVlMsUUFBQSxPQUFPLFdBVWhCO0FBRUssSUFBSSxVQUFVLEdBQUcsVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNsRCxjQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBQyxHQUFHO1FBQ3pDLElBQUksR0FBRyxFQUFFO1lBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNmO2FBQU07WUFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVJTLFFBQUEsVUFBVSxjQVFuQjtBQUVGLGlCQUFpQjtBQUNWLElBQUksVUFBVSxHQUFHLFVBQUMsR0FBWSxFQUFFLEdBQWE7SUFDbEQsY0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFRLEVBQUUsSUFBUztRQUNsRSxJQUFJLEdBQUcsRUFBRTtZQUNQLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZjthQUFNO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFSUyxRQUFBLFVBQVUsY0FRbkIifQ==