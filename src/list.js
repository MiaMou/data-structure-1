// 创建（函数）一个只含有一个结点的链表（对象）
const createList = (value) => {
    // return {
    //     data: value,
    //     next: null
    // }  //重复代码可以优化成下面
    return createNode(value)   
}
// 在list上创建其他结点node
const appendNode = (list, value) => {
    // const node = {
    //     data: value,
    //     next: null
    // }    //重复代码可以优化成下面一行
    const node = createNode(value)
    let x = list
    while(x.next){
        x = x.next
    }
    // x === null 说明x是最后一个结点
    // 让node作为最后一个结点的下一个结点
    x.next = node
    //返回新增加的结点
    return node
}

// 重复代码的优化，加结点
const createNode = (value) => {
    return {
        data: value,
        next: null
    }
}

// 从哪个list删除哪个结点
const removeFromList = (list, node) => {   
    // if(list === node){
    //     // 如果删除的是第一个结点, 让list直接指向第二个结点
    //     list = node.next
    // }else if(list.next === node) {
    //     // 如果删除的是第二个结点，让第一个结点.next = 第三个结点
    //    list.next = node.next   
    // }else if((list.next).next === node){
    //     // 如果删除的是第三个结点，让第二个结点.next = 第四个结点
    //     (list.next).next = node.next
    // }  // 所以找出了规律
    let x = list  // x是当前结点
    let p = node  // p是上一个结点
    while(x !== node && x !== null){ //找那个结点
        p = x // 先用p把x记下来
        x = x.next //不是就继续找下一个记给x
    }
    if(x === null){
        // 若x为null, 则不需要删除，直接return，false表示无法删除不在list里的节点
        return false
    }else if(x === p){
        p = x.next
        return p   // 如果删除的是第一个节点，那么就要把新 list 的头节点 p 返回给外面，即 newList = removeFrom(list, list)
    }else{
        p.next = x.next  // 规律
        return list  // 如果删除的不是第一个节点，返回原来的 list 即可
    }    
}

// 遍历链表，对每一项进行fn操作
const travelList = (list, fn) => {
    let x = list
    while(x){
        fn(x)
        x = x.next
    }
}

const list = createList(10)
const node = list
const node2 = appendNode(list, 20)
const node3 = appendNode(list, 30)
const newList = removeFromList(list, node)
console.log(newList) // 必须用 newList 获取返回值才能拿到删除了第一个节点的新 list
console.log(list) // 删除其他节点的list 返回原list即可
travelList(list, (node)=>{
    console.log(node.data);
})
