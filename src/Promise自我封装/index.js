class MyPromise {
    constructor(executor) {
        this.status = 'pending'; // 初始状态为 pending
        this.value = undefined; // 成功时的值
        this.reason = undefined; // 失败时的原因

        const resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled'; // 将状态改为 fulfilled
                this.value = value; // 保存成功的值
            }
        };

        const reject = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected'; // 将状态改为 rejected
                this.reason = reason; // 保存失败的原因
            }
        };

        try {
            executor(resolve, reject); // 执行执行器函数
        } catch (error) {
            reject(error); // 如果执行器函数出错，将 Promise 状态改为 rejected
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status === 'fulfilled') {
            onFulfilled(this.value); // 如果状态已经是 fulfilled，则直接执行成功回调
        } else if (this.status === 'rejected') {
            onRejected(this.reason); // 如果状态已经是 rejected，则直接执行失败回调
        }
    }
}
