"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var uri = "mongodb://127.0.0.1:27017/local";
mongoose_1.default
    .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
})
    .catch(function (error) { return console.log(error); });
exports.BookSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
});
var Book = mongoose_1.default.model("Book", exports.BookSchema);
exports.default = Book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImJvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQWdDO0FBRWhDLElBQU0sR0FBRyxHQUFXLGlDQUFpQyxDQUFDO0FBRXRELGtCQUFRO0tBQ0wsT0FBTyxDQUFDLEdBQUcsRUFBRTtJQUNaLGVBQWUsRUFBRSxJQUFJO0lBQ3JCLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsU0FBUyxFQUFFLElBQUk7Q0FDaEIsQ0FBQztLQUNELEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztBQUUzQixRQUFBLFVBQVUsR0FBRyxJQUFJLGtCQUFRLENBQUMsTUFBTSxDQUFDO0lBQzVDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN2QyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7Q0FDekMsQ0FBQyxDQUFDO0FBRUgsSUFBTSxJQUFJLEdBQUcsa0JBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLGtCQUFVLENBQUMsQ0FBQztBQUNoRCxrQkFBZSxJQUFJLENBQUMifQ==