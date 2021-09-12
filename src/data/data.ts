import { Product } from "./entities";

export default function data(): Product[] {
    return [
        {
            id: 1, name: "獨木舟", category: "水上運動",
            description: "限單人使用的小船", price: 275
        },
        {
            id: 2, name: "救生衣", category: "水上運動",
            description: "兼具保護功能與時尚", price: 48.95
        },
        {
            id: 3, name: "足球", category: "足球",
            description: "尺寸與重量已通過 FIFA 認證", price: 19.50
        },
        {
            id: 4, name: "角旗", category: "足球",
            description: "讓你的業餘球場增添專業氣息",
            price: 34.95
        },
        {
            id: 5, name: "體育館", category: "足球",
            description: "可容納 35,000 人的 DIY 組合式體育館", price: 79500
        },
        {
            id: 6, name: "思考帽", category: "西洋棋",
            description: "有效提高思考能力 75%", price: 16
        },
        {
            id: 7, name: "坐了會跌倒的椅子", category: "西洋棋",
            description: "暗中擾亂你的下棋對手",
            price: 29.95
        },
        {
            id: 8, name: "真人棋子西洋棋盤", category: "西洋棋",
            description: "絕佳的全家同樂遊戲", price: 75
        },
        {
            id: 9, name: "閃亮亮國王", category: "西洋棋",
            description: "鍍金和鑲鑽的豪華棋子", price: 1200
        }
    ];
}
