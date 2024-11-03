import mongoose, {Schema, Document} from "mongoose";

export interface Messages extends Document{
    content: String;
    createdAt: Date
}