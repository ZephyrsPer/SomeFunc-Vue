import $Http from "./request"
export default function Say() {
    return $Http({
        url: "/api",
    }, "get")
}
