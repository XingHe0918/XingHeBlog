export interface previewPageDataValue{

    id: number;
    // 文章标题
    title: string;
    // 文章简介
    synopsis: string;
    // 文章作者
    tag: { name: string }[]
    // 文章创建时间
    datetime: string;
    // 文章阅读时间
    readTime: string;
    //文字字数
    textNum: string;
    //图片
    image: any;
}
