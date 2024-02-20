import $Http from "./Axios封装/request"


$Http({
    url: "https://api.mxycn.cn/api/mryy.php",
}, "get").then(data => {
    // 在这里处理返回的数据
    console.log("成功获取到的数据:", data);
})