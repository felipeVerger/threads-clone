export interface ThreadType {
    _id?: string;
    text: string;
    author: {
        _id: string;
        id: string;
        image: string;
        name: string;
    };
    community: null;
    children: [];
    createdAt: Date | number; 
    __v: number
}