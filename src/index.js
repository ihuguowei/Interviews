// import Shuffle from './Algorithm/Shuffle.js';
// import Queue from './Algorithm/Queue.js';
// import Debounce from './Algorithm/Debounce.js';
// import Throttle from './Algorithm/Throttle.js';
// import BinarySearchTree from './Algorithm/BinarySearchTree.js';
import Promise from './Algorithm/Promise';
// var list = [1, 2, 3, 4, 5, 6];
// console.log(Shuffle(list));

// var queue = new Queue();
// queue.enqueue('test1');
// queue.enqueue('test2');
// queue.enqueue('test3');
// // console.log(queue);
// // console.log(queue.front());
// // console.log(queue.back());
// queue.dequeue();
// console.log(queue);
// console.log(queue.front());
// console.log(queue.back());
// console.log(queue.size());
// queue.clear();
// console.log(queue);

// let debounce = Debounce(() => {
//     console.log('Debounce',  +new Date())
// }, 100);

// debounce();

// debounce();

// debounce();

// debounce();

// debounce();

// setTimeout(() => {
//     debounce();
// }, 1000);

// let throttle = Throttle(() => {
//     console.log('throttle', +new Date())
// }, 100);


// throttle();

// throttle();

// throttle();

// setTimeout(() => {
//     throttle();
// }, 100);

// setTimeout(() => {
//     throttle();
// }, 200);

// setTimeout(() => {
//     throttle();
// }, 210);

// let binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(11);
// binarySearchTree.insert(7);
// binarySearchTree.insert(15);
// binarySearchTree.insert(5);
// binarySearchTree.insert(3);
// binarySearchTree.insert(8);
// binarySearchTree.insert(9);
// binarySearchTree.insert(10);
// binarySearchTree.insert(13);
// binarySearchTree.insert(12);
// binarySearchTree.insert(14);
// binarySearchTree.insert(20);
// binarySearchTree.insert(18);
// binarySearchTree.insert(25);
// binarySearchTree.insert(6);

// console.log(binarySearchTree.root);

// const inList = [];
// const preList = [];
// const postList = [];

// binarySearchTree.preOrderTraverse((key) => {
//     preList.push(key);
// });

// binarySearchTree.inOrderTraverse((key) => {
//     inList.push(key);
// });

// binarySearchTree.postOrderTraverse((key) => {
//     postList.push(key);
// });

// console.log('中序遍历', inList);
// console.log('先序遍历', preList);
// console.log('后序遍历', postList);

// console.log('最小', binarySearchTree.min());

// console.log('最大', binarySearchTree.max());


// const PENDING =  'pending';
// const FULFILLED =  'fulfilled';
// const REJECTED =  'rejected';

// function Promise(executor) {
// 	let status = PENDING;
// 	let result = null;

// 	let resolveList = [];
// 	let rejectList = [];
	
// 	let that = this;
// 	try {
// 		if (status !== PENDING) {
// 			return false;
// 		}
// 		setTimeout(function () {
// 			executor.call(
// 				that,
// 				(data) => {
// 					result = data;
// 					status = FULFILLED;
// 					resolveList.forEach(func => {
// 						func(result);
// 					});
// 				},
// 				(data) => {
// 					result = data;
// 					status = REJECTED;
// 					rejectList.forEach(func => {
// 						func(result);
// 					});
// 				});
// 		}, 0);
// 	} catch(e) {
// 		status = REJECTED;
// 		result = e;
// 	}

// 	this.then = function (onFulfilled, onRejected) {
// 		if (status === PENDING) {
// 			resolveList.push(onFulfilled);
// 			rejectList.push(onRejected);
// 		} else if (staus === FULFILLED) {
// 			onFulfilled(result);
// 		} else if (status === REJECTED) {
// 			onRejected(result);
// 		}

// 		return this;
// 	}

// 	this.catch = function () {

// 	}
// }



// new Promise((resolve, reject) => {
// 	setTimeout(function () {
// 		resolve();
// 	}, 1000);
// }).then(() => {
//  console.log('我最后执行')
//  console.log(this);
// }, () => {

// });
new Promise((resolve, reject) => {
	setTimeout(function () {
		resolve();
	}, 1000);
}).then(() => {
 console.log('我最后执行')
 console.log(this);
}, () => {
});

console.log('this is a test');
