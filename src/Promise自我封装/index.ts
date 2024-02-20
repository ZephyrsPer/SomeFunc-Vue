class MyPromise {
    status: 'pending' | 'fulfilled' | 'rejected';
    value: any;
    reason: any;
    onFulfilledCallbacks: Function[];
    onRejectedCallbacks: Function[];

    constructor(executor: (resolve: (value?: any) => void, reject: (reason?: any) => void) => void) {
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = (value?: any) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
                this.onFulfilledCallbacks.forEach(callback => callback());
            }
        };

        const reject = (reason?: any) => {
            if (this.status === 'pending') {
                this.status = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(callback => callback());
            }
        };

        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }

    then(onFulfilled: (value?: any) => void, onRejected: (reason?: any) => void) {
        if (this.status === 'fulfilled') {
            onFulfilled(this.value);
        } else if (this.status === 'rejected') {
            onRejected(this.reason);
        } else if (this.status === 'pending') {
            this.onFulfilledCallbacks.push(() => {
                onFulfilled(this.value);
            });
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason);
            });
        }
    }
}

// 示例用法
const promise = new MyPromise((resolve, reject) => {
    // 模拟异步操作
    setTimeout(() => {
        resolve('Promise resolved');
    }, 1000);
});

promise.then(
    (value) => {
        console.log('Resolved:', value);
    },
    (reason) => {
        console.log('Rejected:', reason);
    }
);
