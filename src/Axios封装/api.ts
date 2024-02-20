import $Http from "./request"
export default function Say() {
    return $Http({
        url: "https://api.mxycn.cn/api/mryy.php",
    }, "get")
}
