import { ProfileInfo } from "./profile-info";

export interface PostInfo
{
    id: number;
    profile: ProfileInfo;
    title: string;
    content: string;
    creationDate: Date;
    comments: CommentInfo[];
}

export interface CommentInfo
{
    id: number;
    profile: ProfileInfo;
    content: string;
    creationDate: string;
}